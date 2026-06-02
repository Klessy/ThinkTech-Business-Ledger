

import { useState } from "react";
import {
  Table,
  Tag,
  Input,
  Select,
  Space,
} from "antd";

const { Search } = Input;

function TransactionTable({ transactions }) {
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] =
    useState("All");

  // const filteredData = transactions.filter(
  //   (item) => {
  //     const matchSearch =
  //       item.description
  //         .toLowerCase()
  //         .includes(searchText.toLowerCase());

  //     const matchFilter =
  //       filterType === "All"
  //         ? true
  //         : item.type === filterType;

  //     return matchSearch && matchFilter;
  //   }
  // );

  const filteredData = [...transactions]
  .sort(
    (a, b) =>
      new Date(a.date) -
      new Date(b.date)
  )
  .filter((item) => {
    const matchSearch =
      item.description
        .toLowerCase()
        .includes(searchText.toLowerCase());

    const matchFilter =
      filterType === "All"
        ? true
        : item.type === filterType;

    return (
      matchSearch &&
      matchFilter
    );
  });

// const filteredData = [...transactions]
//   .sort(
//     (a, b) =>
//       new Date(
//         b.createdAt || b.date
//       ) -
//       new Date(
//         a.createdAt || a.date
//       )
//   )
//   .filter((item) => {
//     const matchSearch =
//       item.description
//         .toLowerCase()
//         .includes(searchText.toLowerCase());

//     const matchFilter =
//       filterType === "All"
//         ? true
//         : item.type === filterType;

//     return (
//       matchSearch &&
//       matchFilter
//     );
//   });


// const chronologicalData =
//   [...transactions].sort(
//     (a, b) =>
//       new Date(a.date) -
//       new Date(b.date)
//   );

// let runningBalance = 0;

// const balanceMap = {};

// chronologicalData.forEach(
//   (item) => {
//     if (
//       item.type === "Income"
//     ) {
//       runningBalance +=
//         item.amount;
//     } else {
//       runningBalance -=
//         item.amount;
//     }

//     balanceMap[item.id] =
//       runningBalance;
//   }
// );

// const tableData =
//   filteredData.map((item) => ({
//     ...item,
//     balance:
//       balanceMap[item.id] || 0,
//   }));


  const tableData = filteredData.map(
  (item, index) => {
    let runningBalance = 0;

    for (let i = 0; i <= index; i++) {
      if (
        filteredData[i].type === "Income"
      ) {
        runningBalance +=
          filteredData[i].amount;
      } else {
        runningBalance -=
          filteredData[i].amount;
      }
    }

    return {
      ...item,
      balance: runningBalance,
    };
  }
);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) =>
        new Date(a.date) - new Date(b.date),
    },

    {
      title: "Description",
      dataIndex: "description",
    },

    {
      title: "Type",
      dataIndex: "type",
      filters: [
        {
          text: "Income",
          value: "Income",
        },
        {
          text: "Expense",
          value: "Expense",
        },
      ],
      onFilter: (value, record) =>
        record.type === value,

      render: (value) => (
        <Tag
          color={
            value === "Income"
              ? "green"
              : "red"
          }
        >
          {value}
        </Tag>
      ),
    },

    {
      title: "Amount",
      dataIndex: "amount",

      sorter: (a, b) =>
        a.amount - b.amount,

      render: (amount) =>
        `₦${amount.toLocaleString()}`,
    },

    {
      title: "Balance",
      dataIndex: "balance",

      render: (value) => (
        <strong>
          ₦{value.toLocaleString()}
        </strong>
      ),
}
    
  
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 15,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Search
          placeholder="Search description..."
          allowClear
          style={{ width: 300 }}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
        />

        <Select
          defaultValue="All"
          style={{ width: 150 }}
          onChange={setFilterType}
          options={[
            {
              label: "All",
              value: "All",
            },
            {
              label: "Income",
              value: "Income",
            },
            {
              label: "Expense",
              value: "Expense",
            },
          ]}
        />
      </Space>

      {/* <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
        }}
      /> */}

      <Table
        columns={columns}
        dataSource={tableData}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
      }}
      />
      {/* <strong>
        ₦{balance.toLocaleString()}
      </strong> */}
    </>
  );
}

export default TransactionTable;