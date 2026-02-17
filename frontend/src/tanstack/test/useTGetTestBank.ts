import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";

export interface TestBankItem {
  alias: string;
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  id: string;
  is_active: boolean;
  name: string;
  slug: string;
  total_questions: number;
  type: string;
  updated: string;
}

export const useTGetTestBank = () => {
  const queryResponse = useQuery({
    queryKey: ["test-bank"],
    queryFn: async () => {
      const response: TestBankItem[] = await pb
        .collection("test_bank")
        .getFullList();
      return response;
    },
  });

  return queryResponse;
};
