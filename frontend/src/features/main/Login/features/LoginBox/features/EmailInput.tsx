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
        required: "User ID wajib diisi",
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <div className="flex flex-col gap-1.5">
            <TextInput
              label="User ID"
              placeholder="Masukkan User ID atau Email"
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
