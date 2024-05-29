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
        <AddMenuButton/>
      </div>
      <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="pl-5">Date</TableHead>
            <TableHead >Menu Name</TableHead>
            <TableHead >Description</TableHead>
            <TableHead >Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuData.map((item) => (
            <TableRow  key={item.id}>
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
    </div>
  );
};

export default MenuTable;
