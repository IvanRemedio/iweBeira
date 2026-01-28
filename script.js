function enviarParaForm() {
  const lat = localStorage.getItem("lat");
  const lng = localStorage.getItem("lng");
  const acc = localStorage.getItem("acc");

  if (!lat) {
    alert("Capture a localização primeiro");
    return;
  }

  const formURL = `https://docs.google.com/forms/d/e/1KN7ZEuKXsB1oZds6/formResponse
  ?entry.111111=${lat}
  &entry.222222=${lng}
  &entry.333333=${Math.round(acc)}`;

  window.open(formURL, "_blank");
}
