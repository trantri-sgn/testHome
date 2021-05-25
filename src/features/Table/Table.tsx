import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import TableRender from "./components/TableRender";
import employeeAPI from "apis/employeeAPI";
import ITableItem from "models/Table/ITableItem";

const Table = (): JSX.Element => {
  const [employee, setEmployee] = useState<ITableItem[]>([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employeeList = await employeeAPI.getAll();
        const { data } = employeeList;
        console.log(data);
        setEmployee(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployee();
  }, []);
  const handleRowAdd = (newData: any, resolve: any) => {
    //validation
    const addEmployee = async () => {
      try {
        const employeeList = await employeeAPI.postAll(newData);
        let dataToAdd = [...employee];
        dataToAdd.push(newData);
        setEmployee(dataToAdd);

        resolve();
      } catch (error) {
        console.log(error);
      }
    };
    addEmployee();
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TableRender renderData={employee} handleRowAdd={handleRowAdd} />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Table;
