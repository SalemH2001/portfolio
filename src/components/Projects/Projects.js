import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; //import useInView
import { motion, useAnimation } from 'framer-motion'; //import motion and useAnimation
import blog from "../../assets/blog.png";
import movie from "../../assets/movie.png";
import ecommerce from "../../assets/e-commerce.png";
import portfolio from "../../assets/portfolio.png";

const Projects = () => {
  const projects = [
    {
      img: blog,
      title: "blog",
      desc: " A multi author blog with erp. Built with laravel apis, mysql, Vite, VueJS",
      code: "https://github.com/SalemH2001/blog-erp-laravel-vue",
    },
    {
      img: ecommerce,
      title: "E-commerce Website",
      desc: "An e-commerce website.Build using Laravel and Bootstrap",
      code: "https://github.com/SalemH2001/E-Commerce",
    },
    {
      img: portfolio,
      title: "My Portofolio",
      desc: "Frontend Portfolio using React and tailwind css",
      code: "https://github.com/SalemH2001/portfolio",
    },
    {
      img: movie,
      title: "Movie Rating",
      desc: "Movie rating website. Used mongodb and expressjs  API for the movies and reviews and html,css and vanilla js on the frontend",
      code: "https://github.com/SalemH2001/movie",
    },
  ];
  const [ref, inView, entry] = useInView({
    threshold: window.innerWidth > 800 ? 0.3 : window.innerWidth > 550 ? 0.2 : 0
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    else {
      animation.start("hidden");
    }
  }, [animation, inView, entry]);

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects" ref={ref}>
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>
        <div className="about-img"></div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            className="relative m-5"
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 0.5,
                }
              },
              hidden: {
                opacity: 0,
                x: -100,
                transition: {
                  duration: 0.5,
                }
              }
            }}
            key={i}
          >
            <img src={project.img} alt={project.title} />
            <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto w-full h-full bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <p className="py-5 text-center font-bold px-2 text-white">
                {project.desc}
              </p>
              <div className="mx-auto">
                <a href={project.code} className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold">
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;