declare var ol: any;

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address") as HTMLInputElement;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressesHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;
  const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">

  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 12,
    }),
  });
}

form.addEventListener("submit", searchAddressesHandler);
