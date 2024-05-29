import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AddMenuButton from "./AddMenuButton";

const MenuTable = () => {
  const [menuData, setMenuData] = useState([]);

  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    try {
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            return setMenuData(data.result);
          } else {
            return console.log(data.error);
          }
        });
    } catch (error) {
      console.error("Error checking user:", error);
    }
  }, []);

  return (
    <div className="container">
      <div className="flex pt-16 pb-6 justify-between">
        <h1 className="text-3xl  text-slate-700 font-bold">Menu List</h1>
        {user.role === "admin" ? <AddMenuButton /> : ""}
      </div>
      <div className="border rounded-md">
        <p className="text-center text-xl font-medium py-3 text-slate-700 bg-green-400">
          TODAY'S MENU
        </p>
        <Table>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead className="pl-5">Date</TableHead>
              <TableHead>Menu Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menuData
              .filter((item) => item.isactive)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="pl-5">{item.menudate}</TableCell>
                  <TableCell className="font-medium">{item.menuname}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  {item.isactive === true ? (
                    <TableCell className="text-green-500 ">Active</TableCell>
                  ) : (
                    <TableCell className="text-red-500">Inactive</TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {user.role == "admin" && (
        <div className="border rounded-md mt-10">
          <p className="text-center text-xl font-medium py-3 text-slate-700 bg-pink-300">
            PREVIOUS MENU
          </p>
          <Table>
            <TableHeader>
              <TableRow className="text-center">
                <TableHead className="pl-5">Date</TableHead>
                <TableHead>Menu Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuData
                .filter((item) => !item.isactive)
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="pl-5">{item.menudate}</TableCell>
                    <TableCell className="font-medium">
                      {item.menuname}
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                    {item.isactive === true ? (
                      <TableCell className="text-green-500 ">Active</TableCell>
                    ) : (
                      <TableCell className="text-red-500">Inactive</TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MenuTable;
