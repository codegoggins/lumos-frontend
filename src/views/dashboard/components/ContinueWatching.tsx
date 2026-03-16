import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const continueWatchingCourses = [
  { id: "1", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop", name: "UI Design Fundamentals", progress: 65, mentor: "Sarah Johnson" },
  { id: "2", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop", name: "Advanced React Patterns", progress: 42, mentor: "Mike Chen" },
  { id: "3", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop", name: "Node.js Masterclass", progress: 30, mentor: "Alex Rivera" },
  { id: "4", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop", name: "Data Visualization", progress: 80, mentor: "Priya Patel" },
  { id: "5", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop", name: "Machine Learning Basics", progress: 18, mentor: "David Kim" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const ContinueWatching = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary">
          Continue Watching
        </h2>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          >
            <LuChevronLeft className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          >
            <LuChevronRight className="text-lg" />
          </motion.button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {continueWatchingCourses.map((course, i) => (
          <motion.div
            key={course.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate(`/lesson/watch/${course.id}-1`)}
            className="bg-white rounded-xl shadow-sm overflow-hidden min-w-[230px] max-w-[230px] shrink-0 cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4 flex flex-col gap-2.5">
              <p className="text-sm font-semibold text-text-primary truncate">
                {course.name}
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-text-muted">Progress</span>
                  <span className="text-xs font-semibold text-text-primary">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.08 + 0.3 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
              <p className="text-xs text-text-muted">{course.mentor}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
