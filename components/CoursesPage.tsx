"use client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { coursesData } from "../data";
import { Seo } from "./Seo";

export const CoursesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[#F9FAFB] dark:bg-gray-950 min-h-screen transition-colors" id="courses-page">
      <Seo
        title="Courses | Gajkesari Digital Agency"
        description="Industry-grade training with live internships in SEO, social media, PPC, content, and WordPress."
        keywords="courses, training, internship, SEO training, PPC training, social media training, content strategy training, WordPress training"
        canonical={`${window.location.origin}/courses`}
        image={`${window.location.origin}/images/logo.png`}
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Courses",
          "url": `${window.location.origin}/courses`
        }}
      />
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeader label="Our Courses" title="Courses We" subtitle="Offer" />
          <div className="mb-12">
            <Link
              to="/"
              className="bg-[#1F4037] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 hover:bg-[#152C26] transition-all shadow-md hover:shadow-lg"
            >
              <span className="font-medium">Back to Home</span>
              <span className="w-8 h-8 rounded-full bg-[#FDB827] text-[#1F4037] flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div key={course.id} className="h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link to={`/course/${course.id}`} className="block h-full">
                <TiltCard className="h-full relative z-0 hover:z-20 group">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 hover:border-[#FDB827]/50 transition-colors duration-300 cursor-pointer h-full relative overflow-hidden flex flex-col">

                    {/* Image */}
                    <div className="w-full h-64 bg-gray-50 dark:bg-gray-800 rounded-2xl mb-6 shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 relative flex-shrink-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-1 transition-colors">{course.title}</h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-6 text-base leading-relaxed line-clamp-3 flex-grow transition-colors">
                      {course.description}
                    </p>

                    {/* Footer CTA */}
                    <div className="flex items-center gap-2 text-[#1F4037] dark:text-[#FDB827] font-semibold text-sm group-hover:text-[#FDB827] transition-colors mt-auto">
                      <span>Learn more</span>
                      <ArrowRight size={16} />
                    </div>

                  </div>
                </TiltCard>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoursesPage;
