import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Brain } from "lucide-react";
import { NAV_ITEMS } from "../../data/constants";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";
  const shouldUseTransparentStyle = isHomePage && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseTransparentStyle
          ? "bg-transparent py-4"
          : "bg-white shadow-md py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Brain
              size={32}
              className={`transition-colors duration-300 ${
                shouldUseTransparentStyle ? "text-white" : "text-primary-600"
              }`}
            />
            <span
              className={`font-bold text-xl transition-colors duration-300 ${
                shouldUseTransparentStyle ? "text-white" : "text-neutral-800"
              }`}
            >
              PET-to-CT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`transition-colors duration-300 ${
                      shouldUseTransparentStyle
                        ? "text-white hover:text-primary-200"
                        : "text-neutral-700 hover:text-primary-600"
                    } ${location.pathname === item.href ? "font-medium" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              shouldUseTransparentStyle ? "text-white" : "text-neutral-800"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`block py-2 px-4 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 ${
                    location.pathname === item.href
                      ? "bg-primary-50 text-primary-600 font-medium"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
