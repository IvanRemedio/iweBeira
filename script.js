let map;
let marker;
let accuracyCircle;

function capturarLocalizacao() {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      alert(
        "Lat: " + pos.coords.latitude +
        "\nLng: " + pos.coords.longitude +
        "\nPrecisão: ±" + Math.round(pos.coords.accuracy) + "m"
      );
    },
    () => alert("Erro"),
    { enableHighAccuracy: true }
  );
}
