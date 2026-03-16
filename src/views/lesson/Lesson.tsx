import { useRef } from "react";
import { motion } from "framer-motion";
import {
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuBookOpen,
  LuStar,
  LuPlay,
  LuSparkles,
  LuTrendingUp,
  LuPlus,
} from "react-icons/lu";
import { Button } from "antd";

interface Course {
  id: string;
  image: string;
  name: string;
  instructor: string;
  progress?: number;
  totalLessons: number;
  completedLessons?: number;
  duration: string;
  rating?: number;
  students?: number;
  isNew?: boolean;
}

const myCourses: Course[] = [
  { id: "1", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop", name: "UI Design Fundamentals", instructor: "Sarah Johnson", progress: 65, totalLessons: 24, completedLessons: 16, duration: "12h 30m" },
  { id: "2", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop", name: "Advanced React Patterns", instructor: "Mike Chen", progress: 42, totalLessons: 32, completedLessons: 13, duration: "18h 45m" },
  { id: "3", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop", name: "Node.js Masterclass", instructor: "Alex Rivera", progress: 30, totalLessons: 28, completedLessons: 8, duration: "15h 20m" },
  { id: "4", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop", name: "Data Visualization with D3", instructor: "Priya Patel", progress: 80, totalLessons: 20, completedLessons: 16, duration: "10h 15m" },
  { id: "5", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop", name: "Machine Learning Intro", instructor: "David Kim", progress: 15, totalLessons: 36, completedLessons: 5, duration: "22h 30m" },
  { id: "6", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop", name: "Cloud Computing Basics", instructor: "Emma Wilson", progress: 55, totalLessons: 28, completedLessons: 15, duration: "16h 45m" },
  { id: "7", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop", name: "Blockchain Fundamentals", instructor: "James Lee", progress: 20, totalLessons: 24, completedLessons: 5, duration: "14h 20m" },
  { id: "8", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop", name: "DevOps for Beginners", instructor: "Sofia Garcia", progress: 90, totalLessons: 30, completedLessons: 27, duration: "18h 00m" },
  { id: "9", image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop", name: "Python Automation", instructor: "Dr. Lisa Wang", progress: 45, totalLessons: 22, completedLessons: 10, duration: "11h 30m" },
  { id: "10", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop", name: "Web Security Basics", instructor: "Chris Anderson", progress: 70, totalLessons: 18, completedLessons: 13, duration: "9h 15m" },
];

const newCourses: Course[] = [
  { id: "n1", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop", name: "Machine Learning Basics", instructor: "David Kim", totalLessons: 36, duration: "22h 30m", rating: 4.9, students: 1250, isNew: true },
  { id: "n2", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop", name: "Cloud Architecture", instructor: "Emma Wilson", totalLessons: 28, duration: "16h 45m", rating: 4.8, students: 890, isNew: true },
  { id: "n3", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop", name: "Blockchain Development", instructor: "James Lee", totalLessons: 24, duration: "14h 20m", rating: 4.7, students: 650, isNew: true },
  { id: "n4", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop", name: "DevOps Essentials", instructor: "Sofia Garcia", totalLessons: 30, duration: "18h 00m", rating: 4.8, students: 1100, isNew: true },
  { id: "n5", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop", name: "iOS App Development", instructor: "Nina Patel", totalLessons: 35, duration: "20h 15m", rating: 4.9, students: 980, isNew: true },
  { id: "n6", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop", name: "API Design Patterns", instructor: "Mark Thompson", totalLessons: 22, duration: "12h 30m", rating: 4.6, students: 720, isNew: true },
  { id: "n7", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop", name: "GraphQL Masterclass", instructor: "Anna Smith", totalLessons: 26, duration: "15h 00m", rating: 4.8, students: 850, isNew: true },
  { id: "n8", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop", name: "Rust Programming", instructor: "Tom Harris", totalLessons: 40, duration: "24h 45m", rating: 4.7, students: 560, isNew: true },
  { id: "n9", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", name: "TypeScript Deep Dive", instructor: "Rachel Green", totalLessons: 28, duration: "16h 20m", rating: 4.9, students: 1450, isNew: true },
  { id: "n10", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500&h=300&fit=crop", name: "Kubernetes in Action", instructor: "John Miller", totalLessons: 32, duration: "19h 30m", rating: 4.8, students: 780, isNew: true },
];

const topRatedCourses: Course[] = [
  { id: "t1", image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop", name: "Python for Data Science", instructor: "Dr. Lisa Wang", totalLessons: 42, duration: "25h 30m", rating: 4.9, students: 8500 },
  { id: "t2", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop", name: "Full-Stack Web Development", instructor: "Chris Anderson", totalLessons: 56, duration: "32h 15m", rating: 4.9, students: 12300 },
  { id: "t3", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop", name: "Mobile App Design", instructor: "Nina Patel", totalLessons: 26, duration: "14h 45m", rating: 4.8, students: 5600 },
  { id: "t4", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop", name: "System Design Interviews", instructor: "Mark Thompson", totalLessons: 20, duration: "12h 00m", rating: 4.9, students: 9200 },
  { id: "t5", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop", name: "Advanced JavaScript", instructor: "Sarah Connor", totalLessons: 38, duration: "21h 30m", rating: 4.9, students: 15600 },
  { id: "t6", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop", name: "AWS Certified Solutions", instructor: "Michael Scott", totalLessons: 45, duration: "28h 00m", rating: 4.8, students: 11200 },
  { id: "t7", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", name: "React Native Complete", instructor: "Kevin Hart", totalLessons: 50, duration: "30h 15m", rating: 4.9, students: 8900 },
  { id: "t8", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500&h=300&fit=crop", name: "Docker & Containerization", instructor: "Linda Park", totalLessons: 28, duration: "16h 45m", rating: 4.8, students: 7300 },
  { id: "t9", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop", name: "Cybersecurity Fundamentals", instructor: "Ryan Reynolds", totalLessons: 35, duration: "20h 30m", rating: 4.9, students: 6800 },
  { id: "t10", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop", name: "Smart Contract Development", instructor: "Vitalik Chen", totalLessons: 30, duration: "18h 00m", rating: 4.8, students: 4500 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

const hoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.2, ease: "easeOut" } },
};

const MyCourseCard = ({ course, index }: { course: Course; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    whileHover="hover"
    className="shrink-0"
  >
    <motion.div
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-xl shadow-sm overflow-hidden min-w-[320px] max-w-[320px] flex flex-col cursor-pointer"
    >
      <div className="relative">
        <img src={course.image} alt={course.name} className="w-full h-44 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="text-xs text-white/90 flex items-center gap-1.5">
            <LuClock className="text-sm" />
            {course.duration}
          </span>
          <span className="text-xs text-white/90 flex items-center gap-1.5">
            <LuBookOpen className="text-sm" />
            {course.completedLessons}/{course.totalLessons}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p className="text-sm font-semibold text-text-primary line-clamp-1">{course.name}</p>
          <p className="text-xs text-text-muted mt-1.5">{course.instructor}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-text-muted">Progress</span>
            <span className="text-xs font-semibold text-primary">{course.progress}%</span>
          </div>
          <div className="w-full h-2 bg-bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 0.8, delay: index * 0.05 + 0.3, ease: "easeOut" }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>
        <Button type="primary" icon={<LuPlay className="text-sm" />} className="mt-auto">
          Continue
        </Button>
      </div>
    </motion.div>
  </motion.div>
);

const ExploreCourseCard = ({ course, index }: { course: Course; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    whileHover="hover"
    className="shrink-0"
  >
    <motion.div
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-xl shadow-sm overflow-hidden min-w-[300px] max-w-[300px] flex flex-col cursor-pointer"
    >
      <div className="relative">
        <img src={course.image} alt={course.name} className="w-full h-40 object-cover" />
        {course.isNew && (
          <span className="absolute top-3 left-3 bg-success text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
            NEW
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2.5 flex-1">
        <p className="text-sm font-semibold text-text-primary line-clamp-1">{course.name}</p>
        <p className="text-xs text-text-muted">{course.instructor}</p>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <LuClock className="text-sm" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <LuBookOpen className="text-sm" />
            {course.totalLessons} lessons
          </span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1.5">
            <LuStar className="text-sm text-warning fill-warning" />
            <span className="text-xs font-semibold text-text-primary">{course.rating}</span>
            <span className="text-xs text-text-muted">({course.students?.toLocaleString()})</span>
          </div>
        </div>
        <Button type="primary" icon={<LuPlus className="text-sm" />} className="mt-auto">
          Enroll Now
        </Button>
      </div>
    </motion.div>
  </motion.div>
);

interface ScrollableSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ScrollableSection = ({ title, icon, children }: ScrollableSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-base font-semibold text-text-primary">{title}</h2>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
          >
            <LuChevronLeft className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
          >
            <LuChevronRight className="text-lg" />
          </motion.button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
        {children}
      </div>
    </motion.div>
  );
};

const Lesson = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-10 p-1"
    >
      <ScrollableSection title="My Courses" icon={<LuBookOpen className="text-xl text-primary" />}>
        {myCourses.map((course, i) => (
          <MyCourseCard key={course.id} course={course} index={i} />
        ))}
      </ScrollableSection>

      <div className="flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold text-text-primary"
        >
          Explore
        </motion.h2>

        <ScrollableSection title="New Courses" icon={<LuSparkles className="text-xl text-success" />}>
          {newCourses.map((course, i) => (
            <ExploreCourseCard key={course.id} course={course} index={i} />
          ))}
        </ScrollableSection>

        <ScrollableSection title="Top Rated" icon={<LuTrendingUp className="text-xl text-warning" />}>
          {topRatedCourses.map((course, i) => (
            <ExploreCourseCard key={course.id} course={course} index={i} />
          ))}
        </ScrollableSection>
      </div>
    </motion.div>
  );
};

export default Lesson;
