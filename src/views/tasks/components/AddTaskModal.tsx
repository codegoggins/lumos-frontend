import { Modal, Form, Input, Select, DatePicker } from "antd";
import type { TaskFormData, TaskStatus, TaskPriority } from "../types";
import dayjs from "dayjs";

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TaskFormData) => void;
}

const AddTaskModal = ({ open, onClose, onSubmit }: AddTaskModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const formData: TaskFormData = {
        ...values,
        dueDate: values.dueDate ? values.dueDate.format("YYYY-MM-DD") : "",
      };
      onSubmit(formData);
      form.resetFields();
      onClose();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={<span className="text-sm font-semibold">Add New Task</span>}
      open={open}
      onOk={handleSubmit}
      onCancel={handleCancel}
      okText="Create Task"
      cancelText="Cancel"
      width={480}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          status: "todo" as TaskStatus,
          priority: "medium" as TaskPriority,
        }}
        className="mt-4"
      >
        <Form.Item
          name="name"
          label={<span className="text-xs text-text-secondary">Task Name</span>}
          rules={[{ required: true, message: "Please enter task name" }]}
        >
          <Input placeholder="Enter task name" className="text-xs" />
        </Form.Item>

        <Form.Item
          name="description"
          label={
            <span className="text-xs text-text-secondary">Description</span>
          }
        >
          <Input.TextArea
            placeholder="Enter task description"
            rows={3}
            className="text-xs"
          />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="status"
            label={<span className="text-xs text-text-secondary">Status</span>}
          >
            <Select
              options={[
                { value: "todo", label: "Todo" },
                { value: "in_progress", label: "In Progress" },
                { value: "done", label: "Done" },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="priority"
            label={
              <span className="text-xs text-text-secondary">Priority</span>
            }
          >
            <Select
              options={[
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" },
              ]}
            />
          </Form.Item>
        </div>

        <Form.Item
          name="dueDate"
          label={<span className="text-xs text-text-secondary">Due Date</span>}
          rules={[{ required: true, message: "Please select due date" }]}
        >
          <DatePicker
            className="w-full"
            format="MMM DD, YYYY"
            disabledDate={(current) => current && current < dayjs().startOf("day")}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
