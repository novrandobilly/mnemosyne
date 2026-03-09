import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ToastProvider } from "./context/ToastContext";
import { ModalProvider } from "./context/ModalContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ModalProvider>
          <BrowserRouter>
            <div className="min-h-screen  flex justify-center">
              <main className="w-full max-w-360 min-h-screen">
                <AppRoutes />
              </main>
            </div>
          </BrowserRouter>
        </ModalProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
