import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ my: 2 }}>
      <Card>
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              size="small"
              variant="contained"
              color="primary"
              component="label"
            >
              Load Image
              <input hidden accept="image/*" type="file" />
            </Button>
            <Link to="/customers/create">Create</Link>
          </Grid>
        </CardActions>
        <CardContent>
          <Link to="/customers">Customer list</Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
