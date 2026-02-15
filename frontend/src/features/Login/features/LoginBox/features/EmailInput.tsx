import { IntiDinamisText } from "@/components/IntiDinamisText";
import { TextInput } from "@/components/TextInput";
import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const EmailInput: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="email"
      rules={{
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <div className="flex flex-col gap-1.5">
            <TextInput
              label="Email"
              placeholder="example@intidinamis.com"
              type="text"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
            {error && (
              <IntiDinamisText
                size="10"
                className="text-intidinamis-d93228 text-xs"
              >
                {error.message}
              </IntiDinamisText>
            )}
          </div>
        );
      }}
    />
  );
};
