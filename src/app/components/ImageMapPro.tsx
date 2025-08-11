"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageMapPro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let observer: MutationObserver | null = null;

    async function init() {
      try {
        const response = await fetch("/script/image-map-config.json");
        const config = await response.json();

        const startObserver = () => {
          const target = document.getElementById("image-map-pro");

          if (!target) return;

          observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (mutation.type === "childList" && target.children.length > 0) {
                setIsLoading(false);
                observer?.disconnect();
                break;
              }
            }
          });

          observer.observe(target, { childList: true });
        };

        const initializeMap = () => {
          startObserver();
          if (window.ImageMapPro) {
            window.ImageMapPro.init("#image-map-pro", config);
          }
        };

        const existingScript = document.querySelector(
          'script[src="/script/image-map-pro.min.js"]'
        );

        if (!existingScript) {
          const script = document.createElement("script");
          script.src = "/script/image-map-pro.min.js";
          script.async = true;
          script.onload = () => {
            if (window.ImageMapPro) {
              initializeMap();
            }
          };
          document.body.appendChild(script);
        } else {
          if (window.ImageMapPro) {
            initializeMap();
          }
        }
      } catch (error) {
        console.error("Failed to initialize ImageMapPro:", error);
        setIsLoading(false);
      }
    }

    init();

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-full lg:min-h-[764.7px]">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/banner/banner.jpg"
            alt="banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div id="image-map-pro" className="w-full h-full" />
    </div>

  );
}
