import React, { useState, useEffect } from "react";
//components
import Login from "./components/Login/Login";
import Home from "./containers/Home/Home";
import MainHeader from "./components/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const localUserData = localStorage.getItem("isLoggedIn");
    if (localUserData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    console.log(email, password);
    setUserData(email);
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} userData={userData} />}
      </main>
    </>
  );
}

export default App;
