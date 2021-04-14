import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyDbl0X0Da9iZxX9yevWDbqCkvRonNY2UcQ";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address") as HTMLInputElement;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressesHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;

  const API_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enteredAddress
  )}&key=${GOOGLE_API_KEY}`;
  axios
    .get<GoogleGeocodingResponse>(API_ENDPOINT)
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }

      const coordinates = response.data.results[0].geometry.location;
      console.log(coordinates);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressesHandler);
