import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat'; // Assuming ChatIcon for Chat GPT

const SocialMediaList = () => {
  return (
    <Box width="100%">
      <h3>You can find me on:</h3>  
      <List>
        <ListItem>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText primary="WhatsApp" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChatIcon /> {/* Replace with appropriate icon for Chat GPT */}
          </ListItemIcon>
          <ListItemText primary="Chat GPT" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SocialMediaList;
