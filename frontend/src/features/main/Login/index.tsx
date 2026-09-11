import { LoginBox } from "./features/LoginBox";
import SideCaption from "./features/SideCaption";
import { IntiDinamisLogo } from "@/components/IntiDinamisLogo";

const Login = () => {
  return (
    <div className="relative flex min-h-screen flex-1 items-stretch bg-neutral-50/60">
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
    </div>
  );
};

export default Login;
