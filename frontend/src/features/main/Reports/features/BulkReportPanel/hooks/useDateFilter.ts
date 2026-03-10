import { useState } from "react";

export const useDateFilter = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [singleDay, setSingleDay] = useState(true);
  const [submittedRange, setSubmittedRange] = useState<{
    start: string | null;
    end: string | null;
  }>({ start: today, end: today });

  const toggleSingleDay = () => setSingleDay((v) => !v);

  const handleFetch = () => {
    if (!startDate) return;
    setSubmittedRange({
      start: startDate,
      end: singleDay ? startDate : endDate || startDate,
    });
  };

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    singleDay,
    toggleSingleDay,
    submittedRange,
    handleFetch,
  };
};
