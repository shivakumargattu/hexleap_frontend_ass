import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let data = [
  {
    name: "Las Vegas Aviators",
    imge: "https://media.gettyimages.com/id/542099553/photo/confident-young-male-winner-with-hockey-stick-looking-up-isolated-over-black-background.jpg?s=612x612&w=gi&k=20&c=jQCDxEm8kEG3K23LExGOM8mMQY6gfp_F1ovLwQ7bJuo=",
    date: "Oct 15 | SUN | 4:50 PM",
    state: "Las Vegas Ballpark, Las Vegas Nevada",
    button: "Take Flight Collection"
  },
  {
    name: "Sacrament River Cats",
    imge: "https://media.gettyimages.com/id/542099553/photo/confident-young-male-winner-with-hockey-stick-looking-up-isolated-over-black-background.jpg?s=612x612&w=gi&k=20&c=jQCDxEm8kEG3K23LExGOM8mMQY6gfp_F1ovLwQ7bJuo=",
    date: "Oct 15 | SUN | 4:50 PM",
    state: "Sultan Heath Care, California",
    button: "Orange Collection"
  },
  {
    name: "Las Vegas Aviators",
    imge: "https://media.gettyimages.com/id/542099553/photo/confident-young-male-winner-with-hockey-stick-looking-up-isolated-over-black-background.jpg?s=612x612&w=gi&k=20&c=jQCDxEm8kEG3K23LExGOM8mMQY6gfp_F1ovLwQ7bJuo=",
    date: "Oct 15 | SUN | 4:50 PM",
    state: "Las Vegas Ballpark, Las Vegas Nevada",
    button: "Take Flight Collection"
  },
  {
    name: "Las Vegas Aviators",
    imge: "https://media.gettyimages.com/id/542099553/photo/confident-young-male-winner-with-hockey-stick-looking-up-isolated-over-black-background.jpg?s=612x612&w=gi&k=20&c=jQCDxEm8kEG3K23LExGOM8mMQY6gfp_F1ovLwQ7bJuo=",
    date: "Oct 15 | SUN | 4:50 PM",
    state: "Las Vegas Ballpark, Las Vegas Nevada",
    button: "Take Flight Collection"
  }
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" style={{ backgroundColor: 'orange' }} onClick={onClick}>
      Prev
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" style={{ backgroundColor: 'orange' }} onClick={onClick}>
      Next
    </button>
  );
};

function TestimonialSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='flex flex-col justify-center p-6'>
        <h1 className='font-bold text-5xl text-center'>Collection spotlight</h1>
        <p className='text-xl p-4 text-center'>Discover extraordinary moments with our spotlight Collection metamtickes exclusive access to premium events for an unforgettable experience grab yours today</p>
      </div>

      <div className="w-full md:w-2/4 m-auto slider-container pb-7">
        <div className="mt-10">
          <Slider {...settings}>
            {data.map((d, id) => (
              <div key={id} className="h-96 md:h-[450px] bg-gray-300 rounded-xl p-2">
                <div className="h-1/2 md:h-3/5 rounded-xl">
                  <img src={d.imge} alt="text" className="h-full w-full rounded-xl" />
                </div>
                <div className="flex flex-col items-center justify-center rounded-r-xl rounded-l-xl h-1/2 md:h-2/5 pt-1  border-t border-dashed border-black border-dashed-7">
                  <h4 className="font-bold p-1 text-white">{d.name}</h4>
                  <p className="p-1 text-white">{d.date}</p>
                  <p className="text-gray-400 text-center p-1">{d.state}</p>
                  <div className="flex justify-center pt-3">
                    <button className="bg-black text-sm p-2 rounded text-white">{d.button}</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default TestimonialSlider;
