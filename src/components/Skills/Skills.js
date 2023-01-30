import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    const [animation, setAnimation] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    useEffect(() => {
        setAnimation(inView);
    }, [inView]);

    return (
        <div style={{ width: "100%", maxWidth: "1600px", overflowX: "hidden" }}>
            <section className="bg-primary text-white px-5 py-32" id="skills" ref={ref}>
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Skills
          </h2>
                <ul className="skills-list mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, auto))", gridGap: "10px", margin: "1rem auto" }}>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4 " >
                            <FaHtml5 className=" h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>HTML</span>
                        </li>
                    </Fade>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4" >
                            <FaCss3 className="h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>CSS</span>
                        </li>
                    </Fade>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4" >
                            <FaJs className="h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>JavaScript</span>
                        </li>
                    </Fade>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4" >
                            <FaReact className="h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>React</span>
                        </li>
                    </Fade>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4" >
                            <FaPhp className="h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>PHP</span>
                        </li>
                    </Fade>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4" >
                            <FaLaravel className="h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>Laravel</span>
                        </li>
                    </Fade>
                    <Fade bottom when={animation}>
                        <li className="skill mb-4" >
                            <FaNodeJs className="h-8 w-8 mr-2" />
                            <span style={{ fontSize: "2vw" }}>Node.js</span>
                        </li>
                    </Fade>
                </ul>
            </section>
        </div>
    );
};
export default Skills;

