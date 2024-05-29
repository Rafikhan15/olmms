import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuTable from "./MenuTable";
import NavBar from "./NavBar";
import UserTable from "./UserTable";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      return navigate("/");
    }
  }, [navigate]);

  const [active, setActive] = useState({
    menu: true,
    user: false,
    choice: false,
  });

  return (
    <div>
      <NavBar setActive={setActive} />
      {active.menu && <MenuTable />}
      {active.user && <UserTable />}
    </div>
  );
};

export default HomePage;
