import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white fixed w-full z-50">
      {/* Logo always goes home */}
      <Link to="/" className="text-2xl font-bold text-purple-600">
        Yoga Flow
      </Link>

      <div className="space-x-6">
        {isHomePage ? (
          <>
            <a href="#home">Home</a>
            <a href="#classes">Classes</a>
            <a href="#pricing">Pricing</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          // If not on home page
          <Link to="/" className="hover:text-purple-600">
            Back to Home
          </Link>
        )}

        {/* Login always visible */}
        <Link to="/login" className="hover:text-purple-600">
          Login
        </Link>
      </div>
    </nav>
  );
}
