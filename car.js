/* ============================================================
   Car detail page (car.html?id=3) – needs i18n.js and data.js loaded first
   ============================================================ */
addStrings({
  en: {
    pageTitle: "Car details – AutoBazár Koleso",
    backToCars: "← All cars",
    sBrand: "Brand",
    sModel: "Model",
    sYear: "Year of production",
    sMileage: "Mileage",
    sFuel: "Fuel",
    sCondition: "Condition",
    sLocation: "Location",
    sId: "Listing ID",
    specsTitle: "Specifications",
    descTitle: "About this car",
    desc: city => `Inspected by our team before listing. A full service history is available on request, and a test drive can be arranged at our showroom (${city}).`,
    enquire: "Enquire about this car",
    financeThis: "Calculate financing",
    perMonth: amount => `or from € ${amount} / month`,
    monthlyNote: "60 months, 6.9 % APR, 20 % down payment – indicative.",
    similarTitle: "Similar cars",
    notFoundTitle: "Car not found",
    notFoundText: "This listing is no longer available.",
    viewAll: "Browse all cars"
  },
  sk: {
    pageTitle: "Detail vozidla – AutoBazár Koleso",
    backToCars: "← Všetky vozidlá",
    sBrand: "Značka",
    sModel: "Model",
    sYear: "Rok výroby",
    sMileage: "Najazdené",
    sFuel: "Palivo",
    sCondition: "Technický stav",
    sLocation: "Lokalita",
    sId: "Číslo inzerátu",
    specsTitle: "Špecifikácia",
    descTitle: "O vozidle",
    desc: city => `Pred zaradením do ponuky vozidlo skontrolujeme. Kompletná servisná história je k dispozícii na požiadanie a skúšobnú jazdu dohodneme v našej predajni (${city}).`,
    enquire: "Mám záujem o toto vozidlo",
    financeThis: "Vypočítať splátky",
    perMonth: amount => `alebo od € ${amount} / mesiac`,
    monthlyNote: "60 mesiacov, 6,9 % RPMN, akontácia 20 % – orientačne.",
    similarTitle: "Podobné vozidlá",
    notFoundTitle: "Vozidlo sa nenašlo",
    notFoundText: "Tento inzerát už nie je dostupný.",
    viewAll: "Prezrieť všetky vozidlá"
  },
  ru: {
    pageTitle: "Карточка автомобиля — AutoBazár Koleso",
    backToCars: "← Все автомобили",
    sBrand: "Марка",
    sModel: "Модель",
    sYear: "Год выпуска",
    sMileage: "Пробег",
    sFuel: "Топливо",
    sCondition: "Состояние",
    sLocation: "Местоположение",
    sId: "Номер объявления",
    specsTitle: "Характеристики",
    descTitle: "Об автомобиле",
    desc: city => `Перед размещением каждый автомобиль проверяется нашей командой. Полная история обслуживания доступна по запросу, а тест-драйв можно организовать в нашем автосалоне (${city}).`,
    enquire: "Запросить информацию",
    financeThis: "Рассчитать кредит",
    perMonth: amount => `или от € ${amount} / мес.`,
    monthlyNote: "60 мес., 6,9 % годовых, первоначальный взнос 20 % — ориентировочно.",
    similarTitle: "Похожие автомобили",
    notFoundTitle: "Автомобиль не найден",
    notFoundText: "Это объявление больше недоступно.",
    viewAll: "Смотреть все автомобили"
  }
});

const $ = id => document.getElementById(id);
const car = carFromQuery("id");

/* Same brand first, then the closest price; never the car itself */
function similarCars() {
  return CARS
    .filter(other => other.id !== car.id)
    .sort((a, b) =>
      (a.brand === car.brand ? 0 : 1) - (b.brand === car.brand ? 0 : 1) ||
      Math.abs(a.price - car.price) - Math.abs(b.price - car.price))
    .slice(0, 3);
}

function renderNotFound() {
  $("carTitle").textContent = t("notFoundTitle");
  $("carSub").textContent = "";
  $("buyBox").hidden = true;
  $("carMain").innerHTML = `
    <div class="panel empty">
      <p>${t("notFoundText")}</p>
      <p style="margin-top:16px"><a class="btn" href="index.html">${t("viewAll")}</a></p>
    </div>`;
}

function renderCar() {
  document.title = `${carName(car)} – AutoBazár Koleso`;
  $("carTitle").textContent = carName(car);
  $("carSub").textContent =
    `${car.year} · ${fmt(car.km)} km · ${fuelName(car.fuel)} · ${cityName(car.city)}, ${countryName(car.country)}`;

  const rows = [
    ["sBrand", car.brand],
    ["sModel", car.series],
    ["sYear", car.year],
    ["sMileage", `${fmt(car.km)} km`],
    ["sFuel", fuelName(car.fuel)],
    ["sCondition", conditionName(car.cond)],
    ["sLocation", `${cityName(car.city)}, ${countryName(car.country)}`],
    ["sId", "AK-" + String(car.id + 1).padStart(4, "0")]
  ].map(([label, value]) => `<div><dt>${t(label)}</dt><dd>${value}</dd></div>`).join("");

  const similar = similarCars();

  $("carMain").innerHTML = `
    <div class="gallery">
      <span class="badge ${badgeClass(car.cond)}">${conditionName(car.cond)}</span>
      ${carSVG(car.color)}
    </div>
    <div class="panel">
      <h2>${t("specsTitle")}</h2>
      <dl class="spec-table">${rows}</dl>
    </div>
    <div class="panel">
      <h2>${t("descTitle")}</h2>
      <p>${t("desc")(cityName(car.city))}</p>
    </div>
    <h2 class="section-title">${t("similarTitle")}</h2>
    <div class="grid">${similar.map(carCard).join("")}</div>`;

  const monthly = monthlyPayment(car.price * 0.8, 6.9, 60);
  $("buyBox").hidden = false;
  $("buyBox").innerHTML = `
    <div class="price-big">€ ${fmt(car.price)}</div>
    <p class="monthly"><strong>${t("perMonth")(fmt(Math.round(monthly)))}</strong><br>${t("monthlyNote")}</p>
    <div class="stack">
      <a class="btn block" href="contact.html?car=${car.id}">${t("enquire")}</a>
      <a class="btn block ghost" href="financing.html?car=${car.id}">${t("financeThis")}</a>
    </div>`;
}

initLanguage(() => (car ? renderCar() : renderNotFound()));
