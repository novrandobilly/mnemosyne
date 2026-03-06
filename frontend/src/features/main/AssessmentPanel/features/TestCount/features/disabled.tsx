import type { FC } from "react";
import { Counter } from "../components/Counter";
import { useTGetTestBank } from "@/tanstack/test/useTGetTestBank";

const DisabledCount: FC = () => {
  const { data: totalTests } = useTGetTestBank();
  const disabledCount =
    totalTests?.filter((test) => !test.is_active)?.length || 0;

  return (
    <Counter
      count={disabledCount}
      label="Disabled"
      valueStyle="text-gray-400"
    />
  );
};

export default DisabledCount;
