import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel,
  Accordion,
  Collapse
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";
import withWindowDimensions from "./withWindowDimensions";

import Details from "./Details";
import Person from "./Person";
import PeopleRow from "./PeopleRow";

// DS = data science
// CRM = client management
// PS = implementation

const CRM = [
  {
    name: "Shuyi	Fan",
    school: "Fuqua School of Business",
    study: "QMS",
    team: "CRM",
    email: "shuyi.fan@duke.edu",
    linkedin: "https://www.linkedin.com/in/shuyi-fan-976393110/",
    img: "Fan.jpg"
  },
  {
    name: "Mary	Gooneratne",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "CRM",
    email: "mary.gooneratne@duke.edu",
    linkedin: "https://www.linkedin.com/in/marygooneratne/",
    img: "Gooteratne.jpg",
    github: "https://github.com/marygooneratne/"
  },
  {
    name: "Ben	Levy",
    school: "Fuqua School of Business",
    study: "MBA",
    team: "CRM",
    email: "ben.levy@duke.edu",
    linkedin: "https://www.linkedin.com/in/ben-levy1/",
    img: "Levy.jpg"
  },
  {
    name: "Luke	Truitt",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "CRM",
    email: "luke.truitt@duke.edu",
    linkedin: "https://www.linkedin.com/in/luke-truitt/",
    github: "https://github.com/luke-truitt/"
  },
  {
    name: "Bree Wang",
    school: "Fuqua School of Business",
    study: "QMS",
    team: "CRM",
    email: "bree.wang@duke.edu",
    linkedin: "https://www.linkedin.com/in/bree-jiaying-wang-25421b59/",
    img: "Wang.jpg"
  },
  {
    name: "Rachel	Williamson",
    school: "Fuqua School of Business",
    study: "QMS",
    team: "CRM",
    email: "rachel.williamson@duke.edu",
    linkedin: "https://www.linkedin.com/in/rachel-williamson-8ab8a9125/",
    img: "Williamson.jpg"
  },
];

// Compose array of person objects with necessary info
const DS = [
  {
    name: "Tima	Alqabandi",
    school: "Ph.D.",
    study: "Sociology",
    team: "VR Sickness",
    email: "fa83@duke.edu",
    linkedin: "https://www.linkedin.com/in/rachel-williamson-8ab8a9125/",
    img: "Alqabandi.jpg"
  },
  {
    name: "Alina Barnett", 
    school: "Ph.D.",
    study: "Computer Science",
    team: "VR Sickness",
    email: "alina.barnett@duke.edu",
    linkedin: "https://www.linkedin.com/in/alina-jade-barnett-ab703582/",
    img: "Barnett.jpg"
  },
  {
    name: "Suchir Bhatt",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Restaurant",
    email: "suchir.bhatt@duke.edu",
    img: "",
  },
  {
    name: "Olivier Binette",
    school: "Ph.D.",
    study: "Statistics",
    team: "Visualization",
    email: "olivier.binette@duke.edu",
    linkedin: "https://www.linkedin.com/in/olivier-binette/",
    img: "Binette.jpg"
  },
  {
    name: "Jia Rong	Chua",
    school: "Masters",
    study: "Economics",
    team: "Fidget",
    email: "jiarong.chua@duke.edu",
    linkedin: "https://www.linkedin.com/in/jiarongchua/",
    img: "Chua.jpg"
  },
  {
    name: "Ram Gallopudy",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "Human Connectome",
    email: "ram.gallopudy@duke.edu",
    linkedin: "https://www.linkedin.com/in/ram-gollapudy-08a334aa/",
    img: "",
  },
  {
    name: "Niko Hobart",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "Restaurant",
    email: "niko.hobart@duke.edu",
    linkedin: "https://www.linkedin.com/in/niko-hobart-562826195/",
    img: "",
  },
  {
    name: "Himanshu Jain",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "Fidget",
    email: "ryan.middlemiss@duke.edu",
    linkedin: "https://www.linkedin.com/in/ryan-middlemiss-732541192/",
    img: "Middlemiss.png",
    github: "https://github.com/ryanmiddlemiss/"
  },
  {
    name: "Jaiveer Katariya",
    school: "Undergraduate",
    study: "Computer Science, Statistics",
    team: "Fidget",
    email: "jaiveer.katariya@duke.edu",
    linkedin: "https://www.linkedin.com/in/jaiveer-katariya-900865166/",
    img: "Katariya.png",
    github: "https://github.com/jaiveerk/"
  },
  {
    name: "Phoebe	Klett",
    school: "Undergraduate",
    study: "Mathematics",
    team: "Fidget",
    email: "phoebe.klett@duke.edu",
    linkedin: "https://www.linkedin.com/in/phoebe-klett-644009134/",
    img: "Klett.jpg"
  },
  {
    name: "Varun Nair",
    school: "Undergraduate",
    study: "CS, Math",
    team: "Human Connectome",
    email: "varun.nair.1@duke.edu",
    linkedin: "https://www.linkedin.com/in/varunnair18/",
    img: "Nair.jpg",
    github: "https://github.com/varunnair18/"
  },
  {
    name: "Daniel	Tao",
    school: "Undergraduate",
    study: "Computer Science",
    team: "VR Sickness",
    email: "chaofan.tao@duke.edu",
    linkedin: "https://www.linkedin.com/in/chaofan-daniel-tao/",
    github: "https://github.com/danieltao/",
    img: "Tao.jpg"
  },
  {
    name: "Anna	Yanchencko",
    school: "Ph.D.",
    study: "Statistics",
    team: "Timeseries",
    email: "anna.yanchenko@duke.edu",
    linkedin: "https://www.linkedin.com/in/anna-yanchenko/",
    github: "https://github.com/aky4wn/",
    img: "Yanchencko.jpg"
  },
  {
    name: "Hang	Yang",
    school: "Ph.D.",
    study: "Mathematics",
    team: "Hman Connectome",
    email: "hang.yang@duke.edu",
    linkedin: "https://www.linkedin.com/in/hang-yang/",
    img: "Yang.jpg"
  },
  
];

const PS = [
  {
    name: "Yasa	Baig",
    school: "Undergraduate",
    study: "Physics, Computer Science",
    team: "Software",
    email: "yasa.baig@duke.edu",
    linkedin: "https://www.linkedin.com/in/yasab/",
    img: "Baig.jpg",
    github: "https://github.com/yasab27/"
  },
  {
    name: "Anabella Buckvar",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "anabella.buckvar@duke.edu",
    linkedin: "https://www.linkedin.com/in/anabella-buckvar-818614162/",
    img: "",
    github: "https://github.com/anabellab/"
  },
  {
    name: "Madeline Cuozzo",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "madeline.cuozzo@duke.edu",
    linkedin: "https://www.linkedin.com/in/madeline-cuozzo/",
    img: "Cuozzo.jpg",
    github: "https://github.com/mcuozzo19/"
  },
  {
    name: "Wyatt Focht",
    school: "Undergraduate",
    study: "Computer Science, Electrical and Computer Engineering",
    team: "Software",
    email: "wyatt.focht@duke.edu",
    linkedin: "https://www.linkedin.com/in/wyattfocht/",
    img: "Focht.jpg",
    github: "https://github.com/wyattgf/"
  },
  {
    name: "Sauren Gupta",
    school: "Undergraduate",
    study: "Computer Science, Economics",
    team: "Software",
    email: "sauren.gupta@duke.edu",
    linkedin: "https://www.linkedin.com/in/sauren-g/",
    img: "Gupta.jpg",
    github: "https://github.com/sauren5842/"
  },
  {
    name: "Russell Llave",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "russell.llave@duke.edu",
    linkedin: "https://www.linkedin.com/in/russell-llave-999236102/",
    img: "",
    github: "https://github.com/russellave/"
  },
  {
    name: "Raj Mehta",
    school: "Undergraduate",
    study: "Neuroscience, Computer Science",
    team: "Hardware",
    email: "rm359@duke.edu",
    linkedin: "https://www.linkedin.com/in/rmehta010/",
    img: "",
    github: "https://github.com/rmehta010/"
  },
  {
    name: "Ryan	Middlemiss",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "Software",
    email: "ryan.middlemiss@duke.edu",
    linkedin: "https://www.linkedin.com/in/ryan-middlemiss-732541192/",
    img: "Middlemiss.png",
    github: "https://github.com/ryanmiddlemiss/"
  },
  {
    name: "Nicole	Moiseyev",
    school: "Undergraduate",
    study: "Neuroscience, Computer Science",
    team: "Software",
    email: "nicole.moiseyev@duke.edu",
    linkedin: "https://www.linkedin.com/in/nicole-m-184123b4/",
    img: "Moiseyev.jpg",
    github: "https://github.com/nicolemoiseyev/"
  },
  {
    name: "Luiza Wolf",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "Hardware",
    email: "luiza.wolf@duke.edu",
    linkedin: "https://www.linkedin.com/in/luiza-wolf/",
    img: "Moiseyev.jpg",
    github: "https://github.com/luizaawwolf/"
  },
  {
    name: "Christine Yoon",
    school: "Undergraduate",
    study: "Computer Science",
    team: "Software",
    email: "christine.yoon@duke.edu",
    linkedin: "https://www.linkedin.com/in/christineyoon1/",
    img: "Yoon.jpg",
    github: "https://github.com/cyoon23/"
  },
  {
    name: "Cady Zhou",
    school: "Undergraduate",
    study: "Computer Science, Electrical and Computer Engineering",
    team: "Hardware",
    email: "cady.zhou@duke.edu",
    linkedin: "https://www.linkedin.com/in/cadyzhou/",
    img: "Zhou.jpg",
    github: "https://github.com/candyzq/"
  },
];

const peopleInfo = [CRM, DS, PS];

class PeoplePage extends React.Component {
  state = { redirect: false, details: {}, collapse: false };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  makePeopleGrid(people, window) {
    // determine number of people per row based on bootstrap screen breakpoints
    let cols;
    if (window >= 992) {
      // lg or xl; 4 people per row
      cols = 4;
    } else if (window >= 768) {
      // m; 4 people per row
      cols = 3;
    } else if (window >= 576) {
      // xs; 2 people per row
      cols = 2;
    } else {
      //xs; 1 person per row
      cols = 1;
    }
    
    console.log("Cols: ", cols);
    console.log(people.length);

    const numRows = Math.ceil(people.length / cols);
    console.log("rows: ", numRows);

    let rowArrays = [];
    // make each row, add details section below

    for (let i = 0; i < numRows * cols; i += cols) {
      rowArrays[i] = people.slice(i, i + cols);
    }

    let result = rowArrays.map((row, index) => (
      <PeopleRow people={row} key={index} />
    ));

    return result;
  }

  render() {
    let CRMgrid = this.makePeopleGrid(CRM, this.props.windowWidth);
    let DSgrid = this.makePeopleGrid(DS, this.props.windowWidth);
    let PSgrid = this.makePeopleGrid(PS, this.props.windowWidth);

    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around people grid
    if (window >= 992) {
      // lg or xl
      padding = 20;
    } else if (window >= 768) {
      // m
      padding = 5;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 5;
    }

    // center titles on mobile

    let DStitle, PStitle, CRMtitle;

    if (window <= 576) {
      DStitle = <center> Data Science Team </center>;
      PStitle = <center> Implementation Team </center>;
      CRMtitle = <center> Business Team </center>;
    } else {
      DStitle = "Data Science Team";
      PStitle = "Implementation Team";
      CRMtitle = "Business Team";
    }

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <div className="title" style={{ padding: "0 0 1rem 0" }}>
            <center>Our Members</center>
          </div>

          <div className="team" style={{ padding: `1rem ${padding}%` }}>
            {DStitle}
            <hr />
          </div>
          <center>{DSgrid}</center>
          <div className="team" style={{ padding: `1rem ${padding}%` }}>
            {PStitle}
            <hr />
          </div>
          <center>{PSgrid}</center>

          <div className="team" style={{ padding: `1rem ${padding}%` }}>
            {CRMtitle}
            <hr />
          </div>
          <center>{CRMgrid}</center>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(PeoplePage);
