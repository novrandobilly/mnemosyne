import { useEffect, useState } from "react";
import type { ReportParticipant } from "../../../types";

export const useParticipantSelection = (
  participants: ReportParticipant[] | undefined,
) => {
  // null = all participants selected (default); explicit Set = subset
  const [selectedParticipantIds, setSelectedParticipantIds] =
    useState<Set<string> | null>(null);

  useEffect(() => {
    setSelectedParticipantIds(null);
  }, [participants]);

  const isSelected = (id: string) =>
    selectedParticipantIds === null || selectedParticipantIds.has(id);

  const selectedParticipants = (participants ?? []).filter((p) =>
    isSelected(p.id),
  );

  const allSelected =
    !!participants?.length &&
    (selectedParticipantIds === null ||
      participants.every((p) => selectedParticipantIds.has(p.id)));

  const someSelected = participants?.some((p) => isSelected(p.id)) ?? false;

  const toggleParticipant = (id: string) =>
    setSelectedParticipantIds((prev) => {
      const base = prev ?? new Set(participants?.map((p) => p.id) ?? []);
      const next = new Set(base);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleAllParticipants = () => {
    if (allSelected) {
      setSelectedParticipantIds(new Set());
    } else {
      setSelectedParticipantIds(null);
    }
  };

  return {
    selectedParticipants,
    isSelected,
    allSelected,
    someSelected,
    toggleParticipant,
    toggleAllParticipants,
  };
};
