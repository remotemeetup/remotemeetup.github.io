import React from "react";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Menu from "grommet/components/Menu";
import GrommetIcon from "grommet/components/icons/base/BrandGrommetOutline";
import SearchIcon from "grommet/components/icons/base/Search";

export default function AppHeader(props) {
  return (
    <Header justify="center" colorIndex="brand">
      <Box
        size={{ width: { max: "xxlarge" } }}
        direction="row"
        responsive={false}
        justify="start"
        align="center"
        pad={{ horizontal: "medium" }}
        flex="grow"
      >
        <Heading>Remote Meetup</Heading>
        <Box flex="grow" />
        <Menu label="Label" inline={true} direction="row">
          <Anchor href="#">Home</Anchor>
          <Anchor href="#who">Who we are</Anchor>
          <Anchor href="#">Talks</Anchor>
          <Anchor href="#">Join us</Anchor>
        </Menu>
      </Box>
    </Header>
  );
}
