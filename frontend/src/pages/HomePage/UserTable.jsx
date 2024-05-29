import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const UserTable = () => {
const [userData, setUserData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/user")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            return setUserData(data.result);
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
          <h1 className="text-3xl pt-16 pb-6  text-slate-700 font-bold">User List</h1>
        <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow >
              <TableHead className="pl-5">Id</TableHead>
              <TableHead >Username</TableHead>
              <TableHead >Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((item) => (
              <TableRow  key={item.id}>
                <TableCell className="pl-5 font-semibold">{item.id}</TableCell>
                <TableCell >{item.username}</TableCell>
                <TableCell className="font-medium">{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>
    );
};

export default UserTable;