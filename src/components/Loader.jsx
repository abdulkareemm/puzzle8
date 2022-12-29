import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "100px",
  height: "100vh",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: "50px",
  height: "50px",
  backgroundColor: "#3A36DB",
  borderRadius: "70%",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "80%",
  },
};
const loadingCircleTransition = {
  duration: 0.9,
  yoyo: 1000,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div>
      <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
