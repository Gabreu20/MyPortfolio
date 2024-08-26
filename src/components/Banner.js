import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg';

export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <img src={"https://avatars.githubusercontent.com/u/48576715?v=4"} />
                <Row className="align-items-center"> 
                    <span className="tagLine">Welcome to my Portfolio</span>
                    <h1>{"I'm Gabriel Senra"}</h1>
                    <p>An enthusiastic programmer who finds great joy and satisfaction in the process of creating immersive experiences.</p>
                    <button onClick={() => console.log('connect')}>Let's connect (Under Development) <ArrowRightCircle size={25}></ArrowRightCircle> </button>                
                </Row>
            </Container>
        </section>
    )
}