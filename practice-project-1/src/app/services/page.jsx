"use client";

import { useState, useRef } from "react";

const cardsData = [
  {
    id: 1,
    title: "AI in Future Work",
    image:
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800",
  },
  {
    id: 2,
    title: "Web Development Trends",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  },
  {
    id: 3,
    title: "Modern UI Design",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800",
  },
];

const BlogCards = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-10">

      {cardsData.map((card) => (
        <div
          key={card.id}
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          {/* Tooltip */}
          <span
            className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
            style={{
              top: position.y + 10,
              left: position.x + 10,
              opacity: tooltipVisible ? 1 : 0,
              transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
              transition: "all 0.2s ease-out",
            }}
          >
            Author: John Doe
          </span>

          {/* Image */}
          <img
            className="rounded-t-lg w-96 h-56 object-cover object-top"
            src={card.image}
            alt="blog"
          />

          {/* Content */}
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
              {card.title}
            </h5>

            <p className="mb-3 text-gray-700">
              Explore how technology is shaping the modern world.
            </p>

            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;