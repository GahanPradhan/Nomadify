import React from 'react';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  // Early return if no hotels are available
  if (!trip?.tripData?.hotel?.length) {
    return (
      <div className="mt-5">
        <h2 className="text-xl font-bold text-red-900 mb-4">Hotel Recommendations</h2>
        <p className="text-gray-600">No hotel recommendations available for this trip.</p>
      </div>
    );
  }
    const displayedHotels = trip?.tripData?.hotel?.slice(0, 3) || [];


  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mt-5 mb-4">
        Hotel Recommendations
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {displayedHotels.map((hotel, index) => (
          <HotelCardItem 
            key={hotel.id || index} 
            hotel={hotel} 
          />
        ))}
      </div>
    </div>
  );
}

export default Hotels;

  