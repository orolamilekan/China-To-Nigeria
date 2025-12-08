import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700">
          China in Nigeria
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 lg:gap-10">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-blue-700 font-medium hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-700 text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block text-blue-700 font-medium hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
