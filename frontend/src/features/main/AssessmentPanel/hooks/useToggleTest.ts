import { pb } from "@/lib/pocketbase";
import { useTGetTestBank } from "@/tanstack/test/useTGetTestBank";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/context/ToastContext";

export const useToggleTest = () => {
  const { data: testBank } = useTGetTestBank();
  const queryClient = useQueryClient();
  const { showGeneralErrorToast } = useToast();

  const mutationResponse = useMutation({
    mutationKey: ["toggle-test"],
    mutationFn: async (testId: string) => {
      const foundTest = testBank?.find((t) => t.id === testId);
      if (!foundTest) throw new Error("Test not found");
      const updatedData = { is_active: !foundTest.is_active };

      const response = await pb
        .collection("test_bank")
        .update(testId, updatedData);
      return response;
    },
    onSuccess: () => {
      console.log("success");
      // Invalidate and refetch test bank data after toggling
      queryClient.invalidateQueries({ queryKey: ["test-bank"] });
    },
    onError: () => showGeneralErrorToast(),
  });
  return mutationResponse;
};
