import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Task, TaskStatus, TaskPriority } from "../types";

interface TasksTableProps {
  tasks: Task[];
  loading?: boolean;
}

const statusConfig: Record<TaskStatus, { color: string; label: string }> = {
  todo: { color: "warning", label: "Todo" },
  in_progress: { color: "processing", label: "In Progress" },
  done: { color: "success", label: "Done" },
};

const priorityConfig: Record<TaskPriority, { color: string; label: string }> = {
  low: { color: "default", label: "Low" },
  medium: { color: "warning", label: "Medium" },
  high: { color: "error", label: "High" },
};

const TasksTable = ({ tasks, loading }: TasksTableProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const columns: ColumnsType<Task> = [
    {
      title: <span className="text-xs">Name</span>,
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <span className="text-xs font-medium text-text-primary">{text}</span>
      ),
    },
    {
      title: <span className="text-xs">Description</span>,
      dataIndex: "description",
      key: "description",
      render: (text: string) => (
        <span className="text-[11px] text-text-secondary line-clamp-1">
          {text}
        </span>
      ),
      width: 250,
    },
    {
      title: <span className="text-xs">Status</span>,
      dataIndex: "status",
      key: "status",
      render: (status: TaskStatus) => (
        <Tag color={statusConfig[status].color} className="text-[10px] m-0">
          {statusConfig[status].label}
        </Tag>
      ),
      width: 120,
    },
    {
      title: <span className="text-xs">Priority</span>,
      dataIndex: "priority",
      key: "priority",
      render: (priority: TaskPriority) => (
        <Tag color={priorityConfig[priority].color} className="text-[10px] m-0">
          {priorityConfig[priority].label}
        </Tag>
      ),
      width: 100,
    },
    {
      title: <span className="text-xs">Created</span>,
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (date: string) => (
        <span className="text-[10px] text-text-muted">{formatDate(date)}</span>
      ),
      width: 120,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tasks}
      rowKey="id"
      loading={loading}
      pagination={{
        pageSize: 10,
        showSizeChanger: false,
        showTotal: (total) => (
          <span className="text-xs text-text-muted">{total} tasks</span>
        ),
      }}
      className="tasks-table"
      size="middle"
    />
  );
};

export default TasksTable;
