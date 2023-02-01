import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main
        className="flex justify-center items-center flex-col h-screen 
                    bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
