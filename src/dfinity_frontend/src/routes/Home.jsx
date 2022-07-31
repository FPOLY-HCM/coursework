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
import { makeStorageClient } from '../utilities/web3.storage';

function Home() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (!selectedFile) return;
    const objectUrl = URL.createObjectURL(selectedFile);
    setImage({
      preview: objectUrl,
      name: selectedFile.name,
    });

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileOnChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const storeFiles = async (files) => {
    const client = makeStorageClient();
    const cid = await client.put(files);
    setImage(cid);
  };

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
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleFileOnChange}
              />
            </Button>
            <Button size="small" variant="contained" color="primary">
              Mint
            </Button>
          </Grid>
        </CardActions>
        <CardContent>
          <Link to="/customers">Customer list</Link>
          {image && (
            <ImageList>
              <ImageListItem key={image.name}>
                <img
                  src={image.preview}
                  srcSet={image.preview}
                  alt={image.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={image.name}
                  subtitle={<span>by: {image.name}</span>}
                  position="below"
                />
              </ImageListItem>
            </ImageList>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
