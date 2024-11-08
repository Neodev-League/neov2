import React, { useEffect, useRef } from "react";

const WelcomeSection = () => {
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const animateBubbles = () => {
      bubbleRefs.current.forEach((bubble, index) => {
        if (bubble) {
          const speed = 0.5 + Math.random() * 0.5;
          const xAxis = Math.sin(Date.now() * 0.001 * speed + index) * 20;
          const yAxis = Math.cos(Date.now() * 0.002 * speed + index) * 20;
          bubble.style.transform = `translate3d(${xAxis}px, ${yAxis}px, 0) rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
        }
      });
      requestAnimationFrame(animateBubbles);
    };

    animateBubbles();
  }, []);
  return (  // Corrected the return statement syntax
    /* Enhanced Welcome Section with Beautiful Bubble Effect */
    <section className="relative px-8 md:px-16 py-24 overflow-hidden bg-gradient-to-br from-[#D1FAE5] to-[#C4EDE0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content with Gradient Overlay */}
          <div className="space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#34D399]/10 to-transparent rounded-3xl filter blur-3xl animate-pulse"></div>
        <h2 className="font-manrope font-bold text-4xl md:text-5xl text-[#065f46] relative z-10">
          Welcome to the Neo Developer League
          <div className="absolute -inset-1 bg-gradient-to-r from-[#34D399]/20 to-transparent rounded-lg blur animate-pulse"></div>
        </h2>
        <p className="text-lg text-[#065f46]/70 leading-relaxed relative z-10">
          Empowering high school students through competitive programming, 
          fostering innovation, and building a community of future tech leaders 
          through the World.
        </p>
      </div>

      {/* Enhanced Bubble Effect */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="bubble-container absolute inset-0">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className={`
                absolute rounded-full bg-gradient-to-br from-white/90 to-white/70
                backdrop-blur-md shadow-lg overflow-hidden
                transition-all duration-[3000ms] ease-in-out
                hover:scale-110 hover:shadow-xl hover:z-10
                animate-float-slow
              `}
              style={{
                width: `${Math.max(155, Math.random() * 200)}px`,
                height: `${Math.max(155, Math.random() * 200)}px`,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              <div className="
                w-full h-full bg-gradient-to-br from-[#34D399]/10 to-[#065f46]/10
                flex items-center justify-center rounded-full
                transform transition-transform duration-500 hover:scale-105
                group
              ">
                <span className="
                  text-sm font-semibold text-[#065f46]/70
                  transition-all duration-300
                  group-hover:text-[#065f46] group-hover:scale-110
                ">
                  Media {i + 1}
                </span>
                <div className="
                  absolute inset-0 bg-gradient-to-br from-[#34D399]/20 to-[#065f46]/20
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  rounded-full blur-xl
                "></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default WelcomeSection;
