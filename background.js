async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "a971042943a514642c9160cec066ac9b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const output = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
        `;
    document.getElementById("weatherOutput").innerHTML = output;
  } catch (error) {
    document.getElementById("weatherOutput").innerHTML =
      `<p style="color:red;">${error.message}</p>`;
  }
}
