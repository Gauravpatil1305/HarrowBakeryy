import { useEffect, useState } from 'react';
const slides = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUOgAn_hwbEbpgTXs5N5NMJK-J_Q2QFwG9a101bFoskmwty0MB9Snaqz8FkOcE47OFWM&usqp=CAU',
    heading: 'Hospital Announcements',
    description: 'Stay updated with the latest announcements and important updates from our hospital administration.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUOgAn_hwbEbpgTXs5N5NMJK-J_Q2QFwG9a101bFoskmwty0MB9Snaqz8FkOcE47OFWM&usqp=CAU',
    heading: 'Upcoming Events',
    description: 'Join us for our upcoming events and workshops designed to enhance your skills and knowledge.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUOgAn_hwbEbpgTXs5N5NMJK-J_Q2QFwG9a101bFoskmwty0MB9Snaqz8FkOcE47OFWM&usqp=CAU',
    heading: 'Health Tips',
    description: 'Discover essential health tips and advice to maintain your well-being and provide better patient care.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUOgAn_hwbEbpgTXs5N5NMJK-J_Q2QFwG9a101bFoskmwty0MB9Snaqz8FkOcE47OFWM&usqp=CAU',
    heading: 'Staff Achievements',
    description: 'Celebrate the achievements and milestones of our dedicated hospital staff.',
  },
];
const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-3000 ease-in-out"
        style={{ transform:' translateX(-${currentSlide * 100}%) '}}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-64 md:h-96 lg:h-[500px] flex-shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="object-cover "style={{width:"100%",height:"200px"}}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slide.heading}
              </h2>
              <p className="text-md md:text-lg lg:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;