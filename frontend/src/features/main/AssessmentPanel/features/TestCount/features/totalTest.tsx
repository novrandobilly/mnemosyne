import type { FC } from "react";
import { Counter } from "../components/Counter";
import { useTGetTestBank } from "@/tanstack/test/useTGetTestBank";

const TotalTestCount: FC = () => {
  const { data: totalTests } = useTGetTestBank();
  const testCount = totalTests?.length || 0;

  return (
    <Counter count={testCount} label="Total Tests" valueStyle="text-gray-700" />
  );
};

export default TotalTestCount;
