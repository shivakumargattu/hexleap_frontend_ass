
import TestimonialSlider from "./component/index"
import { useState } from 'react';

const SportCards = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const sports = [
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO4RWSrsAGEY3BymZyZBFl7jgADV_V56du7KvNASX00drt7CLpHMQ6AafT99ZKh-MRuU&usqp=CAU',
      sportDetails: 'Sacramento River Casts',
      events: '48 Events',
      sport: 'Baseball',
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO4RWSrsAGEY3BymZyZBFl7jgADV_V56du7KvNASX00drt7CLpHMQ6AafT99ZKh-MRuU&usqp=CAU',
      sportDetails: 'Las Vegas Aviators',
      events: '28 Events',
      sport: 'Baseball',
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO4RWSrsAGEY3BymZyZBFl7jgADV_V56du7KvNASX00drt7CLpHMQ6AafT99ZKh-MRuU&usqp=CAU',
      sportDetails: 'New Jersey Devils',
      events: '15 Events',
      sport: 'Ice Hockey',
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO4RWSrsAGEY3BymZyZBFl7jgADV_V56du7KvNASX00drt7CLpHMQ6AafT99ZKh-MRuU&usqp=CAU',
      sportDetails: 'Sacramento River Casts',
      events: '28 Events',
      sport: 'Baseball',
    },
   
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8jt5w-x7Ez2ZHjrJ16ymdz_uVwcCZOsmVLRv642Pkw&s',
      sportDetails: 'Advataicement Titel',
      sport:"leorm trvdyw The LEREM owns technical equipments and technical competences to offer contain"
       },
   
  ];

  const navTheme = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';

  const cardTheme = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <nav className={`flex justify-between items-center px-4 py-5 ${navTheme}`}>
        <div className="flex items-center space-x-4">
          <h1 className="underline decoration-4 font-bold decoration-sky-500">Sports</h1>
        </div>
        <div>
          <button
            className={`px-4 py-2 ${theme === 'dark' ? 'bg-gray-100 text-gray-950' : 'bg-gray-900 text-white'} rounded`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Theme
          </button>
        </div>
      </nav>
      <div className="container mx-auto content-center py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sports.map((sport, index) => (
            <div key={index} className={`rounded-lg shadow-lg p-4 ${cardTheme}`}>
              <img src={sport.imageSrc} alt="Sport" className="w-full h-auto mb-4" />
              <div>
                <p className="text-md font-semibold mb-2">{sport.sportDetails}</p>
                <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'} p-3 flex justify-between`}>
                  <div>
                    <p>Total Events</p>
                    <p className="font-bold">{sport.events}</p>
                  </div>
                  <div>
                    <p>Sport</p>
                    <p className="font-bold">{sport.sport}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <button className='bg-blue-500 text-white rounded px-4 mt-5 mb-4 py-2'>See More</button>
        </div>
        <div className={`rounded-lg shadow-lg p-4 ${cardTheme}`}>
          <TestimonialSlider  />
        </div>
      </div>
    </div>
  );
};

export default SportCards;
