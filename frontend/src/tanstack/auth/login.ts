import { useMutation, useQueryClient } from "@tanstack/react-query";

interface LoginPayload {
  username: string;
  password: string;
}

// const useLogin = () => {
//     const queryClient = useQueryClient();

//     const mutationResponse = useMutation({
//         mutationKey: ["login"],
//         mutationFn: async (data: { username: string; password: string }) => {
//             const response = await

// }
