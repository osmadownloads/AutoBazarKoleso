/* ============================================================
   Sell page – needs i18n.js and data.js loaded first
   ============================================================ */
addStrings({
  en: {
    pageTitle: "Sell your car – AutoBazár Koleso",
    heroTitle: "Sell your car with confidence",
    heroDescription: "Tell us about your vehicle and our team will get back to you within one business day with a free valuation and a listing offer.",
    howTitle: "How it works",
    step1Title: "Describe your car",
    step1Text: "Fill in the basic details and add a few photos.",
    step2Title: "Get a valuation",
    step2Text: "A dealer from your region reviews it and sends you a fair price.",
    step3Title: "We list or buy it",
    step3Text: "Choose a free listing on our marketplace or a fast direct purchase.",
    whyTitle: "Why sell with us",
    why1: "No listing fees until your car sells",
    why2: "Verified buyers from 12 European cities",
    why3: "Help with paperwork and ownership transfer",
    guideTitle: "Market guide",
    guideEmpty: "Enter a brand and model to see similar cars on our marketplace.",
    guideNone: "We have no similar cars listed yet – our team will value yours manually.",
    guideFound: (n, min, max) => `Similar cars on our marketplace: € ${min}${min === max ? "" : ` – € ${max}`} (${n} listed).`,
    formTitle: "Vehicle details",
    formLead: "Fields marked * are required.",
    fBrand: "Car brand",
    fModel: "Model",
    phBrand: "e.g. Škoda",
    phModel: "e.g. Octavia",
    fYear: "Year of production",
    fMileage: "Mileage (km)",
    fFuel: "Fuel",
    fCondition: "Vehicle condition",
    fCity: "City",
    choose: "Select…",
    selectCity: "Select a city",
    fPrice: "Asking price (€)",
    optional: "optional",
    fDesc: "Description",
    phDesc: "Service history, equipment, number of owners…",
    photosTitle: "Photos",
    photosHint: "Click to add up to 6 photos",
    remove: "Remove photo",
    contactTitle: "Your contact details",
    fName: "Full name",
    fEmail: "Email",
    fPhone: "Phone",
    consent: "I agree to be contacted about my car and to the processing of my data.",
    submit: "Request valuation",
    okTitle: "Thank you!",
    okText: (name, car, email) => `${name}, we received your ${car}. We will reply to ${email} within one business day.`,
    again: "Submit another car"
  },
  sk: {
    pageTitle: "Predaj auta – AutoBazár Koleso",
    heroTitle: "Predajte svoje auto bez starostí",
    heroDescription: "Povedzte nám o svojom vozidle a do jedného pracovného dňa sa vám ozveme s bezplatným ocenením a ponukou inzercie.",
    howTitle: "Ako to funguje",
    step1Title: "Opíšte svoje auto",
    step1Text: "Vyplňte základné údaje a pridajte pár fotografií.",
    step2Title: "Získajte ocenenie",
    step2Text: "Predajca z vášho regiónu vozidlo posúdi a pošle vám férovú cenu.",
    step3Title: "Vozidlo vypíšeme alebo vykúpime",
    step3Text: "Vyberte si bezplatný inzerát na našom trhovisku alebo rýchly priamy výkup.",
    whyTitle: "Prečo predávať u nás",
    why1: "Žiadne poplatky za inzerciu, kým sa auto nepredá",
    why2: "Overení kupujúci z 12 európskych miest",
    why3: "Pomoc s papierovaním a prepisom vozidla",
    guideTitle: "Prehľad trhu",
    guideEmpty: "Zadajte značku a model a zobrazíme podobné autá z našej ponuky.",
    guideNone: "Podobné vozidlá zatiaľ v ponuke nemáme – vaše auto oceníme ručne.",
    guideFound: (n, min, max) => `Podobné vozidlá v ponuke: € ${min}${min === max ? "" : ` – € ${max}`} (${n} v ponuke).`,
    formTitle: "Údaje o vozidle",
    formLead: "Polia označené * sú povinné.",
    fBrand: "Značka vozidla",
    fModel: "Model",
    phBrand: "napr. Škoda",
    phModel: "napr. Octavia",
    fYear: "Rok výroby",
    fMileage: "Najazdené (km)",
    fFuel: "Palivo",
    fCondition: "Technický stav",
    fCity: "Mesto",
    choose: "Vyberte…",
    selectCity: "Vyberte mesto",
    fPrice: "Požadovaná cena (€)",
    optional: "nepovinné",
    fDesc: "Popis",
    phDesc: "Servisná história, výbava, počet majiteľov…",
    photosTitle: "Fotografie",
    photosHint: "Kliknutím pridáte až 6 fotografií",
    remove: "Odstrániť fotografiu",
    contactTitle: "Vaše kontaktné údaje",
    fName: "Meno a priezvisko",
    fEmail: "E-mail",
    fPhone: "Telefón",
    consent: "Súhlasím s kontaktovaním ohľadom môjho vozidla a so spracovaním osobných údajov.",
    submit: "Požiadať o ocenenie",
    okTitle: "Ďakujeme!",
    okText: (name, car, email) => `${name}, vaše vozidlo ${car} sme prijali. Odpovieme na ${email} do jedného pracovného dňa.`,
    again: "Odoslať ďalšie auto"
  },
  ru: {
    pageTitle: "Продажа автомобиля — AutoBazár Koleso",
    heroTitle: "Продавайте автомобиль уверенно",
    heroDescription: "Расскажите о своём автомобиле — в течение одного рабочего дня мы свяжемся с вами с бесплатной оценкой и предложением о размещении.",
    howTitle: "Как это работает",
    step1Title: "Опишите автомобиль",
    step1Text: "Заполните основные данные и добавьте несколько фотографий.",
    step2Title: "Получите оценку",
    step2Text: "Продавец из вашего региона изучит заявку и предложит справедливую цену.",
    step3Title: "Разместим или выкупим",
    step3Text: "Выберите бесплатное размещение на нашей площадке или быстрый прямой выкуп.",
    whyTitle: "Почему стоит продавать у нас",
    why1: "Никаких платежей за размещение до продажи автомобиля",
    why2: "Проверенные покупатели из 12 городов Европы",
    why3: "Помощь с документами и переоформлением",
    guideTitle: "Обзор рынка",
    guideEmpty: "Укажите марку и модель, чтобы увидеть похожие автомобили на нашей площадке.",
    guideNone: "Похожих автомобилей пока нет — мы оценим ваш вручную.",
    guideFound: (n, min, max) => `Похожие автомобили на площадке: € ${min}${min === max ? "" : ` – € ${max}`} (в продаже: ${n}).`,
    formTitle: "Данные об автомобиле",
    formLead: "Поля, отмеченные *, обязательны.",
    fBrand: "Марка автомобиля",
    fModel: "Модель",
    phBrand: "напр. Škoda",
    phModel: "напр. Octavia",
    fYear: "Год выпуска",
    fMileage: "Пробег (км)",
    fFuel: "Топливо",
    fCondition: "Состояние автомобиля",
    fCity: "Город",
    choose: "Выберите…",
    selectCity: "Выберите город",
    fPrice: "Желаемая цена (€)",
    optional: "необязательно",
    fDesc: "Описание",
    phDesc: "История обслуживания, комплектация, количество владельцев…",
    photosTitle: "Фотографии",
    photosHint: "Нажмите, чтобы добавить до 6 фото",
    remove: "Удалить фото",
    contactTitle: "Ваши контакты",
    fName: "Имя и фамилия",
    fEmail: "Эл. почта",
    fPhone: "Телефон",
    consent: "Согласен(на) на связь по поводу моего автомобиля и обработку персональных данных.",
    submit: "Запросить оценку",
    okTitle: "Спасибо!",
    okText: (name, car, email) => `${name}, мы получили заявку на ${car}. Ответим на ${email} в течение одного рабочего дня.`,
    again: "Отправить ещё одно авто"
  }
});

const $ = id => document.getElementById(id);
const form = $("sellForm");
const MAX_PHOTOS = 6;
let photos = [];
let lastSubmission = null;

/* ---------- Dropdowns and suggestions ---------- */
function buildOptions() {
  const keep = { fuel: $("fuel").value, condition: $("condition").value };

  $("fuel").replaceChildren(new Option(t("choose"), ""));
  FUELS.forEach(fuel => $("fuel").add(new Option(fuelName(fuel), fuel)));
  $("fuel").value = keep.fuel;

  $("condition").replaceChildren(new Option(t("choose"), ""));
  CONDITIONS.forEach(condition => $("condition").add(new Option(conditionName(condition), condition)));
  $("condition").value = keep.condition;

  fillCitySelect($("city"), t("selectCity"));

  $("brandList").replaceChildren(...BRANDS.map(brand => new Option(brand)));
  updateModelList();
}

function matchesBrand(car, brand) {
  return car.brand.toLowerCase() === brand.trim().toLowerCase();
}

function updateModelList() {
  const brand = $("brand").value;
  const models = [...new Set(CARS.filter(car => matchesBrand(car, brand)).map(car => car.series))].sort();
  $("modelList").replaceChildren(...models.map(model => new Option(model)));
}

/* ---------- Market guide: price range of similar cars in our own listing ---------- */
function updateGuide() {
  const brand = $("brand").value.trim();
  const model = $("model").value.trim().toLowerCase();
  const target = $("guideText");

  if (!brand) {
    target.textContent = t("guideEmpty");
    return;
  }
  const similar = CARS.filter(car =>
    matchesBrand(car, brand) && (!model || car.series.toLowerCase() === model)
  );
  if (!similar.length) {
    target.textContent = t("guideNone");
    return;
  }
  const prices = similar.map(car => car.price);
  const low = Math.min(...prices);
  const high = Math.max(...prices);
  target.textContent = t("guideFound")(similar.length, fmt(low), fmt(high));
}

/* ---------- Photos ---------- */
function syncPhotos() {
  const transfer = new DataTransfer();
  photos.forEach(file => transfer.items.add(file));
  $("photos").files = transfer.files;

  const thumbs = $("thumbs");
  thumbs.querySelectorAll("img").forEach(image => URL.revokeObjectURL(image.src));
  thumbs.replaceChildren();

  photos.forEach((file, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "thumb";

    const image = document.createElement("img");
    image.src = URL.createObjectURL(file);
    image.alt = file.name;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", t("remove"));
    remove.addEventListener("click", () => {
      photos.splice(index, 1);
      syncPhotos();
    });

    wrapper.append(image, remove);
    thumbs.appendChild(wrapper);
  });
}

$("photos").addEventListener("change", () => {
  const added = [...$("photos").files].filter(file => file.type.startsWith("image/"));
  photos = [...photos, ...added].slice(0, MAX_PHOTOS);
  syncPhotos();
});

/* ---------- Submit ---------- */
function renderSuccess() {
  if (!lastSubmission) return;
  $("successText").textContent = t("okText")(lastSubmission.name, lastSubmission.car, lastSubmission.email);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  /* DEMO: nothing is sent anywhere. To receive real requests, post `data`
     (it also contains the selected photos) to your own backend here, e.g.
     fetch("/api/sell", { method: "POST", body: data }) */
  lastSubmission = {
    name: data.get("name").trim(),
    email: data.get("email").trim(),
    car: `${data.get("brand").trim()} ${data.get("model").trim()} (${data.get("year")})`
  };
  renderSuccess();
  $("formPanel").hidden = true;
  $("success").hidden = false;
  $("success").scrollIntoView({ behavior: "smooth", block: "center" });
});

$("againBtn").addEventListener("click", () => {
  form.reset();
  photos = [];
  syncPhotos();
  updateModelList();
  updateGuide();
  lastSubmission = null;
  $("success").hidden = true;
  $("formPanel").hidden = false;
});

["brand", "model"].forEach(id => $(id).addEventListener("input", () => {
  if (id === "brand") updateModelList();
  updateGuide();
}));

initLanguage(() => {
  buildOptions();
  updateGuide();
  syncPhotos();
  renderSuccess();
});
