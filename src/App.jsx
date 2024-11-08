import React, { useEffect, useState } from "react";
import logo from "./assets/Neo-logo.png";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* macOS-style Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 flex items-center px-4">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="flex items-center space-x-2 text-[#065f46] hover:text-[#34D399] transition-colors"
          >
            <span className="text-sm font-medium">Home</span>
          </a>
          <a
            href="/dashboard"
            className="flex items-center space-x-2 text-[#065f46] hover:text-[#34D399] transition-colors"
          >
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            href="/sponsor"
            className="flex items-center space-x-2 text-[#065f46] hover:text-[#34D399] transition-colors"
          >
            <span className="text-sm font-medium">Sponsor</span>
          </a>
        </div>
      </nav>

      {/* Intro animation */}
      <div className="intro-container">
        <div className="cooked grid place-items-center h-screen w-screen perspective-container">
          <img
            src={logo}
            alt="Neo Developer League"
            className="cooked logo-fade w-48"
          />
        </div>
      </div>

      {/* Glitch overlay */}
      <div className="glitch"></div>

      {/* Main content */}
      <div
        className={`content absolute inset-0 ${
          isLoaded ? "loaded" : ""
        } overflow-y-auto pt-12`}
      >
        <div className="min-h-screen bg-gradient-to-b from-white via-[#D1FAE5] to-[#C4EDE0]">
          {/* Hero Section */}
          <section className="relative h-screen overflow-hidden">
            <div className="flex h-full">
              {/* Left side - Text Content */}
              <div className="flex-1 pl-8 md:pl-16 flex items-center">
                <div className="max-w-2xl">
                  <h1 className="font-manrope font-bold text-5xl md:text-7xl text-[#065f46] leading-tight mb-6">
                    Inspiring the Next <br />
                    <span className="relative inline-block">
                      <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#065f46] via-[#34D399] to-[#065f46] 
                                     bg-size-200 animate-gradient-x"
                      >
                        Generation of Engineers
                      </span>
                      <span className="absolute -inset-1 border border-[#34D399]/10 rounded-lg blur-sm"></span>
                    </span>
                  </h1>

                  {/* Apply Now Button */}
                  <div className="mt-12">
                    <button className="relative group cursor-not-allowed">
                      <div
                        className="relative px-8 py-3 bg-[#065f46] text-white rounded-lg font-semibold
                                    overflow-hidden transition-all duration-300
                                    group-hover:bg-[#0b8065]"
                      >
                        <span className="relative z-10">Apply Now</span>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-[#34D399] to-[#6ee7b7]
                                      opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        ></div>
                      </div>
                      <div
                        className="absolute -inset-[2px] bg-gradient-to-r from-[#34D399] to-[#6ee7b7]
                                    rounded-lg opacity-75 blur group-hover:opacity-100 transition-opacity duration-300
                                    -z-10"
                      ></div>
                      <span
                        className="absolute top-0 left-0 px-2 py-1 text-xs text-white bg-[#065f46] rounded-md
                                     transform -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Coming Soon
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Large Logo */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Neo Logo"
                    className="w-[90%] h-[90%] object-contain animate-pulse"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(52, 211, 153, 0.3))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#065f46] rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-[#065f46] rounded-full animate-scroll"></div>
              </div>
            </div>
          </section>

          {/* Welcome Section with Updated Media Flow */}
          <section className="relative px-8 md:px-16 py-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                  <h2 className="font-manrope font-bold text-4xl md:text-5xl text-[#065f46]">
                    Welcome to the Neo Developer League
                  </h2>
                  <p className="text-lg text-[#065f46]/70 leading-relaxed">
                    Empowering high school students through competitive
                    programming, fostering innovation, and building a community
                    of future tech leaders through the World.
                  </p>
                </div>

                {/* Updated Media Flow */}
                <div className="relative h-[600px] overflow-hidden">
                  <div className="media-flow">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full bg-white/80 backdrop-blur-sm 
                                     shadow-lg border border-[#34D399]/20 overflow-hidden
                                     transition-all duration-500 hover:scale-110`}
                        style={{
                          width: `${Math.max(160, Math.random() * 240)}px`,
                          height: `${Math.max(160, Math.random() * 240)}px`,
                          top: `${i * 22 + Math.random() * 10}%`,
                          left: `${(i % 2) * 35 + Math.random() * 20}%`,
                          transform: `translateX(${Math.random() * 40}px)`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      >
                        <div className="w-full h-full bg-[#065f46]/5 flex items-center justify-center">
                          <span className="text-sm text-[#065f46]/50">
                            Media {i + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative px-8 md:px-16 py-12 bg-white/50 backdrop-blur-sm border-t border-[#34D399]/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="space-y-4">
                  <img src={logo} alt="Neo Logo" className="w-12 h-12" />
                  <p className="text-sm text-[#065f46]/70">
                    Building the next generation of tech leaders through
                    competitive programming.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-manrope font-semibold text-[#065f46] mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-[#065f46]/70 hover:text-[#065f46] transition-colors"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-[#065f46]/70 hover:text-[#065f46] transition-colors"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-[#065f46]/70 hover:text-[#065f46] transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-manrope font-semibold text-[#065f46] mb-4">
                    Contact
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-[#065f46]/70">Waterloo, ON</li>
                    <li className="text-sm text-[#065f46]/70">
                      info@neodevleague.com
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-4 border-t border-[#34D399]/10 text-center">
                <p className="text-sm text-[#065f46]/70">
                  © 2024 Neo Developer League. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
