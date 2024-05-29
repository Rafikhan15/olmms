import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuTable from "./MenuTable";
import NavBar from "./NavBar";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
  const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      return navigate("/");
    }
  }, [navigate]);

  
  return (
    <div>
      <NavBar />
      <MenuTable />
    </div>
  );
};

export default HomePage;
