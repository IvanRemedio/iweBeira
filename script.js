let accuracyCircle;
let map;
let marker;

function mostrarMapa(lat, lng, accuracy) {
  if (!map) {
    map = L.map("map").setView([lat, lng], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);
  }

  if (marker) {
    marker.setLatLng([lat, lng]);
  } else {
    marker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`📍 Local aproximado do lixo<br>Precisão: ±${Math.round(accuracy)}m`)
      .openPopup();
  }

  if (accuracyCircle) {
    accuracyCircle.setLatLng([lat, lng]).setRadius(accuracy);
  } else {
    accuracyCircle = L.circle([lat, lng], {
      radius: accuracy,
      color: "blue",
      fillOpacity: 0.2
    }).addTo(map);
  }
}
