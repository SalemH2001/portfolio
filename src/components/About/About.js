import React from "react";
import AboutImg from "../../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid gap-5 md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-2 border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Mohamad Salem Hatoum everyone calls me Salem. I am a
            Web Developer. I build beautiful websites using various technologies.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Vue js
            Blade, Axios, Tailwind CSS, Bootstrap and many more.
          </p>

          <p>In backend I know Laravel, Node.js, Express.js, MongoDB, Mongoose, and MySQL</p>


        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lg:w-2/5 md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
