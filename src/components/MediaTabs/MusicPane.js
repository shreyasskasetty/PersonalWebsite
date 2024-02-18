import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Typography, useTheme } from '@mui/material';
import Player, { Track, PlayerInterface } from "../index.js";
import AddIcon from '@mui/icons-material/Add';

const MusicPane = ({ musics }) => {
  const theme = useTheme();

  const [playerSx] = useState({
    width: "100vw",
    position: "fixed",
    bottom: 0,
    left: 0,
    boxShadow: 8,
    borderRadiusTL: 1,
    borderRadiusTR: 1,
    borderRadiusBL: 0,
    borderRadiusBR: 0,
  });

  // Group music by genre
  const groupedMusics = musics.reduce((acc, music) => {
    acc[music.genre] = acc[music.genre] ? [...acc[music.genre], music] : [music];
    return acc;
  }, {});

  const handleSelectMusic = (music) => {
    const musicUrl = "https://github.com/shreyasskasetty/mymusic/raw/main/"
    PlayerInterface.setPlaylist([new Track(
      music.id,
      musicUrl + music.albumCover,
      music.title,
      music.artist,
      musicUrl + music.audioFile
    )]);
    PlayerInterface.play();
  };

  const handleAddMusic = (music) => {
    const musicUrl = "https://github.com/shreyasskasetty/mymusic/raw/main/"
    PlayerInterface.playLater([new Track(
      music.id,
      musicUrl + music.albumCover,
      music.title,
      music.artist,
      musicUrl + music.audioFile
    )]);
  };

  return (
    <Box display="flex" sx={{ p: 3, backgroundColor: theme.palette.background.default }}>
      {/* Music List by Genre */}
      {Object.keys(groupedMusics).map((genre, index) => (
        <Box key={index} width="100%">
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>{genre}</Typography>
          <List>
            {groupedMusics[genre].map((music, index) => (
              <ListItem button key={index} onClick={() => handleSelectMusic(music)}>
                <ListItemAvatar>
                  <Avatar src={music.albumCover} alt={music.title} />
                </ListItemAvatar>
                <ListItemText primary={music.title} secondary={music.artist} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => handleAddMusic(music)}>
                    <AddIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}

      {/* Player */}
      <Player sx={playerSx} defaultArt="https://raw.githubusercontent.com/the-maazu/react-material-music-player/master/sample_media/bach.jpg" />
    </Box>
  );
};

export default MusicPane;
