import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dfinity_backend } from '../../../../declarations/dfinity_backend';

export default function Edit() {
  const [customer, setCustomer] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = parseInt(searchParams.get('id'));
    const getCustomer = async () => {
      let a = await dfinity_backend.read(id);
      setCustomer(a[0]);
      setLoading(false);
    };
    getCustomer();
  }, []);

  return (
    <Box>
      {loading ? (
        <div>loading....</div>
      ) : (
        <div>
          <div>
            <label>Name</label>
            <input type="text" value={customer.name} />
          </div>
          <div>
            <label>Birthday</label>
            <input type="text" value={customer.birthday} />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" value={customer.phone} />
          </div>
          <div>
            <label>Sex</label>
            <input type="text" value={customer.sex} />
          </div>
        </div>
      )}
    </Box>
  );
}
