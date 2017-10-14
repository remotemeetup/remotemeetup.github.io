import React, { Component } from "react";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";
import Heading from "grommet/components/Heading";
import SocialTwitterIcon from "grommet/components/icons/base/SocialTwitter";
import SocialFacebookIcon from "grommet/components/icons/base/SocialFacebook";
import SocialLinkedinIcon from "grommet/components/icons/base/SocialLinkedin";
import LinkNextIcon from "grommet/components/icons/base/LinkNext";

const grommetPath = "http://grommet.github.io";

export default class NewsFeed extends Component {
  _onClickCard(path, event) {
    event.preventDefault();
    window.location.href = path;
  }

  render() {
    const twitterIconBox = (
      <Box align="end">
        <SocialTwitterIcon />
      </Box>
    );

    const facebookIconBox = (
      <Box align="end">
        <SocialFacebookIcon />
      </Box>
    );

    const linkedinIconBox = (
      <Box align="end">
        <SocialLinkedinIcon />
      </Box>
    );

    const socialFeedCard1 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, "http://www.twitter.com")}
        direction="column"
        label="Social"
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {twitterIconBox}
      </Card>
    );

    const socialFeedCard2 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, "http://www.facebook.com")}
        direction="column"
        label="Social"
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {facebookIconBox}
      </Card>
    );

    const socialFeedCard3 = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, "http://www.linkedin.com")}
        direction="column"
        label="Social"
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {linkedinIconBox}
      </Card>
    );

    const blogPostCard = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        direction="column"
        label="Featured Post"
        link={
          <Anchor
            href={grommetPath}
            label="Learn More"
            icon={<LinkNextIcon />}
          />
        }
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
      </Card>
    );

    const featuredPostCard = (
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="/img/carousel-1.png"
        direction="column"
        label="Featured Post"
        link={
          <Anchor
            href={grommetPath}
            label="Learn More"
            icon={<LinkNextIcon />}
          />
        }
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
      </Card>
    );

    return (
      <Box
        className="columns-container"
        colorIndex="light-2"
        pad={{ horizontal: "large" }}
        full="horizontal"
      >
        <Columns
          size="medium"
          justify="center"
          masonry={true}
          maxCount={3}
          responsive={true}
        >
          {blogPostCard}
          {featuredPostCard}
          {socialFeedCard1}
          {socialFeedCard2}
          {blogPostCard}
          {featuredPostCard}
          {featuredPostCard}
          {socialFeedCard3}
        </Columns>
      </Box>
    );
  }
}
