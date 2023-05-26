// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import RoomForm from "./components/RoomForm";

import Auth from "./components/Auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  if (!isAuth) {
    return <Auth setIsAuth={setIsAuth} />;
  } else {
    return <RoomForm />;
  }
}

export default App;
