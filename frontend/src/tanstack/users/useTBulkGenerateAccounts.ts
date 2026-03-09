import { useMutation } from "@tanstack/react-query";
import { pb } from "@/lib/pocketbase";

export interface GeneratedAccount {
  id: string;
  username: string;
  password: string;
}

interface BulkGeneratePayload {
  count: number;
  prefix?: string;
}

function generateRandomString(length: number): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const DEFAULT_PASSWORD = "intidinamis2005";

export const useTBulkGenerateAccounts = () => {
  return useMutation({
    mutationFn: async ({
      count,
      prefix = "MNM",
    }: BulkGeneratePayload): Promise<GeneratedAccount[]> => {
      // Pre-generate all credentials before sending
      const credentials = Array.from({ length: count }, () => ({
        username: `${prefix}_${generateRandomString(3)}`,
        password: DEFAULT_PASSWORD,
      }));

      const batch = pb.createBatch();
      for (const { username, password } of credentials) {
        batch.collection("users").create({
          username,
          password,
          passwordConfirm: password,
          role: "participant",
          is_onboarded: false,
          contact_email: `${username}@example.com`,
        });
      }

      const responses = await batch.send();

      return responses.map((res, i) => ({
        id: res.body?.id as string,
        username: credentials[i].username,
        password: credentials[i].password,
      }));
    },
  });
};
