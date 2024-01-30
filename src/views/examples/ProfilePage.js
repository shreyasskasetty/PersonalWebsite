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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ImagePane from "../../components/MediaTabs/ImagePane";
import VideoPane from "../../components/MediaTabs/VideoPane";
import MusicPane from "components/MediaTabs/MusicPane";
import SocialMediaPane from "components/MediaTabs/SocialMediaPane";
function ProfilePage() {
  const [pills, setPills] = React.useState("2");

  const videoData = {
    tvShows: [
      { name: "Friends", imageUrl: require("assets/img/friends.jpg") },
      { name: "How I Met Your Mother", imageUrl: require("assets/img/howimetyourmother.jpeg") },
      { name: "Game of Thrones", imageUrl: require("assets/img/got.png") },
      // ... other shows
    ],
    movies: [
      { name: "Doctor Strange", imageUrl: require("assets/img/doctorstrange.jpeg") },
      { name: "Perks of Being a Wall Flower", imageUrl: require("assets/img/perksofbeingwallflower.jpeg") },
      { name: "A Beautiful Mind", imageUrl: require("assets/img/abeautifulmind.jpeg") },
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
      audioFile: "watermelonsugar.mp3"
    },
    
    {
      id: "2",
      title: "Blinding Lights",
      artist: "The Weeknd",
      albumCover: "blindinglights.jpeg",
      audioFile: "blindinglights.mp3"
    },
    {
      id: "3",
      title: "Cirlces",
      artist: "Post Malone",
      albumCover: "circles.jpeg",
      audioFile: "circles.mp3"
    },
    {
      id: "4",
      title: "Night Changes",
      artist: "One Direction",
      albumCover: "nightchanges.png",
      audioFile: "nightchanges.mp3"
    },
    {
      id: "5",
      title: "Yellow",
      artist: "Cold Play",
      albumCover: "yellow.png",
      audioFile: "yellow.mp3"
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
              <Col id="mymedia" className="ml-auto mr-auto" md="6">
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
                      Text
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
                        <i className="now-ui-icons text_caps-small"></i>
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
                  </TabContent>
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
