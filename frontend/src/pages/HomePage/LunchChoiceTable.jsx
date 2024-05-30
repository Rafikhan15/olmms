import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { SquareCheckBig } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const LunchChoiceTable = () => {
    const [lunchData, setLunchData] = useState([]);
    console.log(lunchData);
    useEffect(() => {
        try {
          fetch("http://localhost:5000/lunchChoice")
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                return setLunchData(data.result);
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
        <h1 className="text-3xl  text-slate-700 font-bold">Lunch Choice List</h1>
      </div>
      <div className="border rounded-md">
        <p className="text-center text-xl font-medium py-3 text-slate-700 bg-green-400">
          TODAY'S MENU
        </p>
        <Table>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead className="pl-5">No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Menu Name</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Choose</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lunchData
              .map((item, index) => (
                <TableRow key={item.id} >
                  <TableCell className="pl-5">{index+1}</TableCell>
                  <TableCell >{item.menudate}</TableCell>
                  <TableCell className="font-medium">{item.menuname}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell onClick={() => {}} className="flex gap-x-10 text-green-500 pl-5">
                    <SquareCheckBig className="size-5 " /><Badge variant="destructive" className="cursor-pointer hover:bg-red-700">remove</Badge>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
   
    </div>
    );
};

export default LunchChoiceTable;