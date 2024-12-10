import axios from "axios";

// Replace this with the correct API URL for fetching places
const BASE_URL = "https://places.googleapis.com/v1/places:searchText"; //***********

// The config will include the API key and other required parameters
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    "X-Goog-Fieldmask": "places.photos,places.displayName,places.id"
  },
};

// Function to get the place details using the Google Places API
export const GetPlaceDetails = async (data) => {
  try {
    // Ensure textQuery is provided
    if (!data || !data.textQuery) {
      throw new Error("textQuery is required to fetch place details.");
    }

    console.log("Request payload:", data); // Debugging: log the payload being sent

    // Make the API call
    const response = await axios.post(BASE_URL, data, config);

    console.log("API Response:", response.data); // Log the API response
    // Ensure the API response has a valid structure
    if (response?.data?.places?.length > 0) {
      return response.data;
    } else {
      console.warn("No places found in API response.");
      return { places: [] }; // Return an empty array if no places are found
    }
  } catch (error) {
    console.error("Error fetching place details:", error.response?.data || error);
    throw error; // Re-throw to handle it in the caller if needed
  }
};

export const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
