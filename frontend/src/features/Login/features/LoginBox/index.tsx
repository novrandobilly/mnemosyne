import { FormProvider, useForm } from "react-hook-form";
import IntiDinamisButton from "../../../../components/IntiDinamisButton";
import { IntiDinamisText } from "../../../../components/IntiDinamisText";
import { EmailInput } from "./features/EmailInput";
import { PasswordInput } from "./features/PasswordInput";
import { useTLogin } from "@/tanstack/auth/login";

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
        <div className="flex items-center justify-between">
          <div>
            <IntiDinamisText className="text-lg uppercase tracking-[4px]">
              Sign In
            </IntiDinamisText>
            <IntiDinamisText className="text-sm text-neutral-500">
              Enter to access assessment environment.
            </IntiDinamisText>
          </div>
          <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600 min-w-fit text-center">
            Internal Use
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <EmailInput />
          <PasswordInput />

          <IntiDinamisButton
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </IntiDinamisButton>
        </div>

        <div className="mt-6 text-xs text-neutral-500">
          Having trouble? Contact your assessment administrator.
        </div>
      </div>
    </FormProvider>
  );
};
