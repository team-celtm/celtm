"use client";
import React from "react";
import { Users, ArrowRight, Zap, Target, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/Login");
  };

  return (
    <>
      <div className=" md:min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900 overflow-hidden relative">
        {/* Hero Section with Video Background */}
        <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/video/bg_14.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 z-5"></div>

          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 mt-20">
            <div className="max-w-5xl mx-auto mt-10">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-tight px-2">
                What if Talent could
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
                  speak for itself ?
                </span>
              </h1>

              <div className="mb-8 sm:mb-12">
                <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 mb-4 drop-shadow-lg  font-bold">
                  We built the system that listens.
                </p>
                <p className="text-base sm:text-lg md:text-2xl text-gray-200 w-full text-center leading-relaxed px-4 drop-shadow-lg font-bold">
                  CELTM is building an AI-powered Talent Intelligence Engine
                  that helps transform
                  <br />
                  <span className="text-white">
                    LEARNING INTO EMPLOYABILITY.
                  </span>
                </p>
                <br />
                <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg  font-bold">
                  Discover who's ready. Develop who's rising. Deploy who
                  matters.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
