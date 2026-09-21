import { Fragment } from "react";
import { LoginBox } from "./features/LoginBox";
import SideCaption from "./features/SideCaption";
import { IntiDinamisLogo } from "@/components/IntiDinamisLogo";

const Login = () => {
  return (
    <Fragment>
      {/* Full screen ambient background gradient in IntiDinamis logo color tones */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-[100px]" />
        <div className="absolute bottom-12 right-1/3 h-48 w-48 rounded-full bg-amber-100/50 blur-[90px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10">
        <header className="flex items-center justify-between border-b border-neutral-200/60 pb-5">
          <IntiDinamisLogo size="md" />
          <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            Assessment Portal
          </div>
        </header>

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <SideCaption />
          <LoginBox />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
