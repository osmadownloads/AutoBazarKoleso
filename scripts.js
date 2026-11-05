/* ============================================================
   Buy page (index.html) – needs i18n.js and data.js loaded first
   ============================================================ */
addStrings({
  en: {
    pageTitle: "AutoBazár Koleso – Used Cars in Europe",
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
    empty: "No cars match your filters. Try widening your search.",
    found: count => `${count} ${count === 1 ? "car" : "cars"} found`
  },
  sk: {
    pageTitle: "AutoBazár Koleso – Jazdené autá v Európe",
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
    empty: "Žiadne vozidlá nezodpovedajú filtrom. Skúste ich upraviť.",
    found: count => {
      const form = new Intl.PluralRules("sk").select(count);
      if (form === "one") return `${count} vozidlo nájdené`;
      if (form === "few") return `${count} vozidlá nájdené`;
      return `${count} vozidiel nájdených`;
    }
  },
  ru: {
    pageTitle: "AutoBazár Koleso — подержанные автомобили в Европе",
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
    empty: "Подходящих автомобилей нет. Попробуйте изменить фильтры.",
    found: count => {
      const form = new Intl.PluralRules("ru").select(count);
      const noun = form === "one" ? "автомобиль" : form === "few" ? "автомобиля" : "автомобилей";
      return `Найдено ${count} ${noun}`;
    }
  }
});

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
function populateSeries(keepSelection) {
  const selectedSeries = keepSelection ? el.series.value : "";
  const brand = el.brand.value;

  el.series.replaceChildren();
  if (!brand) {
    el.series.add(new Option(t("selectBrandFirst"), ""));
    el.series.disabled = true;
    return;
  }

  el.series.add(new Option(t("allSeries"), ""));
  [...new Set(CARS.filter(car => car.brand === brand).map(car => car.series))]
    .sort()
    .forEach(series => el.series.add(new Option(series, series)));
  el.series.disabled = false;
  el.series.value = selectedSeries;
}

function populateFilterOptions() {
  const selectedBrand = el.brand.value;
  const selectedLocation = el.locality.value;
  const checkedConditions = new Set(
    [...el.conditions.querySelectorAll("input:checked")].map(input => input.value)
  );

  el.brand.replaceChildren(new Option(t("allBrands"), ""));
  BRANDS.forEach(brand => el.brand.add(new Option(brand, brand)));
  el.brand.value = selectedBrand;

  populateSeries(true);

  el.locality.replaceChildren(new Option(t("allEurope"), ""));
  COUNTRIES.forEach(country => {
    const group = document.createElement("optgroup");
    group.label = countryName(country);
    group.appendChild(new Option(t("allOf")[country] || countryName(country), "country:" + country));
    CITIES_BY_COUNTRY[country].forEach(city => group.appendChild(new Option(cityName(city), "city:" + city)));
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
    label.append(checkbox, ` ${conditionName(condition)}`);
    el.conditions.appendChild(label);
  });
}

/* ---------- FILTER + RENDER ---------- */
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
  el.grid.innerHTML = list.map(carCard).join("");
}

/* ---------- EVENTS ---------- */
el.brand.addEventListener("change", () => {
  populateSeries(false);
  render();
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
  populateSeries(false);
  el.locality.value = "";
  el.sort.value = "priceAsc";
  el.conditions.querySelectorAll("input").forEach(input => {
    input.checked = false;
  });
  render();
});
$("toggleFilters").addEventListener("click", () => $("filters").classList.toggle("open"));

initLanguage(() => {
  populateFilterOptions();
  render();
});
