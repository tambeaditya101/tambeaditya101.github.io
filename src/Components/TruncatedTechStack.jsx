import { useState } from "react";
import { motion } from "framer-motion";

const TruncatedTechStack = ({
  stack = [],
  maxVisible = 6,
  isDarkMode,
  colors,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = stack.length > maxVisible;

  const visibleStack = isExpanded ? stack : stack.slice(0, maxVisible);

  return (
    <div>
      <motion.div
        layout
        className="flex flex-wrap gap-2 "
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {visibleStack.map((tech, techIndex) => (
          <motion.span
            key={techIndex}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`px-3 py-1 text-xs rounded-full border ${
              isDarkMode
                ? colors.dark.textSecondary
                : colors.light.textSecondary
            }`}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {hasMore && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-blue-400 hover:text-blue-300 font-medium text-xs mt-1 transition-colors duration-200"
        >
          {isExpanded
            ? "Show less"
            : `Show more (${stack.length - maxVisible}+)`}
        </button>
      )}
    </div>
  );
};

export default TruncatedTechStack;
