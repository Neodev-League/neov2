import { useEffect, useState } from "react";
import logo from "./assets/Neo-logo.png";
import SubSection from "./SubSection";
import neobuild1 from "./assets/neobuild1.png";
import neobuild2 from "./assets/neobuild2.png";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* Intro animation */}
      <div
        className={`intro-container ${
          isLoaded ? "fade-out" : ""
        }`}
      >
        <div className="wave-effect" />
        <div className="relative z-10 flex items-center justify-center">
          <img
            src={logo}
            alt="Neo Developer League"
            className="neo-logo"
          />
        </div>
      </div>

      {/* Main content */}
      <div
        className={`content absolute inset-0 ${
          isLoaded ? "loaded" : ""
        } overflow-y-auto pt-12`}
      >
        <div className="min-h-screen bg-gradient-to-b from-white via-[#D1FAE5] to-[#C4EDE0] bg-local">
          {/* Hero Section */}
          <section className="relative h-screen overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left side - Text Content */}
              <div className="flex-1 px-4 sm:px-6 md:pl-16 flex items-center justify-center">
                <div className="max-w-2xl">
                  <h1 className="font-manrope font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-[#065f46] leading-tight mb-4 md:mb-8 text-center md:text-left">
                    inspiring the next <br className="hidden md:block" />
                    <span className="relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#065f46] via-[#34D399] to-[#065f46] bg-size-200 animate-gradient-x">
                        generation of engineers.
                      </span>
                      <span className="absolute -inset-1 border border-[#34D399]/10 rounded-lg blur-sm"></span>
                    </span>
                  </h1>

                  {/* Apply Now Button */}
                  <div className="mt-12 flex justify-center md:justify-start">
                    <button className="relative group cursor-not-allowed">
                      <div
                        className="relative px-8 py-3 bg-[#065f46] text-white rounded-sm font-semibold
                                    overflow-hidden transition-all duration-300
                                    group-hover:bg-[#0b8065]"
                      >
                        <span className="relative z-10">apply now</span>
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
                        className="absolute top-0 left-0 px-2 py-1 text-xs text-white bg-[#065f46] rounded-sm
                                     transform -translate-y-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Coming Soon
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Large Logo */}
              <div className="flex-1 relative flex items-center justify-center md:block">
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
          <SubSection/>

          {/* Footer */}
          <footer className="relative px-8 md:px-16 py-12 backdrop-blur-sm border-t border-[#34D399]/10 overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 opacity-45">
              <img
                src={neobuild1}
                alt=""
                className="absolute right-0 bottom-0 w-48 h-auto transform rotate-12 translate-x-12 translate-y-6"
              />
              <img
                src={neobuild2}
                alt=""
                className="absolute left-0 top-0 w-48 h-auto transform -rotate-12 -translate-x-12 -translate-y-6"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="space-y-4">
                  <img
                    src={logo}
                    alt="Neo Logo"
                    className="w-12 h-12 hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm text-[#065f46]/70">
                    Building the next generation of tech leaders through
                    competitive programming.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-manrope font-semibold text-[#065f46] mb-4 relative">
                    Quick Links
                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#34D399] to-transparent"></span>
                  </h3>
                  <ul className="space-y-2">
                    {["About", "Podcast", "Signal"].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-[#065f46]/70 hover:text-[#34D399] transition-colors relative group flex items-center"
                        >
                          <span className="absolute -left-4 w-2 h-2 bg-[#34D399] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-manrope font-semibold text-[#065f46] mb-4 relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#34D399] to-transparent"></span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-2 text-sm text-[#065f46]/70">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Waterloo, ON</span>
                    </li>
                    <li>
                      <a
                        href="mailto:info@neodevleague.com"
                        className="flex items-center space-x-2 text-sm text-[#065f46]/70 hover:text-[#34D399] transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>info@neodevleague.com</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/neodevleague"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-[#065f46]/70 hover:text-[#34D399] transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>neodevleague</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-4 border-t border-[#34D399]/10 text-center">
                <p className="text-sm text-[#065f46]/70">©</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
