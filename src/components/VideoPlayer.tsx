"use client";
import { useState } from 'react';

export default function VideoPlayer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative rounded-lg sm:rounded-2xl overflow-hidden bg-muted aspect-video w-full">
      {!loaded ? (
        <div
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center cursor-pointer group"
          style={{ background: 'linear-gradient(135deg, #0f766e, #065f46)' }}
          onClick={() => setLoaded(true)}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 shadow-2xl mb-4">
            <i className="ri-play-fill text-white text-4xl ml-1"></i>
          </div>
          <p className="text-white font-semibold text-lg">Ver Demo de BudgetTrack</p>
          <p className="text-white/70 text-sm mt-1">Click para reproducir</p>
        </div>
      ) : (
        <iframe
          src="https://player.vimeo.com/video/1159768753?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1"
          className="absolute inset-0 w-full h-full"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="BudgetTrack - Video Demo"
          allowFullScreen
        />
      )}
    </div>
  );
}
