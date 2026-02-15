import EyeOff from "@/assets/eye-off.svg";
import EyeOn from "@/assets/eye-on.svg";
import { IntiDinamisText } from "@/components/IntiDinamisText";
import { useState, type FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput } from "../../../../../components/TextInput";

export const PasswordInput: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="password"
      rules={{
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <div className="flex flex-col gap-1.5">
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              rightIcon={
                <img
                  title={isVisible ? "Hide Password" : "Show Password"}
                  src={isVisible ? EyeOff : EyeOn}
                  alt="Toggle Password Visibility"
                  className="cursor-pointer"
                  onClick={() => setIsVisible((prev) => !prev)}
                />
              }
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
            {error && (
              <IntiDinamisText
                size="10"
                className="text-intidinamis-d93228 text-sm"
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
