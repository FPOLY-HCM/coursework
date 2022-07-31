import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dfinity_backend } from '../../../../declarations/dfinity_backend';

export default function Create() {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    setLoading(true);
    let a = await dfinity_backend.create(customer);
    setLoading(false);
    alert('Created successfuly custom id ' + a);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="ID"
          type="text"
          value={customer.id}
          onChange={(e) =>
            setCustomer({ ...customer, id: parseInt(e.target.value) })
          }
        />
      </div>
      <div>
        <TextField
          label="Name"
          type="text"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
      </div>
      <div>
        <TextField
          type="text"
          label="Birthday"
          value={customer.birthday}
          onChange={(e) =>
            setCustomer({ ...customer, birthday: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          type="text"
          label="Phone"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        />
      </div>
      <div>
        <TextField
          type="text"
          label="Sex"
          value={customer.sex}
          onChange={(e) =>
            setCustomer({ ...customer, sex: parseInt(e.target.value) })
          }
        />
      </div>
      <Button
        disabled={loading}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Create
      </Button>
    </Box>
  );
}
