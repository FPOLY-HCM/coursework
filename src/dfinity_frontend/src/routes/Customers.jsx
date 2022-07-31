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
import { useCanister, useConnect } from '@connect2ic/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box } from '@mui/system';
import { dfinity_backend } from '../../../declarations/dfinity_backend';
import { Link } from 'react-router-dom';

export default function Customers() {
  const { isConnected, principal, activeProvider } = useConnect();

  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [coursework, setCourseWork] = useState();

  useEffect(() => {
    const getAll = async () => {
      let data = await dfinity_backend.list();
      setCustomers(data);
      setLoading(false);
    };
    setLoading(true);
    getAll();
  }, [coursework]);
  return (
    <Box>
      <h1>Customers</h1>
      {loading ? (
        <div>Loading.........</div>
      ) : (
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
              {customers.map((customer, key) => (
                <TableRow key={key}>
                  <TableCell align="center">{customer.id}</TableCell>
                  <TableCell align="center">{customer.name}</TableCell>
                  <TableCell align="center">{customer.birthday}</TableCell>
                  <TableCell align="center">{customer.phone}</TableCell>
                  <TableCell align="center">{customer.sex}</TableCell>
                  <TableCell align="center">
                    <Link to={'edit?id=' + customer.id}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
