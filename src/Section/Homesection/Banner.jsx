import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel >
                <div className="">
                    <img src='https://media.istockphoto.com/id/1865408979/photo/european-senior-businessman-in-suit-holds-glass-bottle-with-microworld-plant-in-office.jpg?s=2048x2048&w=is&k=20&c=X25POvwd29Ymj5ga7C3IlS0TIvB5_4CMPbK2zrMI47I=' />
                   
                </div>
                <div>
                    <img className="" src='https://media.istockphoto.com/id/2116652758/photo/ladys-hair-moss-with-ice-crystals.jpg?s=2048x2048&w=is&k=20&c=3truwYhLkKLG7DnTQH6feC2pJ3jw8SehYz4zh5c1xTY=' />
                   
                </div>
                <div className="relative">
                    <img src='https://media.istockphoto.com/id/2116652758/photo/ladys-hair-moss-with-ice-crystals.jpg?s=2048x2048&w=is&k=20&c=3truwYhLkKLG7DnTQH6feC2pJ3jw8SehYz4zh5c1xTY=' /> 
                    <p className="absolute top-11 left-10 text-white text-6xl" >invest your time </p>
                 
                </div>
                
            </Carousel>
    );
};

export default Banner;