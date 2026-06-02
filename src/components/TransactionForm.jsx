import { Form, Input, Button, Select, InputNumber } from "antd";

function TransactionForm({
  transactions,
  setTransactions,
}) {
  const [form] = Form.useForm();

   const onFinish = (values) => {
    const newRecord = {
      id: Date.now(),
      date: new Date()
        .toISOString()
        .slice(0, 10),
      createdAt:
        new Date().toISOString(),
      ...values,
    };

    setTransactions([
      newRecord,
      ...transactions,
    ]);

    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message:
              "Please enter a description",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="type"
        label="Type"
      >
        <Select>
          <Select.Option value="Income">
            Income
          </Select.Option>

          <Select.Option value="Expense">
            Expense
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message:
              "Please enter an amount",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        block
      >
        Save Transaction
      </Button>
    </Form>
  );
}

export default TransactionForm;