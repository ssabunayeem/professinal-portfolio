"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({ numFrames }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();

  // Map 0 -> 3000px (approx 3-4 screens) to 0 -> numFrames - 1
  const currentIndex = useTransform(scrollY, [0, 3000], [0, numFrames - 1]);

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rawIndex = Math.max(0, Math.min(numFrames - 1, Math.floor(index)));
    const img = images[rawIndex];

    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Preload Images
  useEffect(() => {
    let isCancelled = false;
    const loadedImages = new Array(numFrames);

    const loadAllImages = async () => {
      // 1. Load First Frame with High Priority
      const firstImg = new Image();
      firstImg.src = "/sequence/frame_000.webp";

      await new Promise((resolve) => {
        firstImg.onload = resolve;
        firstImg.onerror = resolve;
      });

      if (isCancelled) return;

      loadedImages[0] = firstImg;
      setImages([...loadedImages]);
      setIsLoaded(true); // Allow rendering as soon as the first frame is ready

      // Initial render for frame 0
      requestAnimationFrame(() => renderFrame(0));

      // 2. Load the rest in parallel batches to avoid overwhelming the browser
      const remainingIndices = Array.from(
        { length: numFrames - 1 },
        (_, i) => i + 1,
      );

      // Load in concurrent batches of 20
      const batchSize = 20;
      for (let i = 0; i < remainingIndices.length; i += batchSize) {
        const batch = remainingIndices.slice(i, i + batchSize);
        await Promise.all(
          batch.map((index) => {
            return new Promise((resolve) => {
              const img = new Image();
              const paddedIndex = index.toString().padStart(3, "0");
              img.src = `/sequence/frame_${paddedIndex}.webp`;
              img.onload = () => {
                loadedImages[index] = img;
                resolve();
              };
              img.onerror = resolve;
            });
          }),
        );

        if (isCancelled) return;

        // Update images state periodically to allow scrolling mid-load
        setImages([...loadedImages]);
      }
    };

    loadAllImages();

    return () => {
      isCancelled = true;
    };
  }, [numFrames]);

  // Resize Handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame
        const idx = currentIndex.get();
        renderFrame(idx);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener("resize", handleResize);
  }, [images]); // Re-bind if images reload

  // Animation Loop / Scroll Listener
  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (isLoaded) {
      requestAnimationFrame(() => renderFrame(latest));
    }
  });

  return <canvas ref={canvasRef} className="block w-full h-full" />;
}
