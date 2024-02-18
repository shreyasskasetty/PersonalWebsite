import * as React from 'react';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImagePane() {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
     <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Art Gallery
        </Typography>
        <Typography  variant="subtitle1" style={{ fontFamily: '"Roboto", sans-serif', textTransform: 'none' }}>
          A collection of my photography and sketches
        </Typography>
      </Box>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: require('assets/img/Photo1.png'),
    title: 'Fern',
  },
  {
    img: require('assets/img/Photo2.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Photo3.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Photo4.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Photo5.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Photo6.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Portrait1.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Portrait2.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Portrait3.png'),
    title: 'Snacks',
  },
  {
    img: require('assets/img/Portrait4.png'),
    title: 'Snacks',
  },
];
