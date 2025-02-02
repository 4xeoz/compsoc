import { useState, useEffect, isValidElement, cloneElement, ReactElement } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className="overflow-hidden relative h-80 w-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, i) => {
          if (isValidElement(slide)) {
            const element = slide as ReactElement<any>;
            if (typeof element.type === "string" && element.type === "img") {
              return (
                <div key={i} className="w-full flex-shrink-0 h-full">
                  {cloneElement(element, {
                    className: `${element.props.className || ""} w-full h-full object-cover`,
                  })}
                </div>
              );
            }
          }
          return (
            <div key={i} className="w-full flex-shrink-0 h-full">
              {slide}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MdChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <MdChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
