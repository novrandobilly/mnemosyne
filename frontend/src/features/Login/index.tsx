import { LoginBox } from "./features/LoginBox";
import SideCaption from "./features/SideCaption";

const Login = () => {
  return (
    <div className="relative flex min-h-screen flex-1 items-stretch bg-[#f8f7f4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[110px]" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-neutral-200/70 blur-[90px]" />
        <div className="absolute bottom-12 right-1/3 h-40 w-40 rounded-full bg-amber-100/70 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-lg font-bold text-white">
              M
            </div>
            <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-neutral-500" />
              Login
            </div>
          </div>
          <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600 shadow-sm">
            Secure Session
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
