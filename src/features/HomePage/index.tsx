export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <h1 className="ml-3 text-3xl font-bold text-gray-900">
              Psychological Test Dashboard
            </h1>
          </div>
          <nav className="flex gap-6">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </a>
            <a href="/products" className="text-gray-700 hover:text-gray-900">
              Product & Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-center text-gray-500">
            <p className="text-lg">Dashboard content goes here</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Intidinamis Test Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
