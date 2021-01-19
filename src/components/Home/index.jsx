import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Grid from "react-md/lib/Grids/Grid";
import Cell from "react-md/lib/Grids/Cell";
import Media from "react-md/lib/Media/Media";
import MediaOverlay from "react-md/lib/Media/MediaOverlay";
import Divider from "react-md/lib/Dividers/Divider";
import UserLinks from "../UserLinks";
import Slider from "../Slider/Slider";
import config from "../../../data/SiteConfig";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="md-grid mobile-fix">
        <Grid className="slider-banner">
          <Cell size={12}>
            <Slider />
          </Cell>
        </Grid>
        <Grid className="title-wrapper">
          <Cell size={12}>
            <img
              src={config.siteLogo}
              className="logo centered"
              alt={config.siteTitle}
            />
          </Cell>
        </Grid>
        <Card className="md-grid md-cell--8">
          <div className="centered">
            <CardText>
              <h2 className="md-headline">Card Headline</h2>
              <Divider />
              <p className="md-body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </CardText>
          </div>
        </Card>
        <Grid className="wrapper">
          <Cell size={1} desktopOrder={0}></Cell>
          <Cell size={4} desktopOrder={1}>
            <Media aspectRatio="4-3">
              <img
                src="https://via.placeholder.com/1600"
                className=""
                alt="Something from unsplash.it"
              />
              <MediaOverlay>
                <CardTitle title="Wow. Amazing." />
              </MediaOverlay>
            </Media>
          </Cell>
          <Cell size={6} desktopOrder={2}>
            <h2 className="md-headline">H2 Headline</h2>
            <Divider />
            <p className="md-body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Cell>
          <Cell size={1} desktopOrder={3}></Cell>
        </Grid>
        <Grid className="wrapper">
          <Cell size={1} desktopOrder={0}></Cell>
          <Cell size={4} desktopOrder={2}>
            <Media aspectRatio="4-3">
              <img
                src="https://via.placeholder.com/1600"
                className=""
                alt="Something from unsplash.it"
              />
              <MediaOverlay>
                <CardTitle title="Wow. Amazing." />
              </MediaOverlay>
            </Media>
          </Cell>
          <Cell size={6} desktopOrder={1}>
            <h2 className="md-headline">H2 Headline</h2>
            <Divider />
            <p className="md-body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Cell>
          <Cell size={1} desktopOrder={3}></Cell>
        </Grid>
        <Card className="md-grid md-cell--8">
          <div className="centered">
            <CardText>
              <h2 className="md-headline">Card Headline</h2>
              <Divider />
              <p className="md-body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
