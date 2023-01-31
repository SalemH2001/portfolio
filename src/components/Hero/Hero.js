import React from "react";
import HeroImg from "../../assets/hero-img.png";

import { Link } from "react-scroll";


const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">S</span>alem <br />
            Web Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js, PHP, Laravel, Bootstrap, and Tailwind CSS
          </p>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="btn bg-accent text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </Link>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="w-full md:w-3/5 ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
