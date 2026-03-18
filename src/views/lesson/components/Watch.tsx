import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Collapse, Tabs } from "antd";
import {
  LuChevronLeft,
  LuChevronRight,
  LuPlay,
  LuPause,
  LuMaximize,
  LuMinimize,
  LuVolume2,
  LuVolumeX,
  LuBookOpen,
  LuClock,
  LuCheck,
  LuArrowLeft,
  LuStar,
  LuEye,
  LuUser,
  LuFileText,
  LuDownload,
} from "react-icons/lu";
import { useState, useRef, useEffect, useMemo } from "react";

// Free sample video URL
const courseVideo =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

interface LessonItem {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface ChapterLesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface Chapter {
  id: string;
  title: string;
  lessons: ChapterLesson[];
  totalDuration: string;
}

interface Resource {
  id: string;
  title: string;
  type: string;
  size: string;
}

interface ChapterResource {
  chapterId: string;
  chapterTitle: string;
  resources: Resource[];
}

// Generate 20 lessons for timeline
const generateLessons = (): LessonItem[] => {
  const lessonTitles = [
    "Introduction to the Course",
    "Setting Up Your Environment",
    "Understanding Core Concepts",
    "Basic Principles & Theory",
    "Working with Data",
    "Advanced Techniques Part 1",
    "Advanced Techniques Part 2",
    "Practical Exercise 1",
    "Practical Exercise 2",
    "Real-World Applications",
    "Best Practices Overview",
    "Performance Optimization",
    "Debugging & Troubleshooting",
    "Integration Strategies",
    "Testing Fundamentals",
    "Security Considerations",
    "Deployment Basics",
    "Monitoring & Analytics",
    "Case Study Analysis",
    "Course Wrap-up & Next Steps",
  ];

  return lessonTitles.map((title, index) => ({
    id: `lesson-${index + 1}`,
    title,
    duration: `${Math.floor(Math.random() * 20) + 8}:${Math.floor(
      Math.random() * 60,
    )
      .toString()
      .padStart(2, "0")}`,
    completed: index < 7, // First 7 lessons completed
  }));
};

// Chapter data for tabs
const chaptersData: Chapter[] = [
  {
    id: "ch-1",
    title: "Getting Started",
    totalDuration: "45:30",
    lessons: [
      {
        id: "ch1-1",
        title: "Course Introduction",
        duration: "8:30",
        completed: true,
      },
      {
        id: "ch1-2",
        title: "Environment Setup",
        duration: "12:00",
        completed: true,
      },
      {
        id: "ch1-3",
        title: "Tool Installation",
        duration: "15:00",
        completed: true,
      },
      { id: "ch1-4", title: "First Steps", duration: "10:00", completed: true },
    ],
  },
  {
    id: "ch-2",
    title: "Core Fundamentals",
    totalDuration: "1:25:00",
    lessons: [
      {
        id: "ch2-1",
        title: "Understanding Basics",
        duration: "18:30",
        completed: true,
      },
      {
        id: "ch2-2",
        title: "Key Principles",
        duration: "22:00",
        completed: true,
      },
      {
        id: "ch2-3",
        title: "Working with Data",
        duration: "25:30",
        completed: true,
      },
      {
        id: "ch2-4",
        title: "Practice Session",
        duration: "19:00",
        completed: false,
      },
    ],
  },
  {
    id: "ch-3",
    title: "Advanced Concepts",
    totalDuration: "1:45:00",
    lessons: [
      {
        id: "ch3-1",
        title: "Advanced Patterns",
        duration: "28:00",
        completed: false,
      },
      {
        id: "ch3-2",
        title: "Optimization Techniques",
        duration: "32:00",
        completed: false,
      },
      {
        id: "ch3-3",
        title: "Real-world Examples",
        duration: "25:00",
        completed: false,
      },
      {
        id: "ch3-4",
        title: "Complex Scenarios",
        duration: "20:00",
        completed: false,
      },
    ],
  },
  {
    id: "ch-4",
    title: "Practical Applications",
    totalDuration: "2:10:00",
    lessons: [
      {
        id: "ch4-1",
        title: "Project Setup",
        duration: "18:00",
        completed: false,
      },
      {
        id: "ch4-2",
        title: "Building Features",
        duration: "35:00",
        completed: false,
      },
      {
        id: "ch4-3",
        title: "Testing & Debugging",
        duration: "28:00",
        completed: false,
      },
      { id: "ch4-4", title: "Deployment", duration: "25:00", completed: false },
      {
        id: "ch4-5",
        title: "Final Review",
        duration: "24:00",
        completed: false,
      },
    ],
  },
];

// Resources data
const resourcesData: ChapterResource[] = [
  {
    chapterId: "ch-1",
    chapterTitle: "Getting Started",
    resources: [
      { id: "r1-1", title: "Course Syllabus.pdf", type: "PDF", size: "245 KB" },
      { id: "r1-2", title: "Setup Guide.pdf", type: "PDF", size: "1.2 MB" },
      {
        id: "r1-3",
        title: "Quick Reference Card.pdf",
        type: "PDF",
        size: "180 KB",
      },
    ],
  },
  {
    chapterId: "ch-2",
    chapterTitle: "Core Fundamentals",
    resources: [
      {
        id: "r2-1",
        title: "Fundamentals Cheatsheet.pdf",
        type: "PDF",
        size: "320 KB",
      },
      {
        id: "r2-2",
        title: "Practice Exercises.pdf",
        type: "PDF",
        size: "890 KB",
      },
      { id: "r2-3", title: "Code Examples.pdf", type: "PDF", size: "1.5 MB" },
      {
        id: "r2-4",
        title: "Data Structures Guide.pdf",
        type: "PDF",
        size: "2.1 MB",
      },
    ],
  },
  {
    chapterId: "ch-3",
    chapterTitle: "Advanced Concepts",
    resources: [
      {
        id: "r3-1",
        title: "Advanced Patterns Handbook.pdf",
        type: "PDF",
        size: "3.2 MB",
      },
      {
        id: "r3-2",
        title: "Performance Guide.pdf",
        type: "PDF",
        size: "1.8 MB",
      },
    ],
  },
  {
    chapterId: "ch-4",
    chapterTitle: "Practical Applications",
    resources: [
      {
        id: "r4-1",
        title: "Project Blueprint.pdf",
        type: "PDF",
        size: "4.5 MB",
      },
      {
        id: "r4-2",
        title: "Testing Checklist.pdf",
        type: "PDF",
        size: "420 KB",
      },
      {
        id: "r4-3",
        title: "Deployment Guide.pdf",
        type: "PDF",
        size: "2.8 MB",
      },
      { id: "r4-4", title: "Best Practices.pdf", type: "PDF", size: "1.1 MB" },
    ],
  },
];

// Course info data
const courseInfo = {
  name: "Complete UI/UX Design Masterclass",
  description:
    "Learn the fundamentals of UI/UX design from scratch. This comprehensive course covers everything from design principles, color theory, typography, wireframing, prototyping, and user research. Perfect for beginners and intermediate designers looking to level up their skills.",
  rating: 4.8,
  reviews: 2847,
  views: 45200,
  students: 12500,
};

// Mentor info data
const mentorInfo = {
  name: "Sarah Johnson",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  rating: 4.9,
  courses: 15,
  students: 48000,
  bio: "Senior Product Designer with 10+ years of experience",
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const Watch = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const lessons = generateLessons();
  const completedCount = lessons.filter((l) => l.completed).length;
  const currentLesson = lessons[currentLessonIndex];

  // Calculate chapter that's currently in progress
  const getCurrentChapterId = () => {
    for (const chapter of chaptersData) {
      const hasIncomplete = chapter.lessons.some((l) => !l.completed);
      const hasComplete = chapter.lessons.some((l) => l.completed);
      if (hasIncomplete && hasComplete) return chapter.id;
      if (hasIncomplete && !hasComplete) return chapter.id;
    }
    return chaptersData[chaptersData.length - 1].id;
  };

  const currentChapterId = getCurrentChapterId();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video || !progress) return;

    const rect = progress.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * duration;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;

    if (!isFullscreen) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const goToPrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Chapters tab content - memoized to avoid recreating on each render
  const chaptersContent = useMemo(
    () => (
      <div className="flex flex-col gap-2 [&_.ant-collapse-expand-icon]:!mt-1.5">
        <Collapse
          accordion
          defaultActiveKey={currentChapterId}
          className="bg-transparent border-0"
          expandIconPosition="end"
          items={chaptersData.map((chapter) => {
            const isCurrentChapter = chapter.id === currentChapterId;

            return {
              key: chapter.id,
              label: (
                <div className="flex items-center justify-between w-full pr-2">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-text-primary">
                        {chapter.title}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-text-muted">
                          {chapter.lessons.filter((l) => l.completed).length}/
                          {chapter.lessons.length} lessons
                        </span>
                        <span className="text-[10px] text-text-muted">•</span>
                        <span className="text-[10px] text-text-muted">
                          {chapter.totalDuration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LuPlay className="text-[10px] text-white ml-0.5" />
                  </button>
                </div>
              ),
              children: (
                <div className="flex flex-col gap-1 -mt-1">
                  {chapter.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-bg-secondary cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            lesson.completed
                              ? "bg-primary"
                              : "border border-border-dark"
                          }`}
                        >
                          {lesson.completed && (
                            <LuCheck className="text-[8px] text-white" />
                          )}
                        </div>
                        <span className="text-[11px] text-text-secondary">
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-text-muted">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              ),
              style: {
                marginBottom: 8,
                background: "white",
                borderRadius: 8,
                border: isCurrentChapter
                  ? "2px solid var(--primary)"
                  : "1px solid var(--border)",
              },
            };
          })}
        />
      </div>
    ),
    [currentChapterId],
  );

  // Resources tab content - memoized to avoid recreating on each render
  const resourcesContent = useMemo(
    () => (
      <div className="flex flex-col gap-2">
        <Collapse
          accordion
          className="bg-transparent border-0"
          expandIconPosition="end"
          items={resourcesData.map((chapter) => ({
            key: chapter.chapterId,
            label: (
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-medium text-text-primary">
                  {chapter.chapterTitle}
                </span>
                <span className="text-[10px] text-text-muted mr-2">
                  {chapter.resources.length} files
                </span>
              </div>
            ),
            children: (
              <div className="flex flex-col gap-1 -mt-1">
                {chapter.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-bg-secondary cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <LuFileText className="text-xs text-primary" />
                      <span className="text-[11px] text-text-secondary">
                        {resource.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-text-muted">
                        {resource.size}
                      </span>
                      <LuDownload className="text-xs text-text-muted hover:text-primary cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            ),
            style: {
              marginBottom: 8,
              background: "white",
              borderRadius: 8,
              border: "1px solid var(--border)",
            },
          }))}
        />
      </div>
    ),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/lesson")}
          className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        >
          <LuArrowLeft className="text-lg" />
        </motion.button>
        <div>
          <h1 className="text-sm font-semibold text-text-primary">
            {courseInfo.name}
          </h1>
          <p className="text-xs text-text-muted">{mentorInfo.name}</p>
        </div>
      </div>

      <div className="flex gap-4 flex-1 min-h-0 overflow-hidden">
        {/* Left Section - Video Player & Course Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-[2.5] flex flex-col gap-3 overflow-y-auto pr-1"
        >
          {/* Video Player */}
          <div
            className="relative bg-black rounded-xl overflow-hidden aspect-video group shrink-0"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(isPlaying ? false : true)}
          >
            <video
              ref={videoRef}
              src={courseVideo}
              className="w-full h-full object-contain"
              onClick={togglePlay}
            />

            {/* Play/Pause Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: !isPlaying || showControls ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
              onClick={togglePlay}
            >
              {!isPlaying && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                >
                  <LuPlay className="text-2xl text-white ml-1" />
                </motion.div>
              )}
            </motion.div>

            {/* Custom Controls Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showControls ? 1 : 0,
                y: showControls ? 0 : 20,
              }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-10"
            >
              {/* Progress Bar */}
              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="w-full h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer mb-3 group/progress"
              >
                <motion.div
                  className="h-full bg-primary rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <LuPause className="text-lg" />
                    ) : (
                      <LuPlay className="text-lg" />
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMute}
                    className="text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <LuVolumeX className="text-lg" />
                    ) : (
                      <LuVolume2 className="text-lg" />
                    )}
                  </motion.button>

                  <span className="text-xs text-white/90 font-medium tabular-nums">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleFullscreen}
                  className="text-white hover:text-primary transition-colors cursor-pointer"
                >
                  {isFullscreen ? (
                    <LuMinimize className="text-lg" />
                  ) : (
                    <LuMaximize className="text-lg" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Lesson info and navigation */}
          <div className="bg-white rounded-xl p-4 shadow-sm shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-text-primary">
                  {currentLesson?.title}
                </h2>
                <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <LuClock className="text-xs" />
                    {currentLesson?.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <LuBookOpen className="text-xs" />
                    Lesson {currentLessonIndex + 1} of {lessons.length}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="small"
                  icon={<LuChevronLeft className="text-xs" />}
                  disabled={currentLessonIndex === 0}
                  onClick={goToPrevious}
                  className="text-xs h-7"
                >
                  Previous
                </Button>
                <Button
                  type="primary"
                  size="small"
                  icon={<LuChevronRight className="text-xs" />}
                  iconPosition="end"
                  disabled={currentLessonIndex === lessons.length - 1}
                  onClick={goToNext}
                  className="text-xs h-7"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* Course Information Accordion */}
          <Collapse
            defaultActiveKey={["course-info"]}
            className="bg-white rounded-xl shadow-sm border-0"
            expandIconPosition="end"
            items={[
              {
                key: "course-info",
                label: (
                  <span className="text-xs font-semibold text-text-primary">
                    Course Information
                  </span>
                ),
                children: (
                  <div className="flex flex-col gap-3 -mt-1">
                    {/* Course Details */}
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary mb-1">
                        {courseInfo.name}
                      </h4>
                      <p className="text-[11px] text-text-secondary leading-relaxed">
                        {courseInfo.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2 border-t border-border">
                      <div className="flex items-center gap-1">
                        <LuStar className="text-xs text-yellow-500 fill-yellow-500" />
                        <span className="text-[11px] font-medium text-text-primary">
                          {courseInfo.rating}
                        </span>
                        <span className="text-[10px] text-text-muted">
                          ({courseInfo.reviews.toLocaleString()} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuEye className="text-xs text-text-muted" />
                        <span className="text-[11px] text-text-secondary">
                          {courseInfo.views.toLocaleString()} views
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuUser className="text-xs text-text-muted" />
                        <span className="text-[11px] text-text-secondary">
                          {courseInfo.students.toLocaleString()} students
                        </span>
                      </div>
                    </div>

                    {/* Mentor Info */}
                    <div className="flex items-start gap-3 pt-3 border-t border-border">
                      <img
                        src={mentorInfo.avatar}
                        alt={mentorInfo.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold text-text-primary">
                          {mentorInfo.name}
                        </h4>
                        <p className="text-[10px] text-text-muted mt-0.5">
                          {mentorInfo.bio}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <div className="flex items-center gap-1">
                            <LuStar className="text-[10px] text-yellow-500 fill-yellow-500" />
                            <span className="text-[10px] font-medium">
                              {mentorInfo.rating}
                            </span>
                          </div>
                          <span className="text-[10px] text-text-muted">
                            {mentorInfo.courses} courses
                          </span>
                          <span className="text-[10px] text-text-muted">
                            {mentorInfo.students.toLocaleString()} students
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* Course Content Tabs */}
          <div className="bg-white rounded-xl shadow-sm p-4 shrink-0">
            <h3 className="text-xs font-semibold text-text-primary mb-3">
              Course Content
            </h3>
            <Tabs
              defaultActiveKey="chapters"
              size="small"
              className="course-content-tabs"
              items={[
                {
                  key: "chapters",
                  label: <span className="text-xs">Chapters</span>,
                  children: chaptersContent,
                },
                {
                  key: "resources",
                  label: <span className="text-xs">Resources</span>,
                  children: resourcesContent,
                },
              ]}
            />
          </div>
        </motion.div>

        {/* Right Section - Lesson Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-[1.2] flex flex-col gap-3"
        >
          {/* Progress Title */}
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-text-primary">
              Your Progress
            </h3>
            <span className="text-xs font-medium text-primary">
              {completedCount}/{lessons.length} completed
            </span>
          </div>

          {/* Lessons List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden flex-1">
            <div className="h-full overflow-y-auto p-3">
              {lessons.map((lesson, index) => {
                const isLast = index === lessons.length - 1;
                const isActive = index === currentLessonIndex;

                return (
                  <motion.div
                    key={lesson.id}
                    whileHover={{ x: 2 }}
                    onClick={() => setCurrentLessonIndex(index)}
                    className={`relative flex items-start gap-3 cursor-pointer py-2 px-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary-light" : "hover:bg-bg-secondary"
                    }`}
                  >
                    {/* Timeline */}
                    <div className="relative flex flex-col items-center">
                      {/* Checkbox */}
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          lesson.completed
                            ? "bg-primary"
                            : isActive
                              ? "border-2 border-primary bg-white"
                              : "border-2 border-border-dark bg-white"
                        }`}
                      >
                        {lesson.completed ? (
                          <LuCheck className="text-[10px] text-white" />
                        ) : isActive ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        ) : null}
                      </div>

                      {/* Vertical Line */}
                      {!isLast && (
                        <div
                          className={`w-0.5 flex-1 min-h-[16px] mt-1 ${
                            lesson.completed ? "bg-primary" : "bg-border"
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p
                        className={`text-[11px] truncate ${
                          isActive
                            ? "font-semibold text-primary"
                            : lesson.completed
                              ? "font-medium text-text-primary"
                              : "font-medium text-text-secondary"
                        }`}
                      >
                        {lesson.title}
                      </p>
                      <p className="text-[10px] text-text-muted mt-0.5">
                        {lesson.duration}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Watch;
