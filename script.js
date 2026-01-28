let lat, lng;

// Preview da foto
document.getElementById("foto").addEventListener("change", e => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    document.getElementById("preview").src = reader.result;
    document.getElementById("preview").style.display = "block";
    localStorage.setItem("foto", reader.result); // salva temporariamente
  };

  reader.readAsDataURL(file);
});

// Capturar localização
function capturarLocalizacao() {
  if (!navigator.geolocation) {
    alert("Geolocalização não suportada pelo navegador");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
      const acc = Math.round(pos.coords.accuracy);

      document.getElementById("localizacao").innerHTML =
        `Latitude: ${lat}<br>Longitude: ${lng}<br>Precisão: ${acc} metros`;

      localStorage.setItem("lat", lat);
      localStorage.setItem("lng", lng);
      localStorage.setItem("acc", acc);
    },
    () => alert("Erro ao obter localização"),
    { enableHighAccuracy: true }
  );
}

// Enviar denúncia
function enviar() {
  const foto = localStorage.getItem("foto");
  const obs = document.getElementById("obs").value;

  if (!lat || !lng) {
    alert("Capture a localização primeiro!");
    return;
  }
  if (!foto) {
    alert("Tire ou selecione uma foto primeiro!");
    return;
  }

  const url = "https://script.google.com/macros/s/AKfycbxbTriNXdXWV6ajRf_R6mQ7dTpRLvpm8Gp6hviX1BEiHdeaCRsFBQyupjCfKTUvU0Bp7Q/exec";

  fetch(url, {
    method: "POST",
    body: JSON.stringify({ lat, lng, foto, obs }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(d => {
    if(d.result==="ok") {
      alert("Denúncia enviada com sucesso!");
      localStorage.clear();
      window.location.reload();
    } else {
      alert("Erro ao enviar denúncia");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Erro ao enviar denúncia");
  });
                          }
