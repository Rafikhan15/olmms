import React, { useEffect, useState } from "react";
import MenuTable from "./MenuTable";
import NavBar from "./NavBar";
import UserTable from "./UserTable";

const HomePage = () => {
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
