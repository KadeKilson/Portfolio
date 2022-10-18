import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
      {
        title: "Calesthenics",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ];
  
    return (
      <section className="project" id="project">
        <Container>
          <Row>
             <Col>
             <h2>Projects</h2>
             <p>If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be. Hard work is worthless for those that don’t believe in themselves.</p>
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
             <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>We are humans, not fish. We don’t know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. That’s what death is, don’t you think?</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>A real ninja is one who endures no matter what gets thrown at him… Let me explain something to you, there is only one thing that matters if you are a shinobi, and it isn’t the number of Jutsu you possess. All you do need is the guts to never give up.</p>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>  
             </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }