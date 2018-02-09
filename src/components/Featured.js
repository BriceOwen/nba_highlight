import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    pauseOnHover: true
}

const generateSlides = ({slides}) => {
    if (slides) {
        return (
            <Slider {...settings}>
                {slides.map(item => {
                    return (
                        <div
                            key={item.id}
                            className="item-slider"
                            style={{
                            background: `url(/images/covers/${item.cover})`
                        }}>
                            <div className="caption">
                                <h4>{item.topic}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const Featured = (props) => {
    console.log(props)
    return (
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;