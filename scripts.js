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

/* ---------- ELEMENTS ---------- */
const $ = id => document.getElementById(id);
const el = {
  priceMin: $("priceMin"),
  priceMax: $("priceMax"),
  yearMin: $("yearMin"),
  yearMax: $("yearMax"),
  brand: $("brand"),
  series: $("series"),
  locality: $("locality"),
  conditions: $("conditions"),
  sort: $("sort"),
  grid: $("grid"),
  count: $("count")
};

/* ---------- BUILD FILTER OPTIONS ---------- */
const brands = [...new Set(CARS.map(c => c.brand))].sort();
brands.forEach(b => el.brand.add(new Option(b, b)));

const countries = [...new Set(CARS.map(c => c.country))].sort();
countries.forEach(country => {
  const og = document.createElement("optgroup");
  og.label = country;
  og.appendChild(new Option("All of " + country, "country:" + country));
  [...new Set(CARS.filter(c => c.country === country).map(c => c.city))]
    .sort()
    .forEach(city => og.appendChild(new Option(city, "city:" + city)));
  el.locality.appendChild(og);
});

CONDITIONS.forEach(c => {
  const label = document.createElement("label");
  label.innerHTML = `<input type="checkbox" value="${c}"> ${c}`;
  el.conditions.appendChild(label);
});

el.brand.addEventListener("change", () => {
  el.series.innerHTML = "";
  if (!el.brand.value) {
    el.series.add(new Option("Select a brand first", ""));
    el.series.disabled = true;
  } else {
    el.series.add(new Option("All series", ""));
    [...new Set(CARS.filter(c => c.brand === el.brand.value).map(c => c.series))]
      .sort()
      .forEach(series => el.series.add(new Option(series, series)));
    el.series.disabled = false;
  }
  render();
});

/* ---------- RENDER ---------- */
const fmt = n => n.toLocaleString("en-GB");
const carSVG = color => `<svg viewBox="0 0 200 90" aria-hidden="true">
  <path d="M10 62 L22 40 Q28 30 42 30 L120 30 Q138 30 148 42 L172 52 Q190 56 190 66 L190 70 L10 70 Z" fill="${color}"/>
  <path d="M44 34 L68 34 L68 50 L34 50 Z M74 34 L118 34 Q128 36 136 48 L74 48 Z" fill="#ffffff" opacity=".55"/>
  <circle cx="48" cy="70" r="13" fill="#1b2333"/><circle cx="48" cy="70" r="5" fill="#cbd5e0"/>
  <circle cx="150" cy="70" r="13" fill="#1b2333"/><circle cx="150" cy="70" r="5" fill="#cbd5e0"/>
</svg>`;
const badgeClass = condition =>
  condition === "Fair" ? "fair" : condition === "Needs repair" ? "repair" : "";

function getFiltered() {
  const pMin = parseFloat(el.priceMin.value);
  const pMax = parseFloat(el.priceMax.value);
  const yMin = parseInt(el.yearMin.value);
  const yMax = parseInt(el.yearMax.value);
  const checked = [...el.conditions.querySelectorAll("input:checked")].map(input => input.value);
  const loc = el.locality.value;

  const list = CARS.filter(car => {
    if (!isNaN(pMin) && car.price < pMin) return false;
    if (!isNaN(pMax) && car.price > pMax) return false;
    if (!isNaN(yMin) && car.year < yMin) return false;
    if (!isNaN(yMax) && car.year > yMax) return false;
    if (el.brand.value && car.brand !== el.brand.value) return false;
    if (el.series.value && car.series !== el.series.value) return false;
    if (loc.startsWith("country:") && car.country !== loc.slice(8)) return false;
    if (loc.startsWith("city:") && car.city !== loc.slice(5)) return false;
    if (checked.length && !checked.includes(car.cond)) return false;
    return true;
  });

  const sorters = {
    priceAsc: (a, b) => a.price - b.price,
    priceDesc: (a, b) => b.price - a.price,
    yearDesc: (a, b) => b.year - a.year,
    yearAsc: (a, b) => a.year - b.year,
    kmAsc: (a, b) => a.km - b.km
  };
  return list.sort(sorters[el.sort.value]);
}

function render() {
  const list = getFiltered();
  el.count.textContent = list.length + (list.length === 1 ? " car found" : " cars found");

  if (!list.length) {
    el.grid.innerHTML = '<div class="empty">No cars match your filters. Try widening your search.</div>';
    return;
  }

  el.grid.innerHTML = list.map(car => `
    <article class="car">
      <div class="img">
        <span class="badge ${badgeClass(car.cond)}">${car.cond}</span>
        ${carSVG(car.color)}
      </div>
      <div class="info">
        <h3>${car.brand} ${car.series}</h3>
        <div class="sub">📍 ${car.city}, ${car.country}</div>
        <div class="specs"><span>${car.year}</span><span>${fmt(car.km)} km</span><span>${car.fuel}</span></div>
        <div class="bottom">
          <div class="price">€ ${fmt(car.price)}</div>
          <button class="btn" type="button" data-car-id="${car.id}">Details</button>
        </div>
      </div>
    </article>`).join("");
}

/* ---------- EVENTS ---------- */
el.grid.addEventListener("click", event => {
  const button = event.target.closest("[data-car-id]");
  if (!button) return;

  const car = CARS.find(item => item.id === Number(button.dataset.carId));
  if (car) {
    alert(`Enquiry for ${car.brand} ${car.series} (${car.year}) – connect this to your contact form or backend.`);
  }
});

["priceMin", "priceMax", "yearMin", "yearMax", "locality", "sort"]
  .forEach(id => el[id].addEventListener("input", render));
el.series.addEventListener("change", render);
el.conditions.addEventListener("change", render);

$("resetBtn").addEventListener("click", () => {
  ["priceMin", "priceMax", "yearMin", "yearMax"].forEach(id => {
    el[id].value = "";
  });
  el.brand.value = "";
  el.brand.dispatchEvent(new Event("change"));
  el.locality.value = "";
  el.sort.value = "priceAsc";
  el.conditions.querySelectorAll("input").forEach(input => {
    input.checked = false;
  });
  render();
});
$("toggleFilters").addEventListener("click", () => $("filters").classList.toggle("open"));

render();
