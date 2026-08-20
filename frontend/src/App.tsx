import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ToastProvider } from "./context/ToastContext";
import { ModalProvider } from "./context/ModalContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { Suspense } from "react";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ModalProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen  flex justify-center">
              <main className="w-full max-w-360 min-h-screen">
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900"></div>
                  </div>
                }>
                  <AppRoutes />
                </Suspense>
              </main>
            </div>
          </BrowserRouter>
        </ModalProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
