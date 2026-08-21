import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";
import { FULLY_DISABLED_SLUGS } from "@/config/disabledTests";

export const useToggleAllTests = () => {
  const queryClient = useQueryClient();
  const { showToast, showGeneralErrorToast } = useToast();
  const mutationResponse = useMutation({
    mutationKey: ["toggle-all-tests"],
    mutationFn: async (isActive: boolean) => {
      const allTests = await pb.collection("test_bank").getFullList({
        fields: "id,slug",
      });
      const batch = pb.createBatch();

      allTests.forEach((test) => {
        // When enabling, skip tests that are fully disabled in code config
        if (isActive && FULLY_DISABLED_SLUGS.has(test.slug)) return;
        batch.collection("test_bank").update(test.id, { is_active: isActive });
      });

      await batch.send();
    },
    onSuccess: (_data, isActive) => {
      showToast({
        message: isActive ? "All tests activated." : "All tests deactivated.",
      });
      queryClient.invalidateQueries({ queryKey: ["test-bank"] });
    },
    onError: () => showGeneralErrorToast(),
  });

  return mutationResponse;
};
