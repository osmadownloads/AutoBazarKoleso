/* ---------- SAMPLE DATA ----------
   [brand, series, year, price €, mileage km, fuel, condition, country, city, color]  */
const TRANSLATIONS = {
  en: {
    pageTitle: "EuroAuto – Used Cars in Europe",
    navBuy: "Buy",
    navSell: "Sell",
    navFinancing: "Financing",
    navContact: "Contact",
    languageLabel: "Language",
    heroTitle: "Quality used cars across Europe",
    heroDescription: "Browse inspected used vehicles from trusted dealers in 12 European cities. Filter by price, year, brand, model, location, and condition.",
    filters: "Filters",
    reset: "Reset all",
    price: "Price (€)",
    min: "Min",
    max: "Max",
    minimumPrice: "Minimum price",
    maximumPrice: "Maximum price",
    year: "Year of production",
    from: "From",
    to: "To",
    yearFrom: "Year from",
    yearTo: "Year to",
    brand: "Car brand",
    allBrands: "All brands",
    model: "Brand series / model",
    selectBrandFirst: "Select a brand first",
    allSeries: "All series",
    location: "Location",
    allEurope: "All of Europe",
    condition: "Vehicle condition",
    sortLabel: "Sort results",
    priceAsc: "Price: low to high",
    priceDesc: "Price: high to low",
    yearDesc: "Year: newest first",
    yearAsc: "Year: oldest first",
    kmAsc: "Mileage: lowest first",
    details: "Details",
    empty: "No cars match your filters. Try widening your search.",
    footer: "© 2026 EuroAuto – demo website. Listings are sample data.",
    found: count => `${count} ${count === 1 ? "car" : "cars"} found`,
    enquiry: (car, year) => `Enquiry for ${car} (${year}) – connect this to your contact form or backend.`,
    allOf: {
      Slovakia: "All of Slovakia", Czechia: "All of Czechia", Germany: "All of Germany",
      Austria: "All of Austria", Hungary: "All of Hungary", Poland: "All of Poland",
      Belgium: "All of Belgium", Netherlands: "All of the Netherlands", France: "All of France",
      Spain: "All of Spain", Italy: "All of Italy"
    },
    country: {
      Slovakia: "Slovakia", Czechia: "Czechia", Germany: "Germany", Austria: "Austria",
      Hungary: "Hungary", Poland: "Poland", Belgium: "Belgium", Netherlands: "Netherlands",
      France: "France", Spain: "Spain", Italy: "Italy"
    },
    city: {
      Bratislava: "Bratislava", Prague: "Prague", Munich: "Munich", Berlin: "Berlin",
      Vienna: "Vienna", Budapest: "Budapest", Warsaw: "Warsaw", Brussels: "Brussels",
      Amsterdam: "Amsterdam", Paris: "Paris", Madrid: "Madrid", Milan: "Milan"
    },
    fuel: { Petrol: "Petrol", Diesel: "Diesel", Hybrid: "Hybrid" },
    conditionNames: {
      "Like new": "Like new", Excellent: "Excellent", Good: "Good", Fair: "Fair",
      "Needs repair": "Needs repair"
    }
  },
  sk: {
    pageTitle: "EuroAuto – Jazdené autá v Európe",
    navBuy: "Kúpiť",
    navSell: "Predať",
    navFinancing: "Financovanie",
    navContact: "Kontakt",
    languageLabel: "Jazyk",
    heroTitle: "Kvalitné jazdené autá v celej Európe",
    heroDescription: "Prezrite si skontrolované jazdené vozidlá od dôveryhodných predajcov v 12 európskych mestách. Filtrujte podľa ceny, roku výroby, značky, modelu, lokality a technického stavu.",
    filters: "Filtre",
    reset: "Vymazať filtre",
    price: "Cena (€)",
    min: "Od",
    max: "Do",
    minimumPrice: "Minimálna cena",
    maximumPrice: "Maximálna cena",
    year: "Rok výroby",
    from: "Od",
    to: "Do",
    yearFrom: "Rok od",
    yearTo: "Rok do",
    brand: "Značka vozidla",
    allBrands: "Všetky značky",
    model: "Model vozidla",
    selectBrandFirst: "Najprv vyberte značku",
    allSeries: "Všetky modely",
    location: "Lokalita",
    allEurope: "Celá Európa",
    condition: "Technický stav",
    sortLabel: "Zoradiť vozidlá",
    priceAsc: "Cena: od najnižšej",
    priceDesc: "Cena: od najvyššej",
    yearDesc: "Rok: najnovšie ako prvé",
    yearAsc: "Rok: najstaršie ako prvé",
    kmAsc: "Najazdené: od najmenej",
    details: "Detail",
    empty: "Žiadne vozidlá nezodpovedajú filtrom. Skúste ich upraviť.",
    footer: "© 2026 EuroAuto – ukážková webová stránka. Ponuka obsahuje ukážkové vozidlá.",
    found: count => {
      const form = new Intl.PluralRules("sk").select(count);
      if (form === "one") return `${count} vozidlo nájdené`;
      if (form === "few") return `${count} vozidlá nájdené`;
      return `${count} vozidiel nájdených`;
    },
    enquiry: (car, year) => `Záujem o vozidlo ${car} (${year}) – prepojte túto akciu s kontaktným formulárom alebo backendom.`,
    allOf: {
      Slovakia: "Celé Slovensko", Czechia: "Celé Česko", Germany: "Celé Nemecko",
      Austria: "Celé Rakúsko", Hungary: "Celé Maďarsko", Poland: "Celé Poľsko",
      Belgium: "Celé Belgicko", Netherlands: "Celé Holandsko", France: "Celé Francúzsko",
      Spain: "Celé Španielsko", Italy: "Celé Taliansko"
    },
    country: {
      Slovakia: "Slovensko", Czechia: "Česko", Germany: "Nemecko", Austria: "Rakúsko",
      Hungary: "Maďarsko", Poland: "Poľsko", Belgium: "Belgicko", Netherlands: "Holandsko",
      France: "Francúzsko", Spain: "Španielsko", Italy: "Taliansko"
    },
    city: {
      Bratislava: "Bratislava", Prague: "Praha", Munich: "Mníchov", Berlin: "Berlín",
      Vienna: "Viedeň", Budapest: "Budapešť", Warsaw: "Varšava", Brussels: "Brusel",
      Amsterdam: "Amsterdam", Paris: "Paríž", Madrid: "Madrid", Milan: "Miláno"
    },
    fuel: { Petrol: "Benzín", Diesel: "Diesel", Hybrid: "Hybrid" },
    conditionNames: {
      "Like new": "Ako nové", Excellent: "Výborný", Good: "Dobrý", Fair: "Uspokojivý",
      "Needs repair": "Vyžaduje opravu"
    }
  },
  ru: {
    pageTitle: "EuroAuto — подержанные автомобили в Европе",
    navBuy: "Купить",
    navSell: "Продать",
    navFinancing: "Финансирование",
    navContact: "Контакты",
    languageLabel: "Язык",
    heroTitle: "Качественные подержанные автомобили по всей Европе",
    heroDescription: "Выбирайте проверенные автомобили у надёжных продавцов в 12 городах Европы. Фильтруйте по цене, году выпуска, марке, модели, местоположению и состоянию.",
    filters: "Фильтры",
    reset: "Сбросить всё",
    price: "Цена (€)",
    min: "От",
    max: "До",
    minimumPrice: "Минимальная цена",
    maximumPrice: "Максимальная цена",
    year: "Год выпуска",
    from: "С",
    to: "По",
    yearFrom: "Год от",
    yearTo: "Год до",
    brand: "Марка автомобиля",
    allBrands: "Все марки",
    model: "Модель автомобиля",
    selectBrandFirst: "Сначала выберите марку",
    allSeries: "Все модели",
    location: "Местоположение",
    allEurope: "Вся Европа",
    condition: "Состояние автомобиля",
    sortLabel: "Сортировать автомобили",
    priceAsc: "Цена: сначала дешевле",
    priceDesc: "Цена: сначала дороже",
    yearDesc: "Год: сначала новые",
    yearAsc: "Год: сначала старые",
    kmAsc: "Пробег: сначала меньший",
    details: "Подробнее",
    empty: "Подходящих автомобилей нет. Попробуйте изменить фильтры.",
    footer: "© 2026 EuroAuto — демонстрационный сайт. Объявления приведены для примера.",
    found: count => `Найдено ${count} ${new Intl.PluralRules("ru").select(count) === "one" ? "автомобиль" : new Intl.PluralRules("ru").select(count) === "few" ? "автомобиля" : "автомобилей"}`,
    enquiry: (car, year) => `Запрос по автомобилю ${car} (${year}) — подключите эту функцию к форме обратной связи или серверу.`,
    allOf: {
      Slovakia: "Вся Словакия", Czechia: "Вся Чехия", Germany: "Вся Германия",
      Austria: "Вся Австрия", Hungary: "Вся Венгрия", Poland: "Вся Польша",
      Belgium: "Вся Бельгия", Netherlands: "Все Нидерланды", France: "Вся Франция",
      Spain: "Вся Испания", Italy: "Вся Италия"
    },
    country: {
      Slovakia: "Словакия", Czechia: "Чехия", Germany: "Германия", Austria: "Австрия",
      Hungary: "Венгрия", Poland: "Польша", Belgium: "Бельгия", Netherlands: "Нидерланды",
      France: "Франция", Spain: "Испания", Italy: "Италия"
    },
    city: {
      Bratislava: "Братислава", Prague: "Прага", Munich: "Мюнхен", Berlin: "Берлин",
      Vienna: "Вена", Budapest: "Будапешт", Warsaw: "Варшава", Brussels: "Брюссель",
      Amsterdam: "Амстердам", Paris: "Париж", Madrid: "Мадрид", Milan: "Милан"
    },
    fuel: { Petrol: "Бензин", Diesel: "Дизель", Hybrid: "Гибрид" },
    conditionNames: {
      "Like new": "Как новый", Excellent: "Отличное", Good: "Хорошее", Fair: "Удовлетворительное",
      "Needs repair": "Требует ремонта"
    }
  }
};

let currentLanguage = "en";

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
const localeByLanguage = { en: "en-GB", sk: "sk-SK", ru: "ru-RU" };
const t = key => TRANSLATIONS[currentLanguage][key];

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
const brands = [...new Set(CARS.map(car => car.brand))].sort();
const countries = [...new Set(CARS.map(car => car.country))].sort();

function populateFilterOptions() {
  const selectedBrand = el.brand.value;
  const selectedSeries = el.series.value;
  const selectedLocation = el.locality.value;
  const checkedConditions = new Set(
    [...el.conditions.querySelectorAll("input:checked")].map(input => input.value)
  );

  el.brand.replaceChildren(new Option(t("allBrands"), ""));
  brands.forEach(brand => el.brand.add(new Option(brand, brand)));
  el.brand.value = selectedBrand;

  el.series.replaceChildren();
  if (!selectedBrand) {
    el.series.add(new Option(t("selectBrandFirst"), ""));
    el.series.disabled = true;
  } else {
    el.series.add(new Option(t("allSeries"), ""));
    [...new Set(CARS.filter(car => car.brand === selectedBrand).map(car => car.series))]
      .sort()
      .forEach(series => el.series.add(new Option(series, series)));
    el.series.disabled = false;
    el.series.value = selectedSeries;
  }

  el.locality.replaceChildren(new Option(t("allEurope"), ""));
  countries.forEach(country => {
    const group = document.createElement("optgroup");
    const localizedCountry = TRANSLATIONS[currentLanguage].country[country] || country;
    group.label = localizedCountry;
    group.appendChild(new Option(TRANSLATIONS[currentLanguage].allOf[country] || localizedCountry, "country:" + country));
    [...new Set(CARS.filter(car => car.country === country).map(car => car.city))]
      .sort()
      .forEach(city => {
        const localizedCity = TRANSLATIONS[currentLanguage].city[city] || city;
        group.appendChild(new Option(localizedCity, "city:" + city));
      });
    el.locality.appendChild(group);
  });
  el.locality.value = selectedLocation;

  el.conditions.replaceChildren();
  CONDITIONS.forEach(condition => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = condition;
    checkbox.checked = checkedConditions.has(condition);
    label.append(checkbox, ` ${TRANSLATIONS[currentLanguage].conditionNames[condition]}`);
    el.conditions.appendChild(label);
  });
}

function applyLanguage(language) {
  if (!Object.hasOwn(TRANSLATIONS, language)) {
    throw new RangeError(`Unsupported language: ${language}`);
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  $("language").setAttribute("aria-label", t("languageLabel"));

  populateFilterOptions();
  render();
}

populateFilterOptions();

el.brand.addEventListener("change", () => {
  const selectedBrand = el.brand.value;
  el.series.replaceChildren();
  if (!selectedBrand) {
    el.series.add(new Option(t("selectBrandFirst"), ""));
    el.series.disabled = true;
  } else {
    el.series.add(new Option(t("allSeries"), ""));
    [...new Set(CARS.filter(car => car.brand === selectedBrand).map(car => car.series))]
      .sort()
      .forEach(series => el.series.add(new Option(series, series)));
    el.series.disabled = false;
  }
  render();
});

/* ---------- RENDER ---------- */
const fmt = n => n.toLocaleString(localeByLanguage[currentLanguage]);
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
  el.count.textContent = t("found")(list.length);

  if (!list.length) {
    el.grid.innerHTML = `<div class="empty">${t("empty")}</div>`;
    return;
  }

  el.grid.innerHTML = list.map(car => `
    <article class="car">
      <div class="img">
        <span class="badge ${badgeClass(car.cond)}">${TRANSLATIONS[currentLanguage].conditionNames[car.cond]}</span>
        ${carSVG(car.color)}
      </div>
      <div class="info">
        <h3>${car.brand} ${car.series}</h3>
        <div class="sub">📍 ${TRANSLATIONS[currentLanguage].city[car.city] || car.city}, ${TRANSLATIONS[currentLanguage].country[car.country] || car.country}</div>
        <div class="specs"><span>${car.year}</span><span>${fmt(car.km)} km</span><span>${TRANSLATIONS[currentLanguage].fuel[car.fuel] || car.fuel}</span></div>
        <div class="bottom">
          <div class="price">€ ${fmt(car.price)}</div>
          <button class="btn" type="button" data-car-id="${car.id}">${t("details")}</button>
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
    const localizedCar = `${car.brand} ${car.series}`;
    alert(t("enquiry")(localizedCar, car.year));
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
$("language").addEventListener("change", event => applyLanguage(event.target.value));

applyLanguage($("language").value);
