import { AnimatePresence, motion } from "framer-motion";

const Animation = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className="vh-100">{props.children}</div>
    </motion.div>
  );
};

export default Animation;
