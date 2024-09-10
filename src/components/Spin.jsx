import React from "react";
import { Alert, Flex, Spin } from "antd";
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Loading = () => (
  <Flex
    align="center"
    gap="middle"
    className="w-full flex flex-col justify-center items-center h-[50vh]"
  >
    <Spin size={"large"} />
    <span className="text-blue-500">Loading</span>
  </Flex>
);
export default Loading;
