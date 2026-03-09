import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";

export const useTToggleTestStatus = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();
  const mutationResponse = useMutation({
    mutationKey: ["toggle-test-bank"],
    mutationFn: async (name: string) => {
      const record = await pb.collection("test_bank").getOne(`name=${name}`);
      const updatedRecord = await pb.collection("test_bank").update(record.id, {
        is_active: !record.is_active,
      });
      return updatedRecord;
    },
    onSuccess: (data) => {
      showToast({
        message: `Test ${data.is_active ? "activated" : "deactivated"} successfully.`,
      });
      queryClient.invalidateQueries({ queryKey: ["test-bank"] });
    },
    onError: () => showGeneralErrorToast(),
  });

  return mutationResponse;
};
