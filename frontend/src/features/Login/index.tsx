export default function Login() {
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
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              Welcome to
              <span className="block text-neutral-500">Inti Dinamis</span>
              <span className="block text-neutral-500">
                Assessment Platform
              </span>
            </h1>
            <p className="max-w-xl text-base text-neutral-600">
              Access your test environment with a secure, single-login flow.
              Your progress and results remain private and protected.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Secure session
              </div>
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-neutral-400" />
                Auto-save enabled
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Sign In
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                  Login
                </h2>
              </div>
              <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
                Internal Use
              </div>
            </div>

            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-xs text-neutral-500">
              Having trouble? Contact your assessment administrator.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
