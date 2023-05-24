// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import RoomForm from "./components/RoomForm";

import Auth from "./components/Auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  return <div>{isAuth === false ? <Auth /> : <RoomForm />}</div>;
}

export default App;
