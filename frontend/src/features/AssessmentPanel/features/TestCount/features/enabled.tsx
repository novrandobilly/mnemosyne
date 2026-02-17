import type { FC } from "react";
import { Counter } from "../components/Counter";
import { useTGetTestBank } from "@/tanstack/test/useTGetTestBank";

const EnabledCount: FC = () => {
  const { data: totalTests } = useTGetTestBank();
  const enabledCount =
    totalTests?.filter((test) => test.is_active)?.length || 0;

  return (
    <Counter count={enabledCount} label="Enabled" valueStyle="text-green-700" />
  );
};

export default EnabledCount;
