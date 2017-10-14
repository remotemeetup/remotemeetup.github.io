import React, { Component } from "react";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Card from "grommet/components/Card";
import Footer from "grommet/components/Footer";
import Heading from "grommet/components/Heading";
import Headline from "grommet/components/Headline";
import Hero from "grommet/components/Hero";
import Paragraph from "grommet/components/Paragraph";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import LinkNextIcon from "grommet/components/icons/base/LinkNext";

export default class Index extends Component {
  render() {
    const blogPostLinkData = [
      {
        href:
          "https://medium.com/remote-meetup/why-we-need-remote-meetups-45f835658876#.90ucn2t6q",
        text: "Why we need Remote Meetup"
      },
      {
        href:
          "https://medium.com/remote-meetup/remotemeetup-com-27889b2510e7#.n6jsuzh6k",
        text: "Launching RemoteMeetup.com"
      },
      {
        href:
          "https://medium.com/remote-meetup/go-remote-meetup-thanks-gobridge-22aa4f22d7a2#.mjn3bwq1t",
        text: "Go Remote Meetup - Thanks, GoBridge!"
      },
      {
        href:
          "https://medium.com/remote-meetup/scaling-remotemeetup-thanks-hired-com-b46ded1a2306#.m8q6nddhr",
        text: "Scaling RemoteMeetup - Thanks, Hired.com!"
      },
      {
        href:
          "https://medium.com/remote-meetup/dailydrip-and-elm-remote-meetups-ab3c5710cd4f#.ql3diatin",
        text: "DailyDrip and Elm Remote Meetups!"
      }
    ];

    const blogPostLinks = blogPostLinkData.map(post => (
      <Anchor
        icon={<LinkNextIcon size="xsmall" />}
        alignContent="center"
        href={post.href}
      >
        {post.text}
      </Anchor>
    ));

    return (
      <Box>
        <Header />
        <Box pad="large">
          <Headline>
            Remote meetups, screencasts, interviews, and lightning talks.
          </Headline>
          <Anchor href="#" primary={true} label="Learn More" />
        </Box>

        <Box align="center">
          <Box
            pad="large"
            align="center"
            textAlign="center"
            size={{ width: { max: "xxlarge" } }}
          >
            <Heading tag="h1" strong={true} margin="none">
              Who we are
            </Heading>
            <Paragraph size="large" width="large">
              We are a remote community of developers aiming to improve
              technical skills everyday.
            </Paragraph>
            <Paragraph size="large" width="large">
              Technology is our passion. We believe that the more you share, the
              more you learn. We can break geographic limits and use tools to
              share our passion with the whole world.
            </Paragraph>

            <Menu size="medium" inline={true} direction="column">
              {blogPostLinks}
            </Menu>
          </Box>
        </Box>
        <Footer full="horizontal">
          <Box
            colorIndex="neutral-1"
            pad="large"
            align="center"
            full="horizontal"
          >
            <Box
              className="footer-cards-container"
              pad={{ vertical: "medium" }}
              size={{ width: "xxlarge" }}
              direction="row"
              flex="grow"
            >
              <Card
                pad={{ horizontal: "large" }}
                contentPad="medium"
                heading="Lorem ipsum dolor sit amet"
                label="Label"
                basis="1/2"
                link={
                  <Anchor href="http://www.grommet.io/docs/" primary={true}>
                    Learn More
                  </Anchor>
                }
                separator="right"
              />
              <Card
                pad={{ horizontal: "large" }}
                contentPad="medium"
                heading="Lorem ipsum dolor sit amet"
                label="Label"
                basis="1/2"
                link={
                  <Anchor href="http://www.grommet.io/docs/" primary={true}>
                    Learn More
                  </Anchor>
                }
              />
            </Box>
          </Box>
        </Footer>
      </Box>
    );
  }
}
