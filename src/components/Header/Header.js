import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll'
import { Transition } from "react-transition-group";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const download=()=>{
    fetch('Mohamad-Salem-Hatoum.pdf').then((res)=>{
      res.blob().then(blob=>{
        const fileURL =window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href=fileURL
        alink.download='Mohamad-Salem-Hatoum.pdf'
        alink.click()
      })
    })
  }

  return (
    <header className="bg-primary text-white p-4 w-full z-10 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="logo text-2xl font-bold text-accent">
          Salem
        </a>
        <nav className="hidden md:block">
          <ul className="flex">
            <li>
              <Link
                to="about"
                smooth={true}
                onClick={() => handleToggle()}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                onClick={() => handleToggle()}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                onClick={() => handleToggle()}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                onClick={() => handleToggle()}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                onClick={() => download()}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <Transition in={toggle} timeout={200}>
        {(status) => (
          <nav
            className={`mobile-nav transition-${status}`}
          >
            <ul className="flex flex-col">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  onClick={() => handleToggle()}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  onClick={() => handleToggle()}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  onClick={() => handleToggle()}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  onClick={() => handleToggle()}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  smooth={true}
                  onClick={() => handleToggle()}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Transition>
      <button
        onClick={handleToggle}
        className={`block md:hidden ${toggle ? 'translate-y-32' : ''}`}
      >
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
      </div>
    </header>
  );
};

export default Header;

