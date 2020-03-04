import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carousel extends Component {
  state = {}

  render(){
    return(
      <CarouselProvider className="carousel-to-move"
        naturalSlideWidth={200}
        naturalSlideHeight={60}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider className="slider-black-wrapper">
          <Slide index={0} className="carousel-image-bg-one">
            <div className="slide-text-div">
              <h2 className="slide-title">eco friendly packaging</h2>
              <p className="slide-paragraph">We stock a range of biodegradable packaging and our pulp based products are sourced from sustainable forests. Each product is rated on its impact on the environment.</p>
            </div>
          </Slide>
          <Slide index={1} className="carousel-image-bg-two">
            <div className="slide-text-div">
              <h2 className="slide-title">food packaging made easy</h2>
              <p className="slide-paragraph">Want to take the hassle out of ordering packaging for your restaurant? We’ve selected the best packaging to make that choice easy for you.</p>
            </div>
          </Slide>
          <Slide index={2} className="carousel-image-bg-three">
            <div className="slide-text-div">
              <h2 className="slide-title">hassle-free, stress-free</h2>
              <p className="slide-paragraph">We'll deliver within 48 hours – and orders over £100 are free.</p>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    )
  }

}

// eco friendly packaging
// We stock a range of biodegradable packaging and our pulp based products are sourced from sustainable forests. Each product is rated on its impact on the environment.
