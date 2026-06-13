"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const numFrames = 75;

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < numFrames; i++) {
      const img = new Image();
      // Pad to 2 digits for indices 00 to 74
      const indexStr = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === numFrames) {
          setImages(loadedImages);
          // Draw first frame once all are loaded
          drawFrame(loadedImages[0]);
        }
      };
      // In case of error loading frame, still increment to avoid getting stuck
      img.onerror = () => {
        console.error(`Failed to load frame ${indexStr}`);
        loadedCount++;
        if (loadedCount === numFrames) {
          setImages(loadedImages);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (img: HTMLImageElement | undefined) => {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (fit to width)
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image (fit to height)
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      if (images.length > 0) {
        const frameIndex = Math.floor(scrollYProgress.get() * (numFrames - 1));
        drawFrame(images[frameIndex]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Ensure we don't go out of bounds
    let frameIndex = Math.floor(latest * numFrames);
    if (frameIndex >= numFrames) frameIndex = numFrames - 1;
    
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => drawFrame(images[frameIndex]));
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="block w-full h-full"
        />
      </div>
    </div>
  );
}
