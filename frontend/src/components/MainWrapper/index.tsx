import React, { type ReactNode } from "react";

interface MainWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MainWrapper: React.FC<MainWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen " {...props}>
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-linear-to-r from-slate-50 to-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mnemosyne
              </h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Login
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 mt-auto ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Mnemosyne. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainWrapper;
