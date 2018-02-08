import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftHand from 'react-icons/lib/fa/hand-o-left';
import RightHand from 'react-icons/lib/fa/hand-o-right';
import CarouselBase from 'nuka-carousel';
import Image from 'react-image-resizer';

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

const getIconSize = (carouselSize) => {
  switch (carouselSize) {
    case 'small':
      return 20;
    case 'medium':
    default:
      return 30;
    case 'large':
      return 30;
  }
};

const getIconPadding = (carouselSize) => {
  switch (carouselSize) {
    case 'small':
      return 0;
    case 'medium':
    default:
      return 0;
    case 'large':
      return 15;
  }
};

class Carousel extends Component {

  render() {
    const { pictures, carouselInterval, size } = this.props;
    const iconSize = getIconSize(size);
    const arrowPadding = getIconPadding(size);
    const Decorators = [{
      component: () => ({
        render() {
          return (
            <button
              onClick={this.props.previousSlide}
            >
              <LeftHand size={iconSize} />
            </button>
          );
        },
      }),
      position: 'CenterLeft',
      style: {
        padding: arrowPadding,
        // opacity: 0.5,
      },
    },
    {
      component: () => ({
        render() {
          return (
            <button
              onClick={this.props.nextSlide}
            >
              <RightHand size={iconSize} />
            </button>
          );
        },
      }),
      position: 'CenterRight',
      style: {
        padding: arrowPadding,
        // opacity: 0.5,
      },
    },
    ];
    const { height, width } = sizes[size];
    return (
      <CarouselBase 
      autoplay 
      wrapAround 
      easing="easeInOutSine"
      edgeEasing="easeInOutSine"
      initialSlideHeight={height}
      initialSlideWidth={width}
      autoplayInterval={carouselInterval} decorators={Decorators} >
        {pictures.map(img =>
        (
          <div key={`image${img}`}>
            <img src={img} height={height} width={width} />
            {/* <Image
              src={img}
              alt="project image"
              width={width-20}
              height={height}
            /> */}
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
  nextSlide: PropTypes.func,
};

Carousel.defaultProps = {
  carouselInterval: 5000,
  size: 'medium',
  previousSlide: () => {}, // Comes from base component (CarouselBase)
  nextSlide: () => {}, // Comes from base component (CarouselBase)
};

export default Carousel;
