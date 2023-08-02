import { createPortal } from "react-dom";
import { Box, Stack, Typography, Container } from "@mui/material";
import FooterLink from "./FooterLink";
import logo from "../assets/logo.svg";
import FacebookIcon from "../assets/facebook-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";
import WhatsappIcon from "../assets/whatsapp-icon.svg";
import YoutubeIcon from "../assets/youtube-icon.svg";

function Footer() {
  let icons = [
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
    YoutubeIcon,
  ];
  let clients = ["IBM", "Intel", "Apple"];
  let sitePages = ["Home", "About us", "Contact us"];
  let support = ["Terms & Conditions", "Privacy Policy"];
  let renderedIcons = icons.map((icon, index) => (
    <img
      src={icon}
      alt="socialmedia icon"
      key={index}
      height="15px"
      width="15px"
    />
  ));
  let renderedLinks = sitePages.map((link, index) => {
    return (
      <FooterLink selected={link === "Home"} key={index}>
        {link}
      </FooterLink>
    );
  });
  let renderedClients = clients.map((client, index) => (
    <Typography variant="footerItem" key={index}>
      {client}
    </Typography>
  ));
  let renderedSupport = support.map((item, index) => (
    <FooterLink key={index}>{item}</FooterLink>
  ));

  return createPortal(
    <Stack position="absolute" width="100%" bottom={0}>
      <Stack
        width="100%"
        direction="row"
        spacing="175px"
        flexWrap="wrap"
        padding="40px"
        sx={{ backgroundColor: "white" }}
      >
        <Box>
          <img src={logo} alt="logo" style={{ marginBottom: "25px" }} />
          <Typography variant="body1" marginBottom="10px">
            Discover the fastest, most effective
            <br />
            way to build your skills with
            <br />
            courses,
            <br />
            certificates, and degrees.
            <br />
            Get started with us.
          </Typography>
          <Stack spacing="20px" direction="row">
            {renderedIcons}
          </Stack>
        </Box>
        <Stack flexWrap="wrap" alignItems="start" spacing="10px">
          <Typography variant="footerTitle" marginBottom="10px">
            Sitemap
          </Typography>
          {renderedLinks}
        </Stack>
        <Stack
          alignContent="start"
          flexWrap="wrap"
          alignItems="start"
          spacing="10px"
        >
          <Typography variant="footerTitle" marginBottom="10px">
            Our Clients
          </Typography>
          {renderedClients}
        </Stack>
        <Stack
          alignContent="start"
          flexWrap="wrap"
          alignItems="start"
          spacing="10px"
        >
          <Typography variant="footerTitle" marginBottom="10px">
            Support
          </Typography>
          {renderedSupport}
        </Stack>
      </Stack>
      <Container color="#cfcfc2" width="100%" sx={{ padding: "25px 25px" }}>
        <Typography textAlign="center" fontWeight={600} fontSize="14px">
          Designed and developed at inova LLC
        </Typography>
      </Container>
    </Stack>,
    document.getElementById("footer-div")
  );
}

export default Footer;
