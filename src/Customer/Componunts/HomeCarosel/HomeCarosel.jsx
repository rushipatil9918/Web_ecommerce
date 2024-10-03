import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg" alt="Image 1" />,
  <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg" alt="Image 2" />,
  <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg" alt="Image 3" />,
  <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg" alt="Image 4" />,
  <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg" alt="Image 5" />,
];

const HomeCarosel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);
export default HomeCarosel;