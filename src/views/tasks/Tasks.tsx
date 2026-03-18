import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TasksHeader from "./components/TasksHeader";
import TasksTable from "./components/TasksTable";
import TasksKanban from "./components/TasksKanban";
import AddTaskModal from "./components/AddTaskModal";
import type { Task, TaskStatus, TaskFilters, ViewMode, TaskFormData } from "./types";

// Mock data
const mockTasks: Task[] = [
  {
    id: "1",
    name: "Design new landing page",
    description: "Create wireframes and mockups for the new marketing landing page",
    status: "todo",
    priority: "high",
    dateCreated: "2024-03-15",
    dueDate: "2024-03-25",
  },
  {
    id: "2",
    name: "Fix login bug",
    description: "Users are unable to login with Google OAuth on mobile devices",
    status: "in_progress",
    priority: "high",
    dateCreated: "2024-03-14",
    dueDate: "2024-03-20",
  },
  {
    id: "3",
    name: "Update documentation",
    description: "Add API documentation for the new endpoints",
    status: "todo",
    priority: "medium",
    dateCreated: "2024-03-13",
    dueDate: "2024-03-28",
  },
  {
    id: "4",
    name: "Implement dark mode",
    description: "Add dark mode support across all pages",
    status: "in_progress",
    priority: "medium",
    dateCreated: "2024-03-12",
    dueDate: "2024-03-22",
  },
  {
    id: "5",
    name: "Setup CI/CD pipeline",
    description: "Configure GitHub Actions for automated testing and deployment",
    status: "done",
    priority: "high",
    dateCreated: "2024-03-10",
    dueDate: "2024-03-15",
  },
  {
    id: "6",
    name: "Write unit tests",
    description: "Add unit tests for authentication module",
    status: "done",
    priority: "medium",
    dateCreated: "2024-03-09",
    dueDate: "2024-03-14",
  },
  {
    id: "7",
    name: "Optimize images",
    description: "Compress and lazy load images for better performance",
    status: "todo",
    priority: "low",
    dateCreated: "2024-03-08",
    dueDate: "2024-04-01",
  },
  {
    id: "8",
    name: "Review pull requests",
    description: "Review and merge pending PRs from the team",
    status: "done",
    priority: "medium",
    dateCreated: "2024-03-07",
    dueDate: "2024-03-12",
  },
  {
    id: "9",
    name: "Database optimization",
    description: "Add indexes and optimize slow queries",
    status: "todo",
    priority: "high",
    dateCreated: "2024-03-06",
    dueDate: "2024-03-18",
  },
  {
    id: "10",
    name: "User feedback analysis",
    description: "Analyze user feedback from the latest survey",
    status: "done",
    priority: "low",
    dateCreated: "2024-03-05",
    dueDate: "2024-03-10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [viewMode, setViewMode] = useState<ViewMode>("kanban");
  const [filters, setFilters] = useState<TaskFilters>({
    search: "",
    status: "all",
    priority: "all",
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter tasks based on search and filters
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesStatus =
        filters.status === "all" || task.status === filters.status;
      const matchesPriority =
        filters.priority === "all" || task.priority === filters.priority;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, filters]);

  // Handle task status change (for drag and drop)
  const handleTaskMove = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Handle adding new task
  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name: data.name,
      description: data.description || "",
      status: data.status,
      priority: data.priority,
      dateCreated: new Date().toISOString().split("T")[0],
      dueDate: data.dueDate,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col gap-4"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <TasksHeader
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          filters={filters}
          onFiltersChange={setFilters}
          onAddTask={() => setIsAddModalOpen(true)}
        />
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="flex-1 min-h-0">
        {viewMode === "table" ? (
          <div className="bg-white rounded-xl shadow-sm p-4 h-full overflow-auto">
            <TasksTable tasks={filteredTasks} />
          </div>
        ) : (
          <TasksKanban tasks={filteredTasks} onTaskMove={handleTaskMove} />
        )}
      </motion.div>

      {/* Add Task Modal */}
      <AddTaskModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddTask}
      />
    </motion.div>
  );
};

export default Tasks;
