import { pb } from "@/lib/pocketbase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useTToggleTestStatus = () => {
  const queryClient = useQueryClient();
  const mutationResponse = useMutation({
    mutationKey: ["toggle-test-bank"],
    mutationFn: async (name: string) => {
      const record = await pb.collection("test_bank").getOne(`name=${name}`);
      const updatedRecord = await pb.collection("test_bank").update(record.id, {
        is_active: !record.is_active,
      });
      return updatedRecord;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test-bank"] });
    },
  });

  return mutationResponse;
};
