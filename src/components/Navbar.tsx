import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UilMultiply, UilBars } from "@iconscout/react-unicons";
import {motion} from "framer-motion";

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    {
      id: "about",
      name: "About",
    },
    
    {
      id: "skills",
      name: "Skills",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "blog",
      name: "Blog",
    },
    {
      id: "contact",
      name: "Contact",
    },
  ];

  // const container = {
  //   hidden: {opacity:0},
  //   show: {
  //     opacity:1,
  //     transition: {
  //       staggerChildren: 0.2,
  //       delayChildren: 0.2,
        
  //     }
  //   }
  // }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else if (window.innerWidth >= 768) {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        const scrollTop = window.scrollY;
        if (scrollTop > 130) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`sm:px-6 px-6 w-full fixed top-0 z-20 flex ${
        scrolled
          ? "bg-white dark:bg-black"
          : "dark:bg-transparent bg-transparent"
      } p-8 justify-between font-ikaros items-center`}
    >
      <div 
      className="w-full flex justify-between items-center max-w-full"
      
      // variants = {container}
      >
        <div className={`sm:flex ${scrolled ? "" : "hidden"} `}>
          <Link
            to="/"
            className="text-4xl text-[#DEAD4F] "
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            Roshan.{" "}
          </Link>
        </div>
        <div>
        <ul className="list-none hidden sm:flex flex-row md:gap-10 gap-3">
          {links.map((link) => (
            <li
              className={`text-black  text-xl dark:text-white cursor-pointer dark:hover:text-[#DEAD4F] transition ease-in-out delay-150 hover:scale-110 text-[18px] font-medium ${
                active === link.name ? "text-[#DEAD4F]" : "text-white"
              } `}
              key={link.id}
              onClick={() => setActive(link.name)}
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        </div>
        <div className="list-none hidden sm:flex flex-row justify-center items-center border rounded-full">
          <a
            className="dark:text-white h-10 px-3 pt-1.5 text-xl"
            href="https://blogs.roshanjagadish.tech/"
            target="_blank"
          >
            {" "}
            Check out my Blog{" "}
          </a>
        </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <UilMultiply size="30" color="#DEAD4F" />
          ) : (
            <UilBars size="30" color="#DEAD4F" />
          )}
        </button>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {links.map((link) => (
              <li
                className={`font-medium cursor-pointer text-[24px] ${
                  active === link.name ? "text-[#DEAD4F]" : "text-white"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.name);
                }}
                key = {link.id}
              >
                <a href={`#${link.id}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

//* home
//* about
//! experience
//* projects
//* skills
//* blog
//* contact

// use useState for active part of website
