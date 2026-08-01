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

const TEST_ORDER = [
  "/papikostick",
  "/disc",
  "/eas4",
  "/eas5",
  "/eas6",
  "/eas7",
  "/eas10",
  "/a5",
  "/dr",
  "/da5",
  "/st17",
  "/intray1",
  "/intray2",
];

export const useTGetTestBank = () => {
  const queryResponse = useQuery({
    queryKey: ["test-bank"],
    queryFn: async () => {
      const response: TestBankItem[] = await pb
        .collection("test_bank")
        .getFullList();

      response.sort((a, b) => {
        const indexA = TEST_ORDER.indexOf(a.slug);
        const indexB = TEST_ORDER.indexOf(b.slug);
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
      });

      return response;
    },
  });

  return queryResponse;
};
