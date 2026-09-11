import { useParams, useNavigate } from "react-router-dom";
import { useGetParticipant } from "@/features/main/AdminDashboard/features/ParticipantTable/hooks/useGetParticipant";

export const useNavigateParticipant = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: participants, isLoading } = useGetParticipant();

  const currentIndex = participants ? participants.findIndex((p) => p.id === id) : -1;
  const total = participants ? participants.length : 0;

  const prevParticipant =
    currentIndex > 0 && participants ? participants[currentIndex - 1] : null;
  const nextParticipant =
    currentIndex >= 0 && currentIndex < total - 1 && participants
      ? participants[currentIndex + 1]
      : null;

  const goToPrev = () => {
    if (prevParticipant) {
      navigate(`/admin/participants/${prevParticipant.id}`);
    }
  };

  const goToNext = () => {
    if (nextParticipant) {
      navigate(`/admin/participants/${nextParticipant.id}`);
    }
  };

  return {
    currentIndex: currentIndex >= 0 ? currentIndex + 1 : 0,
    total,
    hasPrev: !!prevParticipant,
    hasNext: !!nextParticipant,
    prevId: prevParticipant?.id ?? null,
    nextId: nextParticipant?.id ?? null,
    goToPrev,
    goToNext,
    isLoading,
  };
};
