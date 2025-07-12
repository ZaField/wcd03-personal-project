import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "skill", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-sm bg-transparent text-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Zaky Hafiedz</div>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-xl">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition-all duration-200 ${
                  activeSection === section ? "font-bold" : "font-normal"
                } hover:underline`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-4 space-y-4 text-xl">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={handleLinkClick}
                className={`block transition-all duration-200 ${
                  activeSection === section ? "font-bold" : "font-normal"
                } hover:underline`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
