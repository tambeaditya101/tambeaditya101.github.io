import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TruncatedText = ({ text, maxLength = 130 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > maxLength;

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <div className="text-sm leading-relaxed relative">
      <AnimatePresence mode="wait" initial={false}>
        {isExpanded ? (
          <motion.p
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {text}
          </motion.p>
        ) : (
          <motion.p
            key="collapsed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isLong ? text.slice(0, maxLength) + "..." : text}
          </motion.p>
        )}
      </AnimatePresence>

      {isLong && (
        <button
          onClick={toggleExpanded}
          className="text-blue-400 hover:text-blue-300 font-medium mt-1 transition-colors duration-200"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
