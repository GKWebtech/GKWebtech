import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { servicesData, coursesData } from "../data";

export const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"tech" | "institute">("tech");

  const currentData = activeTab === "tech" ? servicesData : coursesData;
  const extendedItems = [...currentData, ...currentData, ...currentData];

  useEffect(() => {
    if (scrollContainerRef.current) {
      setTimeout(() => {
        scrollContainerRef.current!.scrollLeft =
          scrollContainerRef.current!.scrollWidth / 3;
      }, 0);
    }
  }, [activeTab]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const oneThird = totalWidth / 3;

    if (container.scrollLeft < 50) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft += oneThird;
      container.style.scrollBehavior = "";
    } else if (container.scrollLeft > 2 * oneThird + 50) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft -= oneThird;
      container.style.scrollBehavior = "";
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
    scrollContainerRef.current.scrollBy({
      left: direction === "right" ? amount + 24 : -(amount + 24),
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col  md:flex-row justify-between items-center mb-12">
          <SectionHeader label="Our Offerings" title="Solutions We" subtitle="Provide" />

          <div className="flex items-center gap-4">
            {/* Toggle Pills */}
            <div className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-md flex border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("tech")}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeTab === "tech"
                    ? "bg-[#1F4037] text-white shadow-lg"
                    : "text-gray-500 hover:text-[#1F4037]"
                }`}
              >
                GKTech
              </button>
              <button
                onClick={() => setActiveTab("institute")}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeTab === "institute"
                    ? "bg-[#FDB827] text-[#1F4037] shadow-lg"
                    : "text-gray-500 hover:text-[#1F4037]"
                }`}
              >
                GKInstitute
              </button>
            </div>

            {/* View All Button (swaps based on tab) */}
            <Link
              to={activeTab === "tech" ? "/services" : "/courses"}
              className="bg-[#1F4037] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 hover:bg-[#152C26] transition-all shadow-md hover:shadow-lg"
            >
              <span className="font-medium">
                {activeTab === "tech" ? "View All Services" : "View All Courses"}
              </span>
              <span className="w-8 h-8 rounded-full bg-[#FDB827] text-[#1F4037] flex items-center justify-center">
                <ArrowRight size={16} strokeWidth={3} />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-[#1F4037] dark:text-white hover:bg-[#FDB827] transition-all -ml-6 border border-gray-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-4 md:px-0"
          >
            {extendedItems.map((item, i) => (
              <div key={`${item.id}-${i}`} className="shrink-0 snap-center w-[85vw] md:w-[30vw] xl:w-[23vw]">
                <Link to={activeTab === "tech" ? `/service/${item.id}` : `/course/${item.id}`} className="block h-full">
                  <TiltCard className="h-full relative z-0 hover:z-20 group">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-300 hover:border-[#FDB827]/50 transition cursor-pointer h-full flex flex-col">
                      <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-[#1F4037] dark:text-white mb-4 line-clamp-1 group-hover:text-[#FDB827] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-700 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 text-[#1F4037] dark:text-[#FDB827] font-semibold text-sm group-hover:text-[#FDB827] transition-colors mt-auto">
                        <span>{activeTab === "tech" ? "Learn More" : "View Syllabus"}</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-[#1F4037] dark:text-white hover:bg-[#FDB827] transition-all -mr-6 border border-gray-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
