import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(null);
  };

  return (
    <>
      <nav className="border-gray-200 bg-gray-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div></div>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <div className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {isLoggedIn ? (
                <>
                  <a
                    href="/home"
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  >
                    Home
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  >
                    Login
                  </a>
                  <a
                    href="/"
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  >
                    SignUp
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
// eslint-disable-next-line
