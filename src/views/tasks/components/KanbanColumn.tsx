import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";
import type { Task, KanbanColumnConfig } from "../types";

interface KanbanColumnProps {
  column: KanbanColumnConfig;
  tasks: Task[];
}

interface SortableTaskCardProps {
  task: Task;
}

const SortableTaskCard = ({ task }: SortableTaskCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard task={task} isDragging={isDragging} />
    </div>
  );
};

const KanbanColumn = ({ column, tasks }: KanbanColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col rounded-xl bg-white shadow-sm transition-colors ${
        isOver ? "ring-2 ring-primary ring-opacity-50" : ""
      }`}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between p-3 pb-2 border-b border-lightborder mb-4">
        <h3 className="text-xs font-semibold text-text-primary">
          {column.title}
        </h3>
        <span className="text-[10px] text-text-muted bg-bg-secondary px-2 py-0.5 rounded-full">
          {tasks.length}
        </span>
      </div>

      {/* Tasks List */}
      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-2 p-3 pt-1 flex-1 overflow-y-auto min-h-[200px]">
          {tasks.map((task) => (
            <SortableTaskCard key={task.id} task={task} />
          ))}
          {tasks.length === 0 && (
            <div className="flex items-center justify-center h-20 text-[11px] text-text-muted">
              No tasks
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
};

export default KanbanColumn;
