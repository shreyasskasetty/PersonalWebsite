import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, useTheme } from '@mui/material';
import Player, { Track, PlayerInterface } from "../index.js";
import AddIcon from '@mui/icons-material/Add';

const MusicPane = ({  musics }) => {
  const theme = useTheme();

  // Define the state and its setter for Player styles
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

  const handleSelectMusic = (music) => {
    const musicUrl = "https://github.com/shreyasskasetty/mymusic/raw/main/"
    PlayerInterface.setPlaylist([new Track(
      music.id, // Assuming each music item has an id
      musicUrl + music.albumCover,
      music.title,
      music.artist,
      musicUrl + music.audioFile // The URL to the music file
    )]);
    PlayerInterface.play();
  };

  const handleAddMusic = (music) => {
    const musicUrl = "https://github.com/shreyasskasetty/mymusic/raw/main/"
    PlayerInterface.playLater([new Track(
      music.id, // Assuming each music item has an id
      musicUrl + music.albumCover,
      music.title,
      music.artist,
      musicUrl + music.audioFile // The URL to the music file
    )]);
  };
  // You can further adjust playerSx in useEffect if needed
  useEffect(() => {
    // Example: setPlayerSx({ ...playerSx, additionalStyleProperty: value });
  }, []);

  return (
    <Box display="flex" sx={{ p: 3, backgroundColor: theme.palette.background.default }}>
      {/* Music List */}
      <Box width="100%">
        <Box>
          <h3>My favourite Songs:</h3>
        </Box>
        <List>
          {musics.map((music, index) => (
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

      {/* Player */}
      <Player
        sx={playerSx}
        defaultArt="https://raw.githubusercontent.com/the-maazu/react-material-music-player/master/sample_media/bach.jpg"
      />
    </Box>
  );
};

export default MusicPane;
