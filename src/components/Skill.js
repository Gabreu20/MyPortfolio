import colorSharp from "../assets/img/color-sharp.png"

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Bellow you will find my self-evalueted skill levels.</p>
                            <h5 style={{marginTop: 60, marginBottom: 40, paddingBottom: 20, borderBottom: '1px solid white'}}>Programming Languages</h5>
                            <div className="item">
                                <h5>C++</h5>
                                <Slider size="small" disabled defaultValue={80} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>C#</h5>
                                <Slider size="small" disabled defaultValue={75} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>C</h5>
                                <Slider size="small" disabled defaultValue={70} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>JavaScript</h5>
                                <Slider size="small" disabled defaultValue={65} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Java</h5>
                                <Slider size="small" disabled defaultValue={65} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>HTML</h5>
                                <Slider size="small" disabled defaultValue={60} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>CSS</h5>
                                <Slider size="small" disabled defaultValue={60} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Haskel</h5>
                                <Slider size="small" disabled defaultValue={50} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Racket</h5>
                                <Slider size="small" disabled defaultValue={50} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>


                            <h5 style={{marginTop: 60, marginBottom: 40, paddingBottom: 20, borderBottom: '1px solid white'}} >Tools</h5>
                            <div className="item">
                                <h5>Visual Studio Code</h5>
                                <Slider size="small" disabled defaultValue={80} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Visual Studio</h5>
                                <Slider size="small" disabled defaultValue={80} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Git</h5>
                                <Slider size="small" disabled defaultValue={80} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Unity Engine</h5>
                                <Slider size="small" disabled defaultValue={80} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>VEGAS</h5>
                                <Slider size="small" disabled defaultValue={60} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>Photoshop</h5>
                                <Slider size="small" disabled defaultValue={60} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>


                            <h5 style={{marginTop: 60, marginBottom: 40, paddingBottom: 20, borderBottom: '1px solid white'}} >Languages</h5>
                            <div className="item">
                                <h5>Portuguese</h5>
                                <Slider size="small" disabled defaultValue={95} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                            <div className="item">
                                <h5>English</h5>
                                <Slider size="small" disabled defaultValue={80} aria-label="Disabled" getAriaValueText={valuetext} valueLabelDisplay="on"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}