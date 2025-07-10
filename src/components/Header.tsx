import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            {/* <img src="/src/images/logo.svg" alt="logo" width={40} height={40} /> */}
            <h1 className="text-3xl text-yellow-500 font-bold hover:scale-105 duration-300">
              Zin Htet
            </h1>
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="menu-btn md:hidden"
          >
            <span className="material-symbols-rounded">
              {navOpen ? <X /> : <Menu />}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="/#contact"
          className="btn btn-secondary max-md:hidden md: justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
