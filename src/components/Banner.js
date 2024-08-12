import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg';

export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my Portfolio</span>
                        <h1>{"I'm Gabriel Soares"}</h1>
                        <p>An enthusiastic programmer who finds great joy and satisfaction in the process of creating immersive experiences.</p>
                        <button onClick={() => console.log('connect')}>Let's connect (Under Development) <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}