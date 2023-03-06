import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Cards from "../card/Cards";

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [arr, setArr] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setArr(data)
            })

    }, [])


    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
                {arr.map(arr => <Cards item={arr}/>)}
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
};

export default SimpleSlider;