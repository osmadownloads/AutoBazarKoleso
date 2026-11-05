/* ============================================================
   Shared car data + helpers – loaded on every page AFTER i18n.js
   ============================================================ */

/* ---------- SAMPLE DATA ----------
   [brand, series, year, price €, mileage km, fuel, condition, country, city, color]  */
const RAW = [
  ["Volkswagen","Golf",2019,15900,78000,"Petrol","Excellent","Slovakia","Bratislava","#3b6fd8"],
  ["Volkswagen","Passat",2016,11200,164000,"Diesel","Good","Czechia","Prague","#4a5568"],
  ["Volkswagen","Tiguan",2021,28900,42000,"Diesel","Like new","Germany","Munich","#2f855a"],
  ["BMW","3 Series",2018,21500,95000,"Diesel","Excellent","Germany","Munich","#1a202c"],
  ["BMW","5 Series",2015,14800,189000,"Diesel","Fair","Austria","Vienna","#718096"],
  ["BMW","X3",2022,41900,28000,"Hybrid","Like new","Germany","Berlin","#2b6cb0"],
  ["Audi","A3",2017,13400,121000,"Petrol","Good","Poland","Warsaw","#c53030"],
  ["Audi","A4",2020,27800,61000,"Diesel","Excellent","Austria","Vienna","#4a5568"],
  ["Audi","Q5",2019,31500,74000,"Diesel","Excellent","Hungary","Budapest","#1a202c"],
  ["Škoda","Octavia",2020,17900,66000,"Petrol","Excellent","Czechia","Prague","#38a169"],
  ["Škoda","Superb",2018,18900,112000,"Diesel","Good","Slovakia","Bratislava","#2d3748"],
  ["Škoda","Kodiaq",2021,29500,39000,"Diesel","Like new","Poland","Warsaw","#805ad5"],
  ["Mercedes-Benz","C-Class",2019,29900,70000,"Diesel","Excellent","Germany","Berlin","#a0aec0"],
  ["Mercedes-Benz","E-Class",2014,12500,201000,"Diesel","Fair","Belgium","Brussels","#4a5568"],
  ["Mercedes-Benz","GLC",2022,46500,24000,"Hybrid","Like new","Netherlands","Amsterdam","#1a202c"],
  ["Renault","Clio",2018,8900,88000,"Petrol","Good","France","Paris","#dd6b20"],
  ["Renault","Megane",2016,7400,132000,"Diesel","Good","France","Paris","#3182ce"],
  ["Peugeot","208",2021,13900,35000,"Petrol","Like new","France","Paris","#e53e3e"],
  ["Peugeot","308",2017,8200,127000,"Diesel","Fair","Spain","Madrid","#718096"],
  ["Toyota","Corolla",2020,19400,54000,"Hybrid","Excellent","Italy","Milan","#e2e8f0"],
  ["Toyota","Yaris",2015,6900,115000,"Petrol","Good","Spain","Madrid","#d69e2e"],
  ["Ford","Focus",2017,8700,118000,"Petrol","Good","Netherlands","Amsterdam","#2c5282"],
  ["Ford","Fiesta",2013,3900,149000,"Petrol","Needs repair","Hungary","Budapest","#9b2c2c"],
  ["Volkswagen","Golf",2012,4600,198000,"Diesel","Needs repair","Poland","Warsaw","#4a5568"],
  ["BMW","3 Series",2021,38900,31000,"Petrol","Like new","Italy","Milan","#2b6cb0"],
  ["Audi","A3",2022,29400,22000,"Petrol","Like new","Belgium","Brussels","#e53e3e"]
];
const CARS = RAW.map((r, i) => ({
  id: i,
  brand: r[0],
  series: r[1],
  year: r[2],
  price: r[3],
  km: r[4],
  fuel: r[5],
  cond: r[6],
  country: r[7],
  city: r[8],
  color: r[9]
}));

const CONDITIONS = ["Like new", "Excellent", "Good", "Fair", "Needs repair"];
const FUELS = ["Petrol", "Diesel", "Hybrid", "Electric"];
const BRANDS = [...new Set(CARS.map(car => car.brand))].sort();
const COUNTRIES = [...new Set(CARS.map(car => car.country))].sort();
const CITIES_BY_COUNTRY = Object.fromEntries(
  COUNTRIES.map(country => [
    country,
    [...new Set(CARS.filter(car => car.country === country).map(car => car.city))].sort()
  ])
);

/* ---------- Localised names ---------- */
const carName = car => `${car.brand} ${car.series}`;
const cityName = city => t("city")[city] || city;
const countryName = country => t("country")[country] || country;
const fuelName = fuel => t("fuel")[fuel] || fuel;
const conditionName = condition => t("conditionNames")[condition] || condition;

/* ---------- Helpers ---------- */
/* Reads ?id=3 (or ?car=3) from the address bar and returns that car, or undefined */
function carFromQuery(name) {
  const raw = new URLSearchParams(location.search).get(name);
  if (raw === null || raw.trim() === "") return undefined;
  return CARS.find(car => car.id === Number(raw));
}

/* Standard annuity formula. apr is the yearly rate in percent. */
function monthlyPayment(principal, apr, months) {
  if (principal <= 0 || months <= 0) return 0;
  const rate = apr / 1200;
  if (rate === 0) return principal / months;
  return principal * rate / (1 - Math.pow(1 + rate, -months));
}

/* Fills a <select> with every city, grouped by country, keeping the current choice */
function fillCitySelect(select, placeholder) {
  const selected = select.value;
  select.replaceChildren(new Option(placeholder, ""));
  COUNTRIES.forEach(country => {
    const group = document.createElement("optgroup");
    group.label = countryName(country);
    CITIES_BY_COUNTRY[country].forEach(city => group.appendChild(new Option(cityName(city), city)));
    select.appendChild(group);
  });
  select.value = selected;
}

/* ---------- Car card (used by the listing and the "similar cars" row) ---------- */
const carSVG = color => `<svg viewBox="0 0 200 90" aria-hidden="true">
  <path d="M10 62 L22 40 Q28 30 42 30 L120 30 Q138 30 148 42 L172 52 Q190 56 190 66 L190 70 L10 70 Z" fill="${color}"/>
  <path d="M44 34 L68 34 L68 50 L34 50 Z M74 34 L118 34 Q128 36 136 48 L74 48 Z" fill="#ffffff" opacity=".55"/>
  <circle cx="48" cy="70" r="13" fill="#1b2333"/><circle cx="48" cy="70" r="5" fill="#cbd5e0"/>
  <circle cx="150" cy="70" r="13" fill="#1b2333"/><circle cx="150" cy="70" r="5" fill="#cbd5e0"/>
</svg>`;

const badgeClass = condition =>
  condition === "Fair" ? "fair" : condition === "Needs repair" ? "repair" : "";

function carCard(car) {
  const link = `car.html?id=${car.id}`;
  return `
    <article class="car">
      <a class="img" href="${link}" aria-label="${carName(car)}">
        <span class="badge ${badgeClass(car.cond)}">${conditionName(car.cond)}</span>
        ${carSVG(car.color)}
      </a>
      <div class="info">
        <h3><a href="${link}">${carName(car)}</a></h3>
        <div class="sub">📍 ${cityName(car.city)}, ${countryName(car.country)}</div>
        <div class="specs"><span>${car.year}</span><span>${fmt(car.km)} km</span><span>${fuelName(car.fuel)}</span></div>
        <div class="bottom">
          <div class="price">€ ${fmt(car.price)}</div>
          <a class="btn" href="${link}">${t("details")}</a>
        </div>
      </div>
    </article>`;
}
