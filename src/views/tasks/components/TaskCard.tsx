import { Tag } from "antd";
import { LuCalendar } from "react-icons/lu";
import type { Task } from "../types";

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
}

const priorityColors: Record<string, string> = {
  low: "default",
  medium: "warning",
  high: "error",
};

const priorityLabels: Record<string, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const TaskCard = ({ task, isDragging }: TaskCardProps) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const isOverdue = () => {
    if (!task.dueDate || task.status === "done") return false;
    return new Date(task.dueDate) < new Date();
  };

  return (
    <div
      className={`bg-white rounded-lg p-3 shadow-sm border border-border cursor-grab active:cursor-grabbing transition-all ${
        isDragging ? "opacity-50 shadow-lg scale-105" : "hover:shadow-md"
      }`}
    >
      <h4 className="text-xs font-medium text-text-primary mb-1.5 line-clamp-1">
        {task.name}
      </h4>
      {task.description && (
        <p className="text-[11px] text-text-secondary mb-2 line-clamp-2">
          {task.description}
        </p>
      )}
      <div className="flex items-center justify-between">
        <Tag color={priorityColors[task.priority]} className="text-[10px] m-0">
          {priorityLabels[task.priority]}
        </Tag>
        {task.dueDate && (
          <span className={`flex items-center gap-1 text-[10px] ${isOverdue() ? "text-error" : "text-text-muted"}`}>
            <LuCalendar className="text-[10px]" />
            {formatDate(task.dueDate)}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
