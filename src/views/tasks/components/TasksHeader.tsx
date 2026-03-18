import { Input, Select, Segmented, Button } from "antd";
import { LuPlus, LuSearch, LuLayoutGrid, LuList } from "react-icons/lu";
import type { TaskFilters, ViewMode } from "../types";

interface TasksHeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  filters: TaskFilters;
  onFiltersChange: (filters: TaskFilters) => void;
  onAddTask: () => void;
}

const TasksHeader = ({
  viewMode,
  onViewModeChange,
  filters,
  onFiltersChange,
  onAddTask,
}: TasksHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Left side - Search and Filters */}
      <div className="flex items-center gap-3">
        <Input
          placeholder="Search tasks..."
          prefix={<LuSearch className="text-text-muted" />}
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
          className="w-48"
          allowClear
        />
        <Select
          value={filters.status}
          onChange={(value) => onFiltersChange({ ...filters, status: value })}
          className="w-56"
          options={[
            { value: "all", label: "All Status" },
            { value: "todo", label: "Todo" },
            { value: "in_progress", label: "In Progress" },
            { value: "done", label: "Done" },
          ]}
        />
        <Select
          value={filters.priority}
          onChange={(value) => onFiltersChange({ ...filters, priority: value })}
          className="w-56"
          options={[
            { value: "all", label: "All Priority" },
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
          ]}
        />
      </div>
      {/* Right side - View Toggle and Add Button */}
      <div className="flex items-center gap-3">
        <Segmented
          value={viewMode}
          onChange={(value) => onViewModeChange(value as ViewMode)}
          options={[
            {
              value: "table",
              icon: <LuList />,
            },
            {
              value: "kanban",
              icon: <LuLayoutGrid />,
            },
          ]}
        />
        <Button type="primary" icon={<LuPlus />} onClick={onAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default TasksHeader;
