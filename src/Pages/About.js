import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            Tech got into me after I used inspect element at School. Currently learning NextJS and Python.
            </p>
            <p><b>
            If you are searching for a passionate and curious individual for collaboration, I'd love to be that guy. Let's make a meaningful impact <strong>together.</strong></b>
            </p>
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;