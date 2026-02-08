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
    let loadedCount = 0;
    const loadedImages = [];

    const loadBatch = async () => {
      // Load all frames
      for (let i = 0; i < numFrames; i++) {
        const img = new Image();
        // Pad index to 3 digits: 000, 001...
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}.webp`;

        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            resolve(true);
          };
          img.onerror = () => resolve(false); // Skip error but continue
        });
        loadedImages[i] = img;
      }
      setImages(loadedImages);
      setIsLoaded(true);
      // Initial render
      requestAnimationFrame(() => renderFrame(0));
    };

    loadBatch();
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
