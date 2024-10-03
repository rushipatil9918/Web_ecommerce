export default function Footer() {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-3xl">
                <li>
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Press</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Jobs</a>
                </li>
              </ul>
            </div>
  
            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold">Solutions</h3>
              <ul className="mt-4 space-y-2 text-3xl">
                <li>
                  <a href="#" className="hover:underline">Marketing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Analytics</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Commerce</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Insights</a>
                </li>
              </ul>
            </div>
  
            {/* Documentation */}
            <div>
              <h3 className="text-lg font-semibold">Documentation</h3>
              <ul className="mt-4 space-y-2 text-3xl">
                <li>
                  <a href="#" className="hover:underline">API Docs</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Guides</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Releases</a>
                </li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-3xl">
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Cookie Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Security</a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Help Center</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  