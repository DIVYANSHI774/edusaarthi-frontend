import React, { useEffect } from "react";

const SplashScreen = ({ setPage }) => {

  useEffect(() => {
    setTimeout(() => {
      setPage("login");
    }, 4000); // 🔥 4 sec (zyada smooth, 10-15 sec mat rakho)
  }, []);

  return (
    <div className="splash">

      <div className="splash-content">
        <h1>EduSaarthi </h1>
        <p>Simplifying Campus Life with Smart Technology</p>

        <div className="loader"></div>
      </div>

    </div>
  );
};

export default SplashScreen;