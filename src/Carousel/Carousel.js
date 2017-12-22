import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselBase from 'nuka-carousel';
import './Carousel.css';

const cursor = {
  show: true,
  blink: true,
  element: '🀆',
  hideWhenDone: true,
  hideWhenDoneDelay: 3000,
};

const sizes = {
  small: { height: 222, width: 440 },
  medium: { height: 422, width: 640 },
  large: { height: 622, width: 840 },
};

class Carousel extends Component {

  render() {
    const Decorators = [{
      component: () => ({
        render() {
          return (
            <button
              onClick={this.props.previousSlide}
            >
              Previous
            </button>
          );
        },
      }),
      position: 'CenterLeft',
      style: {
        padding: 0,
        opacity: 0.5,
      },
    },
    {
      component: () => ({
        render() {
          return (
            <button
              onClick={this.props.nextSlide}
            >
              Next Slide
            </button>
          );
        },
      }),
      position: 'CenterRight',
      style: {
        padding: 0,
        opacity: 0.5,
      },
    },
    ];
    const { pictures, carouselInterval, size } = this.props;
    const { height, width } = sizes[size];
    return (
      <CarouselBase autoplay wrapAround autoplayInterval={carouselInterval} decorators={Decorators} >
        {pictures.map(img =>
        (
          <div key={`image${img}`}>
            <img src={img} height={height} width={width} />
          </div>
        ),
      )}
      </CarouselBase>
    );
  }
}

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
  carouselInterval: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  previousSlide: PropTypes.func,
};

Carousel.defaultProps = {
  carouselInterval: 5000,
  size: 'medium',
  previousSlide: () => {}, // Comes from base component (CarouselBase)
};

export default Carousel;
