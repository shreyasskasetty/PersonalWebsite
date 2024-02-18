import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat'; // Assuming ChatIcon for Chat GPT

const SocialMediaList = () => {
  // Custom styles
  const headingStyle = {
    mt: 4,
    mb: 2,
    color: 'primary.main', // Use theme's primary color
    fontWeight: 'bold', // Makes the text bold
  };

  const listStyle = {
    width: '200px',
    bgcolor: 'background.paper', // Use theme's background color for paper
    borderRadius: '10px', // Rounded corners for the list
    boxShadow: 1, // Apply a subtle shadow
    overflow: 'hidden', // Ensures the border radius clips the content
    mb: 2, // Margin bottom for spacing between sections
  };

  return (
    <Box width="100%">
      <Typography variant="h5" gutterBottom component="div" sx={{marginLeft:-5,width: '500px', fontWeight: 'medium' }}>
        Social Media and Messaging
      </Typography>
      <Box>
        <Typography variant="h6" sx={headingStyle}>
          Social Media
        </Typography>
        <List sx={listStyle}>
          <ListItem>
            <ListItemIcon>
              <InstagramIcon color="secondary" /> {/* Color for aesthetic */}
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FacebookIcon color="primary" /> {/* Color for aesthetic */}
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
        </List>

        <Typography variant="h6" sx={headingStyle}>
          Microblog
        </Typography>
        <List sx={listStyle}>
          <ListItem>
            <ListItemIcon>
              <TwitterIcon color="info" /> {/* Color for aesthetic */}
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
        </List>

        <Typography variant="h6" sx={headingStyle}>
          Messaging
        </Typography>
        <List sx={listStyle}>
          <ListItem>
            <ListItemIcon>
              <WhatsAppIcon color="success" /> {/* Color for aesthetic */}
            </ListItemIcon>
            <ListItemText primary="WhatsApp" />
          </ListItem>
        </List>

        <Typography variant="h6" sx={headingStyle}>
          General AI
        </Typography>
        <List sx={listStyle}>
          <ListItem>
            <ListItemIcon>
              <ChatIcon color="error" /> {/* Assuming ChatIcon for Chat GPT, color for aesthetic */}
            </ListItemIcon>
            <ListItemText primary="Chat GPT" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SocialMediaList;
