import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";

export const useToggleAllTests = () => {
  const queryClient = useQueryClient();
  const { showGeneralErrorToast } = useToast();
  const mutationResponse = useMutation({
    mutationKey: ["toggle-all-tests"],
    mutationFn: async (isActive: boolean) => {
      const allTests = await pb.collection("test_bank").getFullList({
        fields: "id",
      });
      const batch = pb.createBatch();

      allTests.forEach((test) => {
        batch.collection("test_bank").update(test.id, { is_active: isActive });
      });

      await batch.send();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test-bank"] });
    },
    onError: () => showGeneralErrorToast(),
  });

  return mutationResponse;
};
