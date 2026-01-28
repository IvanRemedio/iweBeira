fetch("https://script.google.com/macros/s/AKfycbyReB3kRtQViR3-IZL5AwCU8whA9xoF2YSFOgzM4nmvdcZGTOVGPVIl2EK9I7Be0BmjRw/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    lat: lat,
    lng: lng,
    obs: obs
  })
})
.then(response => response.text())
.then(text => {
  console.log(text);
  alert("Resposta do servidor:\n" + text);
})
.catch(error => {
  console.error(error);
  alert("Erro total no envio");
});
