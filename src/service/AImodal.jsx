
// import { GoogleGenerativeAI } from "@google/generative-ai";


//   const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
//   };
  
//     export const chatSession = model.startChat({
//       generationConfig,
   
//       history: [
//         {
//           role: "user",
//           parts: [
//             {text: "Generate travel plan: Las Vegas for 3 days for couple travelers with a cheap budget, give me hotels option list with hotel name, hotel address, price,hotel image url,geo coordinates,ticket pricing,rating,time travel each location for 3 days with each day plan with best time to visit in JSON format."},
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             {text: "```json\n{\n  \"trip_name\": \"Las Vegas Budget Getaway for Couples\",\n  \"duration\": 3,\n  \"travelers\": 2,\n  \"budget\": \"cheap\",\n  \"hotels\": [\n    {\n      \"name\": \"The Orleans Hotel & Casino\",\n      \"address\": \"4500 W. Tropicana Ave, Las Vegas, NV 89103\",\n      \"price\": \"$50-$100/night\",\n      \"image_url\": \"https://www.orleanscasino.com/media/images/hotel-gallery/orleans-hotel-exterior-day.jpg\",\n      \"geo_coordinates\": \"36.0983,-115.1680\",\n      \"rating\": 4.0,\n      \"review_link\": \"https://www.tripadvisor.com/Hotel_Review-g45963-d148918-Reviews-The_Orleans_Hotel_Casino-Las_Vegas_Nevada.html\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$30-$70/night\",\n      \"image_url\": \"https://www.circuscircus.com/media/images/gallery/circus-circus-hotel-casino-exterior-day.jpg\",\n      \"geo_coordinates\": \"36.1210,-115.1738\",\n      \"rating\": 3.5,\n      \"review_link\": \"https://www.tripadvisor.com/Hotel_Review-g45963-d148914-Reviews-Circus_Circus_Hotel_Casino-Las_Vegas_Nevada.html\"\n    },\n    {\n      \"name\": \"The Golden Nugget Hotel & Casino\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120/night\",\n      \"image_url\": \"https://www.goldennugget.com/media/images/hotel-gallery/golden-nugget-hotel-exterior-day.jpg\",\n      \"geo_coordinates\": \"36.1698,-115.1420\",\n      \"rating\": 4.5,\n      \"review_link\": \"https://www.tripadvisor.com/Hotel_Review-g45963-d148869-Reviews-Golden_Nugget_Hotel_Casino-Las_Vegas_Nevada.html\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Exploring Downtown and Fremont Street\",\n      \"activities\": [\n        {\n          \"time\": \"10:00 AM - 12:00 PM\",\n          \"location\": \"Fremont Street Experience\",\n          \"description\": \"Walk the vibrant Fremont Street Experience, see the free light show, and enjoy street performers. Take a peek at the vintage casinos and enjoy the lively atmosphere.\",\n          \"cost\": \"Free\"\n        },\n        {\n          \"time\": \"12:00 PM - 1:30 PM\",\n          \"location\": \"Heart Attack Grill\",\n          \"description\": \"Have a quirky lunch at the Heart Attack Grill, famous for its calorie-laden burgers and 'bypass' menu.\"\n        },\n        {\n          \"time\": \"1:30 PM - 4:00 PM\",\n          \"location\": \"Mob Museum\",\n          \"description\": \"Learn about the history of organized crime in Las Vegas at the fascinating Mob Museum. (Tickets: $25-35)\"\n        },\n        {\n          \"time\": \"4:00 PM - 6:00 PM\",\n          \"location\": \"The Golden Nugget\",\n          \"description\": \"Enjoy free drinks at a casino bar and test your luck with a few slots.\"\n        },\n        {\n          \"time\": \"6:00 PM - 7:00 PM\",\n          \"location\": \"Pinball Hall of Fame\",\n          \"description\": \"Play classic pinball machines at the Pinball Hall of Fame (Tickets: $10-15)\"\n        },\n        {\n          \"time\": \"7:00 PM - 9:00 PM\",\n          \"location\": \"Dinner at a Downtown Restaurant\",\n          \"description\": \"Enjoy a delicious and affordable dinner at a local eatery in Downtown.\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Strip Exploration and Free Shows\",\n      \"activities\": [\n        {\n          \"time\": \"10:00 AM - 12:00 PM\",\n          \"location\": \"Bellagio Conservatory & Botanical Garden\",\n          \"description\": \"Wander through the stunning Bellagio Conservatory and Botanical Garden, free to enjoy.\"\n        },\n        {\n          \"time\": \"12:00 PM - 2:00 PM\",\n          \"location\": \"Lunch at a Strip Food Court\",\n          \"description\": \"Grab an affordable lunch at a food court in one of the Strip casinos.\"\n        },\n        {\n          \"time\": \"2:00 PM - 4:00 PM\",\n          \"location\": \"Fountains of Bellagio\",\n          \"description\": \"Enjoy the mesmerizing synchronized water and music show at the Fountains of Bellagio, a free spectacle.\"\n        },\n        {\n          \"time\": \"4:00 PM - 6:00 PM\",\n          \"location\": \"The LINQ Promenade\",\n          \"description\": \"Stroll along The LINQ Promenade, enjoy the High Roller observation wheel, and experience the free shows at the LINQ.\"\n        },\n        {\n          \"time\": \"6:00 PM - 8:00 PM\",\n          \"location\": \"Free Show at Caesars Palace\",\n          \"description\": \"Catch a free show at Caesars Palace, like the \"\n        },\n        {\n          \"time\": \"8:00 PM - 10:00 PM\",\n          \"location\": \"Dinner at a Strip Buffet\",\n          \"description\": \"Indulge in a buffet dinner at one of the Strip casinos (prices vary but often have deals).\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Exploring the Outdoors and Local Culture\",\n      \"activities\": [\n        {\n          \"time\": \"9:00 AM - 11:00 AM\",\n          \"location\": \"Red Rock Canyon National Conservation Area\",\n          \"description\": \"Escape the city and drive to Red Rock Canyon National Conservation Area for stunning desert scenery. Enjoy hiking trails, scenic drives, and breathtaking views. (Entrance fee: $15 per vehicle)\"\n        },\n        {\n          \"time\": \"11:00 AM - 1:00 PM\",\n          \"location\": \"Lunch at a Local Eatery\",\n          \"description\": \"Enjoy a casual lunch at a local eatery near Red Rock Canyon.\"\n        },\n        {\n          \"time\": \"1:00 PM - 3:00 PM\",\n          \"location\": \"Neon Museum\",\n          \"description\": \"Learn about Las Vegas's neon sign history at the Neon Museum. (Tickets: $20-30)\"\n        },\n        {\n          \"time\": \"3:00 PM - 5:00 PM\",\n          \"location\": \"The Arts District\",\n          \"description\": \"Explore the eclectic art scene in Las Vegas's Arts District, filled with galleries, street art, and unique shops.\"\n        },\n        {\n          \"time\": \"5:00 PM - 7:00 PM\",\n          \"location\": \"Dinner at a Local Restaurant\",\n          \"description\": \"Enjoy a delicious and affordable dinner at a local restaurant in the Arts District or Downtown.\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is based on a cheap budget and assumes you'll be using public transportation or walking where possible.\n* Prices for attractions, food, and drinks are approximate and subject to change.\n* Be sure to check for deals and discounts online or at your hotel.\n* You can adjust the itinerary to suit your interests and preferences.\n* Consider purchasing a Las Vegas \"Go\" card for discounted access to multiple attractions.\n* Remember to stay hydrated, especially when exploring outdoors in the desert climate.\n* Have fun and enjoy your Las Vegas trip!\n\n**Ticket Prices:**\n\n* Mob Museum: $25-35\n* Pinball Hall of Fame: $10-15\n* Red Rock Canyon National Conservation Area: $15 per vehicle\n* Neon Museum: $20-30\n\n**Additional Tips:**\n\n* Take advantage of free activities, like the Fountains of Bellagio and the Fremont Street Experience.\n* Enjoy happy hour deals at casinos and bars.\n* Look for discount coupons for attractions and shows.\n* Check out the free shows at Caesars Palace and other casinos.\n* Explore the Strip on foot to enjoy the sights and sounds.\n* Avoid peak travel times to save on airfare and hotel prices. \n"},
//           ],
//         },
//       ],
//     });
  
import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Create a detailed full day travel itinerary for {place} over {totalDays} days for {traveler} travelers with a {budget} budget, providing four hotel options (name, address, price in INR, image URL, geo-coordinates, and rating), daily plans with timings for visiting attractions including attractions name, attractions brief description, attractions address, attractions ticket price  in INR if any(best times based on weather and crowd levels) for {totalDays} days, suggested activities, meal recommendations with suggested restaurant(required),  and full day actionable plans to ensure a budget-compliant, comfortable, and enjoyable experience; Return the response in **valid JSON format only**, no additional text..\n\n### Output Format\nReturn the response in **valid JSON format** strictly adhering to the schema below:\n\n{\n  \"hotel\": [\n    {\n      \"name\": \"Hotel Name\",\n      \"address\": \"Hotel Address\",\n      \"priceInr\": \"Price in INR\",\n      \"imageurl\": \"Image URL\",\n      \"geocoordinates\": \"Latitude, Longitude\",\n      \"rating\": \"Rating\"\n    }\n  ],\n  \"dailyPlans\": [\n    {\n      \"day\": \"Day X\",\n      \"Budget\": \"Daily budget in INR\",\n      \"plan\": [\n        {\n          \"time\": \"Start Time - End Time\",\n          \"address\": \"Attraction Address\",\n          \"attraction\": \"Attraction Name\",\n          \"description\": \"Provide a detailed description elaborating on the history, architectural style, cultural significance, legends, and unique features of the attraction in around 15-20 words.\",\n          \"bestTime\": \"Best Time to Visit\",\n          \"ticketPrice\": \"Ticket Price in INR\"\n        },\n        {\n          \"time\": \"Start Time - End Time\",\n          \"cuisine\": \"Cuisine Type\",\n          \"meal\": \"Meal Description\",\n          \"restaurant\": \"Restaurant Details\"\n          \"address\": \"Restaurant Address\"\n        }\n      ]\n    }\n  ],\n}\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\"hotel\": [{\"name\": \"The Oberoi\", \"address\": \"Dr Zakir Husain Marg, New Delhi\", \"priceInr\": \"25000\", \"imageurl\": \"https://www.oberoihotels.com/delhi/images/hotel-gallery/exterior-view.jpg\", \"geocoordinates\": \"28.6124,77.2297\", \"rating\": \"4.8\"}, {\"name\": \"The Leela Palace\", \"address\": \"Shah Jahan Rd, New Delhi\", \"priceInr\": \"20000\", \"imageurl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f2/11/40/leela-palace-new-delhi.jpg?w=1200&h=-1&s=1\", \"geocoordinates\": \"28.6009,77.2297\", \"rating\": \"4.7\"}, {\"name\": \"Taj Mahal Hotel\", \"address\": \"1, Mansingh Rd, New Delhi\", \"priceInr\": \"18000\", \"imageurl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Taj_Mahal_Hotel_New_Delhi.jpg/1280px-Taj_Mahal_Hotel_New_Delhi.jpg\", \"geocoordinates\": \"28.6174,77.2276\", \"rating\": \"4.6\"}, {\"name\": \"The Imperial\", \"address\": \"Janpath, New Delhi\", \"priceInr\": \"15000\", \"imageurl\": \"https://www.theimperialindia.com/images/the-imperial-new-delhi-hotel.jpg\", \"geocoordinates\": \"28.6204,77.2256\", \"rating\": \"4.5\"}], \"dailyPlans\": [{\"day\": \"Day 1\", \"Budget\": \"5000\", \"plan\": [{\"time\": \"9:00-12:00\", \"address\": \"Rajpath, New Delhi\", \"attraction\": \"India Gate\", \"description\": \"War memorial; majestic arch; tribute to Indian soldiers.\", \"bestTime\": \"Morning\", \"ticketPrice\": \"0\"}, {\"time\": \"12:30-14:00\", \"cuisine\": \"North Indian\", \"meal\": \"Lunch\", \"restaurant\": \"Bukhara\", \"address\": \"The Maurya Sheraton, New Delhi\"}, {\"time\": \"15:00-18:00\", \"address\": \"Old Delhi, New Delhi\", \"attraction\": \"Red Fort\", \"description\": \"Mughal-era fort; UNESCO World Heritage site; stunning architecture.\", \"bestTime\": \"Late afternoon\", \"ticketPrice\": \"50\"}, {\"time\": \"19:00-21:00\", \"cuisine\": \"Indian\", \"meal\": \"Dinner\", \"restaurant\": \"Havemore Restaurant\", \"address\": \"Connaught Place, New Delhi\"}]}, {\"day\": \"Day 2\", \"Budget\": \"4000\", \"plan\": [{\"time\": \"9:00-12:00\", \"address\": \"Pragati Maidan, New Delhi\", \"attraction\": \"National Museum\", \"description\": \"Showcase of India's rich history and art; extensive collection.\", \"bestTime\": \"Morning\", \"ticketPrice\": \"200\"}, {\"time\": \"12:30-14:00\", \"cuisine\": \"South Indian\", \"meal\": \"Lunch\", \"restaurant\": \"Saravana Bhavan\", \"address\": \"Connaught Place, New Delhi\"}, {\"time\": \"15:00-17:00\", \"address\": \"Lodhi Road, New Delhi\", \"attraction\": \"Humayun's Tomb\", \"description\": \"Mughal mausoleum; precursor to Taj Mahal; UNESCO World Heritage site.\", \"bestTime\": \"Afternoon\", \"ticketPrice\": \"100\"}, {\"time\": \"18:00-20:00\", \"cuisine\": \"Italian\", \"meal\": \"Dinner\", \"restaurant\": \"Indian Accent\", \"address\": \"The Lodhi Hotel, New Delhi\"}]}]}\n```"},
        ],
      },
    ],
  });

 