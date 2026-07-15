import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShieldCheck, UserCog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { isAuthenticated } from "../../services/authService";

import Button from "../ui/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);
  const loggedIn = isAuthenticated();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <h2 className="text-2xl font-bold text-purple-900">
              Move of the Spirit
            </h2>

            <p className="text-xs text-yellow-600 font-semibold">
              The National Sacred Worship
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <Link
              to="/"
              className="hover:text-purple-700 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/captain-register"
              className="hover:text-purple-700 transition-colors"
            >
              Become a Captain
            </Link>

            <Link
              to="/captain"
              className="hover:text-purple-700 transition-colors"
            >
              Captain Dashboard
            </Link>

            <Link
              to="/register"
              className="hover:text-purple-700 transition-colors"
            >
              Register
            </Link>

            <Link
              to="/leaderboard"
              className="hover:text-purple-700 transition-colors"
            >
              Leaderboard
            </Link>

          </div>

          {/* Desktop Admin Login Button */}
          <div className="hidden md:flex items-center gap-4">

  <div className="text-right">

    <p className="text-xs font-semibold text-purple-900">

      {loggedIn ? "Administrator" : "Administrator"}

    </p>

    <p className="text-[11px] text-gray-500">

      {loggedIn
        ? "Dashboard Available"
        : "Secure Staff Access"}

    </p>

  </div>

  <Link
    to={loggedIn ? "/admin-dashboard" : "/admin-login"}
  >
    <Button className="flex items-center gap-2">

      {loggedIn ? (
        <>
          <UserCog size={18} />
          Dashboard
        </>
      ) : (
        <>
          <ShieldCheck size={18} />
          Login
        </>
      )}

    </Button>
  </Link>

</div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-xl hover:bg-purple-100 transition cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={30} className="text-purple-900" />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>

        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-2xl z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 flex justify-between items-center border-b">

                <div>
                  <h2 className="font-bold text-xl text-purple-900">
                    Menu
                  </h2>

                  <p className="text-sm text-gray-500">
                    Move of the Spirit
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={30} />
                </button>

              </div>

              <div className="flex flex-col p-6 gap-5 text-lg font-medium">

                <Link
                  to="/"
                  onClick={closeMenu}
                  className="hover:text-purple-700"
                >
                  Home
                </Link>

                <Link
                  to="/captain-register"
                  onClick={closeMenu}
                  className="hover:text-purple-700"
                >
                  Become a Captain
                </Link>

                <Link
                  to="/captain"
                  onClick={closeMenu}
                  className="hover:text-purple-700"
                >
                  Captain Dashboard
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="hover:text-purple-700"
                >
                  Register
                </Link>

                <Link
                  to="/leaderboard"
                  onClick={closeMenu}
                  className="hover:text-purple-700 transition-colors"
                >
                  Leaderboard
                </Link>

                <div className="border-t pt-6 mt-4">

  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
    Administrator
  </p>

  <p className="text-sm text-gray-500 mb-4">

    {loggedIn
      ? "Dashboard Available"
      : "Secure Staff Access"}

  </p>

  <Link
    to={loggedIn ? "/admin-dashboard" : "/admin-login"}
    onClick={closeMenu}
  >
    <Button className="w-full flex items-center justify-center gap-2">

      {loggedIn ? (
        <>
          <UserCog size={18} />
          Dashboard
        </>
      ) : (
        <>
          <ShieldCheck size={18} />
          Login
        </>
      )}

    </Button>
  </Link>

</div>

              </div>

            </motion.div>
          </>
        )}

      </AnimatePresence>
    </>
  );
}