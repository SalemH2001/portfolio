import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const gridVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1
            }
        }
    };

    return (
        <div style={{ width: "100%", maxWidth: "1600px", overflowX: "hidden" }}>
            <section className="bg-primary text-white px-5 py-32" id="skills" ref={ref}>
                <h2 className="text-center text-3xl font-bold mb-4">Skills</h2>
                <AnimatePresence>
                    {inView && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={gridVariants}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gridGap: '20px',
                                justifyItems: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div className="mb-2 text-center">
                                <FaHtml5 className="text-5xl mr-4" />
                                <p>HTML5</p>
                            </div>
                            <div className="mb-2 text-center">
                                <FaCss3 className="text-5xl mr-4" />
                                <p>CSS3</p>
                            </div>
                            <div className="mb-2 text-center">
                                <FaJs className="text-5xl mr-4" />
                                <p>JavaScript</p>
                            </div>
                            <div className="mb-2 text-center">
                                <FaReact className="text-5xl mr-4" />
                                <p>React</p>
                            </div>
                            <div className="mb-2 text-center">
                                <FaPhp className="text-5xl mr-4" />
                                <p>PHP</p>
                            </div>
                            <div className="mb-2 text-center">
                                <FaLaravel className="text-5xl mr-4" />
                                <p>Laravel</p>
                            </div>
                            <div className="mb-2 text-center">
                                <FaNodeJs className="text-5xl mr-4" />
                                <p>Node.js</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Skills;
