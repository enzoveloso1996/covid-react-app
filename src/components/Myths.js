import React from 'react'
import { Carousel } from 'react-bootstrap'

//styles
import '../styles/Carousel.css'

//assets
import mb1 from '../assets/mb-heat.png'
import mb2 from '../assets/mb-olds.png'
import mb3 from '../assets/mb-masks.png'
import mb4 from '../assets/mb-bacteria-vs-virus.png'
import mb5 from '../assets/mb-masks-and-exercise.png'
import mb6 from '../assets/mb-mosquito-bite.png'
import mb7 from '../assets/mb-shoes.png'
import mb8 from '../assets/mb-any-meds.png'

const Myths = () => {
    return (
        <div className="carousel">
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb5}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb6}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb7}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mb8}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}

export default Myths