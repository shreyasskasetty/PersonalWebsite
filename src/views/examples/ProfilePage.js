import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {  Paper,
  Typography,
  List,
  Divider,
  ListItem,
  Link,
  ListItemText } from '@mui/material';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ImagePane from "../../components/MediaTabs/ImagePane";
import VideoPane from "../../components/MediaTabs/VideoPane";
import MusicPane from "components/MediaTabs/MusicPane";
import SocialMediaPane from "components/MediaTabs/SocialMediaPane";
import SportsPane from "components/MediaTabs/SportsPane";


function ChallengesSection() {
  const challenges = [
    {
      tool: "Challenges in Video Editing Software",
      description: "One of the main challenges I face, especially when it comes to producing media, is navigating complex video editing software like Adobe Premiere. As a beginner, the steep learning curve is overwhelming. The interface is packed with a myriad of tools and features, each with its own set of complex options that often feel daunting. Understanding the functionality and effectively utilizing these tools requires a significant investment of time and effort into tutorials and practice. This complexity can make the process of bringing creative ideas to life quite challenging, demanding a lot of patience to gradually build the necessary skills"
    },
  ];

  return (
    <Paper style={{ zIndex: -2, padding: 16, marginTop: 16 }}>
      <Typography variant="h6" gutterBottom>
        Challenges Faced with Interactive Media Tools
      </Typography>
      <List>
        {challenges.map((challenge, index) => (
          <ListItem key={index}>
            <ListItemText 
              secondary={challenge.description} 
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

function AssignmentSection() {
  const studentNameUrl = {
    "Wenjing Chen": "https://momofodr.github.io/csce656/",
    "Harshitha Dhulipala": "https://hdhulipala02.wixsite.com/website/home",
    "Nebiyou Ersabo": "https://nebiyouersabo.github.io/445-Assignment-1/",
    "Sathvik Kote": "https://sathvik10.github.io/CSCE-656/",
    "Prachi Surbhi": "https://sites.google.com/tamu.edu/psurbhi/home",
    "Shuo Xing": "https://shuoxing98.github.io//misc/",
    "Khanh Dao": "https://people.tamu.edu/~kdaoq2819/",
    "Romaanchan Skanda": "https://sites.google.com/tamu.edu/romey-media-journey/home",
    "Gohyun Kim": "https://ayndrs.github.io/445-Assignment-1/",
    "Benson Hsu": "https://people.tamu.edu/~benson221655/CS445",
    "Ziqiao Jin": "https://ziqiaojin.webnode.page/",
    "Nikki Rad": "https://nikkiraww.wixsite.com/csce445",
    "Yifan Ren": "https://finnyear.github.io/",
    "Yixin Chen": "https://yxchen95.github.io//csce656/",
    "Uma Sarkar": "https://csce-445-bucket.s3.us-east-2.amazonaws.com/Project1-Webpage/index.html",
    "Connor Fergus": "https://connorfergus.github.io/CSCE-656-Assignment-1/",
  }
  const studentPageUrl = (name) => studentNameUrl[name] || "#";
  return (
    <Paper style={{ zIndex: -1, padding: 16, marginTop: 32, marginBottom: 32, background: '#f7f7f7' }}>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
        Assignment 2: Insights and Reflections
      </Typography>

      {/* Part 1: Common Themes */}
      <Typography variant="h6" style={{ marginTop: 16, marginBottom: 8, color: '#333' }}>
        Part 1: Common Themes
      </Typography>

      {/* Video */}
      <Typography variant="subtitle1" gutterBottom>
        Video:
      </Typography>
      <Typography variant="body1" paragraph>
      Many of us predominantly engage with video content, especially through TV shows and movies. A notable shared interest among us is in sitcoms, such as <strong>Friends, The Big Bang Theory,and How I Met Your Mother.</strong>
      I found following students having similar interests in TV shows and movies:
      </Typography>
      <List>
        {["Wenjing Chen", "Harshitha Dhulipala", "Nebiyou Ersabo", "Sathvik Kote", "Prachi Surbhi", "Shuo Xing"].map((name) => (
          <ListItem key={name}>
            <ListItemText primary={<Link href={studentPageUrl(name)}>{name}</Link>} />
          </ListItem>
        ))}
      </List>

      <Divider style={{ margin: '24px 0' }} />

      {/* Social Media and Communication */}
      <Typography variant="subtitle1" gutterBottom>
        Social Media and Communication:
      </Typography>
      <Typography variant="body1" paragraph>
      A significant number of us utilize social media platforms to share aspects of our daily lives through photos and videos. For personal communication, I see many students using platforms like <strong>WhatsApp and iMessage</strong>. Following are links to students with similar interests in social media and communication:
      </Typography>
      <List>
        {["Khanh Dao", "Romaanchan Skanda", "Harshitha Dhulipala", "Nebiyou Ersabo", "Connor Fergus", "Uma Sarkar", "Sathvik Kote"].map((name) => (
          <ListItem key={name}>
            <ListItemText primary={<Link href={studentPageUrl(name)}>{name}</Link>} />
          </ListItem>
        ))}
      </List>

      <Divider style={{ margin: '24px 0' }} />

      {/* Games */}
      <Typography variant="subtitle1" gutterBottom>
        Games:
      </Typography>
      <Typography variant="body1" paragraph>
      A common interest observed is in multiplayer gaming, with many playing games like <strong>Valorant and Call of Duty.</strong> Following are links to students with similar interests in games:
      </Typography>
      <List>
        {["Yixin Chen", "Romaanchan Skanda", "Gohyun Kim", "Benson Hsu", "Ziqiao Jin", "Nikki Rad", "Yifan Ren"].map((name) => (
          <ListItem key={name}>
            <ListItemText primary={<Link href={studentPageUrl(name)}>{name}</Link>} />
          </ListItem>
        ))}
      </List>

      {/* Visual Divider */}
      <Divider style={{ margin: '24px 0' }} />
      {/* Part 2: Revision of Media Categorization */}
      <Typography variant="h6" style={{ marginTop: 16, marginBottom: 8, color: '#333' }}>
        Part 2: Revision of Media Categorization
      </Typography>
      <Typography variant="body1" paragraph>
        {/* Insert your content for Revision of Media Categorization here */}
        After reviewing my peers websites, I noticed that categorizing media may be done in a variety of ways and is subjective to the user. However, I can see that my classification might be much improved. I would categorize still pictures into consumption and production, including subcategories such as photography, sketching, and digital art.
       I believe that adding platforms for watching movies and listening to music will help to develop a better hierarchy for my classification Also, classify movies and music by genre so that people may better connect to my interests.
      </Typography>

      {/* Additional content, reflections, or conclusions */}
      <Typography variant="body1" paragraph>
      Upon reflection, it is now evident that my previous classification may be much enhanced by adding additional subcategories for simpler browsing of interests and media interactions.
      </Typography>
    </Paper>
  );
}


function ProfilePage() {
  const [pills, setPills] = React.useState("2");

  const videoData = {
    tvShows: [
      { name: "Friends", genre:"Comedy", imageUrl: require("assets/img/friends.jpg") },
      { name: "How I Met Your Mother", genre:"Comedy", imageUrl: require("assets/img/howimetyourmother.jpeg") },
      { name: "Game of Thrones", genre:"Action Drama", imageUrl: require("assets/img/got.png") },
      { name: "Big Bang Theory", genre:"Comedy", imageUrl: require("assets/img/bigbangtheory.jpeg")},
      { name: "That 70's show",genre:"Comedy", imageUrl: require("assets/img/that70sshow.jpeg")},
      { name: "Peaky Blinders",genre:"Action Drama", imageUrl: require("assets/img/peakyblinders.jpeg") },
      // ... other shows
    ],
    movies: [
      { name: "Doctor Strange",genre:"Action/Fantasy", imageUrl: require("assets/img/doctorstrange.jpeg") },
      { name: "Perks of Being a Wall Flower", genre: "Romance/Thriller", imageUrl: require("assets/img/perksofbeingwallflower.jpeg") },
      { name: "A Beautiful Mind", genre: "Thriller/Mistery", imageUrl: require("assets/img/abeautifulmind.jpeg") },
      { name: "Inception", genre: "Sci-Fi/Action",imageUrl: require("assets/img/inception.jpeg") },
      { name: "Catch Me If You Can", genre:"Crime/Comedy", imageUrl: require("assets/img/catchmeifyoucan.jpeg") },
      { name: "The Pursuit of Happyness",genre:"Drama/Melodrama", imageUrl: require("assets/img/persuitofhappyness.jpeg") },
      // ... other movies
    ],
    // ... other categories if needed
  };

  const playlists = [
    {
      name: "Workout Hits",
      description: "Energetic hits to keep you motivated",
      // You can include an array of music item IDs or objects if needed
    },
    {
      name: "Chill Vibes",
      description: "Relaxing tunes for a laid-back atmosphere",
    },
    {
      name: "Party Mix",
      description: "Upbeat songs perfect for any party",
    },
    {
      name: "Jazz Classics",
      description: "Iconic tracks from the best in Jazz",
    },
    {
      name: "Top 40",
      description: "The hottest tracks right now",
    },
    // ... more playlists
  ];

  const musics = [
    {
      id: "1",
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      albumCover: "watermelonsugar.png",
      audioFile: "watermelonsugar.mp3",
      genre: "Pop" // Example genre
    },
    {
      id: "2",
      title: "Blinding Lights",
      artist: "The Weeknd",
      albumCover: "blindinglights.jpeg",
      audioFile: "blindinglights.mp3",
      genre: "Synth-Pop" // Example genre
    },
    {
      id: "3",
      title: "Circles",
      artist: "Post Malone",
      albumCover: "circles.jpeg",
      audioFile: "circles.mp3",
      genre: "Pop" // Example genre
    },
    {
      id: "4",
      title: "Night Changes",
      artist: "One Direction",
      albumCover: "nightchanges.png",
      audioFile: "nightchanges.mp3",
      genre: "Pop" // Example genre
    },
    {
      id: "5",
      title: "Yellow",
      artist: "Coldplay",
      albumCover: "yellow.png",
      audioFile: "yellow.mp3",
      genre: "Alternative Rock" // Example genre
    }
];

  
  
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div id="home" className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <UncontrolledTooltip delay={0} target="linkedintooltip">
                Connect on LinkedIn
              </UncontrolledTooltip>
            <div className="button-container">
              <Button id="linkedintooltip" className="btn-round" color="info" size="lg" href="https://www.linkedin.com/in/shreyasskasetty/">
                Connect
              </Button>
              <Button
                href = "https://github.com/shreyasskasetty"
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Github Profile
              </UncontrolledTooltip>
              <Button
                href="https://www.instagram.com/kasetty.shreyas/"
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <div id="about">
            <h3 className="title">Course Motivation</h3>
            <h5 className="description">
            I enrolled in the Computers and New media course due to my strong interest in Human-Computer interaction and interface design. My goal is to blend aesthetics with functionality to improve user experiences. 
            This course is a perfect opportunity for me to study how new media technolgies can enhance these interactions. I plan to leverage what I learn here to address a current challenge in media interaction, aiming to create more impactful 
            and immersive user experiences. I'm excited to dive into this innovative field and contribute new ideas.
            </h5>
            </div>
            <Row>
              <Col id="homework1" className="ml-auto mr-auto" md="12">
                <h4  className="title text-center">My Multi-Media Interactions</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <UncontrolledTooltip delay={0} target="image1234">
                      Image
                    </UncontrolledTooltip>
                    <NavItem>
                      <NavLink
                        id = "image1234"
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <UncontrolledTooltip delay={0} target="video1234">
                      Video
                    </UncontrolledTooltip>
                    <NavItem>
                      <NavLink
                        id = "video1234"
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons media-1_button-play"></i>
                      </NavLink>
                    </NavItem>
                    <UncontrolledTooltip delay={0} target="text1234">
                      Social Media and Communication
                    </UncontrolledTooltip>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        id = "text1234"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons users_single-02"></i>
                      </NavLink>
                    </NavItem>
                    <UncontrolledTooltip delay={0} target="sound1234">
                      Sound
                    </UncontrolledTooltip>
                    <NavItem>
                      <NavLink
                        id ="sound1234"
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <i className="now-ui-icons media-2_note-03"></i>
                      </NavLink>
                    </NavItem>
                    <UncontrolledTooltip delay={0} target="sports1234">
                      Sports and Games
                    </UncontrolledTooltip>
                    <NavItem>
                      <NavLink
                        id ="sports1234"
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <TabContent className="gallery" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <Col className="ml-auto mr-auto" md="12">
                        <Row className="justify-content-center">
                          <Col md="6">
                              <ImagePane />
                          </Col>
                        </Row>
                      </Col>
                    </TabPane>
                    <TabPane tabId="pills2">
                    <Row className="justify-content-center">
                      <Col md="6" >
                          <VideoPane category="TV Shows" items={videoData.tvShows} />
                          <VideoPane category="Movies" items={videoData.movies} />
                      </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <Col className="ml-auto mr-auto" md="6">
                        <Row className="justify-content-center">
                          <Col md="6">
                              <SocialMediaPane />
                          </Col>
                        </Row>
                      </Col>
                    </TabPane>
                    <TabPane tabId="pills4">
                        <Row className="justify-content-center">
                            <Col md="6" >
                              <MusicPane playlists = {playlists} musics={musics}/>
                            </Col>
                          </Row>
                    </TabPane>
                    <TabPane tabId="pills5">
                        <Row className="justify-content-center">
                            <Col md="6" >
                              <SportsPane />
                            </Col>
                          </Row>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <ChallengesSection />
                </Col>
              </Row>
              <Row>
                <Col id="homework2" className="ml-auto mr-auto" md="12">
                  <AssignmentSection />
                </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}


export default ProfilePage;
