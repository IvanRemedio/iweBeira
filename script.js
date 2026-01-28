let map;
let marker;

// Inicializa o mapa (posição genérica inicial)
map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Botão
document
  .getElementById("btnLocalizacao")
  .addEventListener("click", capturarLocalizacao);

function capturarLocalizacao() {

  if (!navigator.geolocation) {
    alert("Geolocalização não suportada pelo navegador");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    sucesso,
    erro,
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    }
  );
}

function sucesso(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const acc = pos.coords.accuracy;

  document.getElementById("info").innerHTML =
    `Latitude: ${lat}<br>
     Longitude: ${lng}<br>
     Precisão aproximada: ${Math.round(acc)} metros`;

  map.setView([lat, lng], 18);

  if (!marker) {
    marker = L.marker([lat, lng]).addTo(map);
  } else {
    marker.setLatLng([lat, lng]);
  }
}

function erro(err) {
  console.error(err);
  alert("Não foi possível obter a localização");
}
