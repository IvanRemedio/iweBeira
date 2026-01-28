let map;
let marker;

function capturarLocalizacao() {
  if (!navigator.geolocation) {
    alert("Geolocalização não suportada no seu telefone");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      mostrarMapa(lat, lng);
    },
    () => {
      alert("Não foi possível obter a localização");
    }
  );
}

function mostrarMapa(lat, lng) {
  if (!map) {
    map = L.map("map").setView([lat, lng], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);
  }

  if (marker) {
    marker.setLatLng([lat, lng]);
  } else {
    marker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup("📍 Local de lixo denunciado")
      .openPopup();
  }
}
