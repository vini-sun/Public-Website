import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Canvas from "../canvas/Canvas";

import Animation from "../canvas/Animation";

import Footer from "../tools/Footer";

import ThemeCard from "./ThemeCard";

class HomePage extends React.Component {
  state = { redirect: false };

  handleSignUpClick = () => {};

  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/projects" />;
    }

    return (
      <div>
        <Container style={{ height: "100%", paddingBottom: "60px" }} />
        <div className="title"> About </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
