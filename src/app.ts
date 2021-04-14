const form = document.querySelector("form")!;
const addressInput = document.getElementById("address") as HTMLInputElement;

function searchAddressesHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;

  //TODO: send this to Google API
}

form.addEventListener("submit", searchAddressesHandler);
