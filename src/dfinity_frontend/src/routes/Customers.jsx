import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const rawCustomers = [
  {
    id: 1,
    name: 'Dat',
    birthday: '24/04/2003',
    phone: '03721244242',
    sex: 1,
  },
];

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(rawCustomers);
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Birthday</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Sex</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow>
                <TableCell align="center">{customer.id}</TableCell>
                <TableCell align="center">{customer.name}</TableCell>
                <TableCell align="center">{customer.birthday}</TableCell>
                <TableCell align="center">{customer.phone}</TableCell>
                <TableCell align="center">{customer.sex}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
