const btn = document.getElementById("btnLocalizacao");

btn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                alert(
                    "Latitude: " + pos.coords.latitude +
                    "\nLongitude: " + pos.coords.longitude
                );
            },
            () => {
                alert("Permissão de localização negada");
            }
        );
    } else {
        alert("Geolocalização não suportada");
    }
});