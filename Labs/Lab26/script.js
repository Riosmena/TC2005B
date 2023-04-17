const apiKey = "bd1b82bd5a2847c0add161610222501";
const root = document.getElementById("root");

const cities = [
  "Cadereyta de Montes",
  "Landa de Matamoros",
  "Pinal de Amoles",
  "Ezequiel Montes",
  "Amealco",
  "Corregidora",
  "Jalpan de Serra",
  "Queretaro",
];

async function fetchData(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey} &q=${location}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    renderTemplate(data);
    renderButtons(cities);
  } catch (err) {
    console.log(err);
  }
}

function renderTemplate(data) {
  root.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `
      <h1>Temperaturas del estado de Querétaro</h1>
      <h2 class="city-name">${data.location.name}, ${data.location.country}</h2>
      <div class="info">
        <p>Temperature: <span>${data.current.temp_c}° C</span></p>
        
      </div>
    `;
  root.appendChild(div);
}

function renderButtons(locations) {
  const buttonsContainer = document.createElement("div");

  locations.map((location) => {
    const button = document.createElement("button");
    button.innerText = location;
    button.classList.add("city-name");
    button.addEventListener("click", () => fetchData(location));
    buttonsContainer.appendChild(button);
  });

  root.appendChild(buttonsContainer);
}

fetchData("Huimilpan");