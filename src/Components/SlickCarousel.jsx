import Slider from "react-slick";
import { newWatches } from "../Data/data";
import WatchCard from "./WatchCard";

const Fade = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false
  };

  return (
      <Slider {...settings}>
        {newWatches.map((item) => {
            return (
                <div id='newCard'>
                    <WatchCard image={item.Image} price={item.price} name={item.name} newW={true} id={item.id} />
                </div>
            );
        })}
      </Slider>
  );
}

export default Fade;