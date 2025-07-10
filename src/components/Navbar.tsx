import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
  navOpen: boolean;
};

const Navbar = ({ navOpen }: NavbarProps) => {
  const lastActiveLink = useRef<HTMLAnchorElement>(null);
  const activeBox = useRef<HTMLDivElement>(null);

  const initActiveBox = () => {
    activeBox.current!.style.top = lastActiveLink.current?.offsetTop + "px";

    activeBox.current!.style.left = lastActiveLink.current?.offsetLeft + "px";

    activeBox.current!.style.width = lastActiveLink.current?.offsetWidth + "px";

    activeBox.current!.style.height =
      lastActiveLink.current?.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
  }, []);

  window.addEventListener("resize", () => {
    initActiveBox();
  });

  const currentActiveLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove("active");
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;

    activeBox.current!.style.top = event.currentTarget?.offsetTop + "px";

    activeBox.current!.style.left = event.currentTarget?.offsetLeft + "px";

    activeBox.current!.style.width = event.currentTarget?.offsetWidth + "px";

    activeBox.current!.style.height = event.currentTarget?.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Home",
      link: "/",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "/about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "/work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "/reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "/contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          ref={item.ref}
          className={item.className}
          onClick={currentActiveLink}
        >
          {item.label}
        </Link>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
