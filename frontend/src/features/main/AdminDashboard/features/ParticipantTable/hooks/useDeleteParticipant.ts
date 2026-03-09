import { pb } from "@/lib/pocketbase";
import { useToast } from "@/context/ToastContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteParticipant = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();

  return useMutation({
    mutationFn: async (id: string) => {
      await pb.collection("users").delete(id);
    },
    onSuccess: () => {
      showToast({ message: "Participant deleted successfully." });
      queryClient.invalidateQueries({ queryKey: ["participants"] });
    },
    onError: () => showGeneralErrorToast(),
  });
};
