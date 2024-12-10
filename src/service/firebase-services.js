import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure the path is correct

export const deleteTrip = async (tripId) => {
    console.log("Deleting trip with ID:", tripId);

  try {
    const tripRef = doc(db, "AITrips", tripId); // Adjust collection name if needed
    await deleteDoc(tripRef); // Delete the document
    window.location.reload();
  } catch (error) {
    console.error("Error deleting trip:", error);
    throw error; // Re-throw error to handle it in your component
  }
};
