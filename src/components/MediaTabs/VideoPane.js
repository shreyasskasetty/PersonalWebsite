import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VideoPane = ({ category, items }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const [visibleItems, setVisibleItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const getVisibleItemCount = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    return 3; // Default for md and above
  };

  useEffect(() => {
    const visibleCount = getVisibleItemCount();
    setVisibleItems(items.slice(startIndex, startIndex + visibleCount));
  }, [startIndex, items, isXs, isSm]);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex + 1) % items.length);
  };

  const gridColumnSize = 12 / getVisibleItemCount();

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        {category}
      </Typography>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: '-40px' }}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={{ overflow: 'hidden', flexGrow: 1 }}>
          <Grid container style={{ width: '100%', minHeight: '350px' }}  spacing={2}>
            {visibleItems.map((item, index) => (
              <Grid item key={index} xs={gridColumnSize} sm={gridColumnSize} md={gridColumnSize}>
                <Paper style={{margin:'2px', minHeight: '300px' }} elevation={3}>
                  <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                  <Box padding={2}>
                    <Typography variant="subtitle1" style={{ fontFamily: '"Roboto", sans-serif', textTransform: 'none' }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <IconButton onClick={handleNext} sx={{ position: 'absolute', right: '-40px' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default VideoPane;
