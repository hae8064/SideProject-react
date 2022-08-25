import React, { useEffect, useState } from "react";
import { authService } from "../firebase";
import AppRouter from './Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [])
  console.log(authService.currentUser);

  setInterval(() => {
  });

  return(
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "초기화중..." }
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
};

export default App;
