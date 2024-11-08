import React, { useEffect, useRef } from "react";
import vineLeft from './assets/vinesLeft.png';
import neoMascot from './assets/mascot.png';
import vineRight from './assets/vinesRight.png';

const WelcomeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <section className="relative px-8 md:px-16 py-24 overflow-hidden bg-gradient-to-br from-[#D1FAE5] to-[#C4EDE0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              <h2 className="font-manrope font-bold text-4xl md:text-5xl text-[#065f46]">
                Welcome to the Neo Developer League
              </h2>
              <p className="text-lg text-[#065f46]/70 leading-relaxed">
                Empowering high school students through competitive programming, 
                fostering innovation, and building a community of future tech leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Info Section */}
      <section className="relative px-8 md:px-16 py-24 bg-white">
        {/* Decorative Vines */}
        <img
          src={vineLeft}
          alt=""
          className="absolute left-0 h-full object-contain opacity-20"
        />
        <img
          src={vineRight}
          alt=""
          className="absolute right-0 h-full object-contain opacity-20"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="scroll-reveal">
                <h3 className="font-manrope font-bold text-3xl text-[#065f46] mb-4">
                  Innovate & Compete
                </h3>
                <p className="text-[#065f46]/70">
                  Join a community of passionate developers, compete in exciting 
                  challenges, and build your skills through hands-on experience.
                </p>
              </div>

              <div className="scroll-reveal">
                <h3 className="font-manrope font-bold text-3xl text-[#065f46] mb-4">
                  Learn & Grow
                </h3>
                <p className="text-[#065f46]/70">
                  Access mentorship from industry professionals, collaborate with 
                  peers, and develop real-world programming skills.
                </p>
              </div>

              <div className="scroll-reveal">
                <h3 className="font-manrope font-bold text-3xl text-[#065f46] mb-4">
                  Connect & Create
                </h3>
                <p className="text-[#065f46]/70">
                  Build lasting connections within the tech community and work on 
                  projects that matter.
                </p>
              </div>
            </div>

            {/* Interactive Image Section */}
            <div className="relative h-[600px]">
              <div className="sticky top-24">
                <div className="relative">
                  <img
                    src={neoMascot}
                    alt="Neo Mascot"
                    className="w-full h-auto floating-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
