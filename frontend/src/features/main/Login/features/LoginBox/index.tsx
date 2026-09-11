import { FormProvider, useForm } from "react-hook-form";
import IntiDinamisButton from "@/components/IntiDinamisButton";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { EmailInput } from "./features/EmailInput";
import { PasswordInput } from "./features/PasswordInput";
import { useTLogin } from "@/api/auth/login";

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginBox = () => {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;
  const { mutate: login } = useTLogin();

  const onSubmit = ({ email, password }: LoginFormValues) => {
    login({ identity: email, password });
  };

  return (
    <FormProvider {...methods}>
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
        <div>
          <IntiDinamisText className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
            User Login
          </IntiDinamisText>
        </div>

        <div className="mt-8 space-y-5">
          <EmailInput />
          <PasswordInput
            onKeyDown={(e) => {
              e.stopPropagation();
              // e.preventDefault();
              if (e.key === "Enter") {
                handleSubmit(onSubmit)();
                return;
              }
            }}
          />

          <IntiDinamisButton
            variant="emerald"
            className="w-full py-3 text-base font-semibold"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </IntiDinamisButton>
        </div>

        <div className="mt-6 text-xs text-neutral-400">
          Butuh bantuan? Hubungi administrator tes Anda.
        </div>
      </div>
    </FormProvider>
  );
};
