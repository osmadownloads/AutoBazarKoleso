/* ============================================================
   Contact page – needs i18n.js and data.js loaded first
   ============================================================ */
addStrings({
  en: {
    pageTitle: "Contact – AutoBazár Koleso",
    heroTitle: "Get in touch",
    heroDescription: "Questions about a car, selling or financing? Send us a message and we will reply within one business day.",
    detailsTitle: "Contact details",
    cPhone: "Phone",
    cEmail: "Email",
    cHours: "Opening hours",
    cHoursValue: "Mon–Fri 9:00–18:00, Sat 9:00–13:00",
    cOffice: "Head office",
    formTitle: "Send us a message",
    formLead: "Fields marked * are required.",
    fName: "Full name",
    fEmail: "Email",
    fPhone: "Phone",
    optional: "optional",
    fTopic: "Topic",
    topicBuy: "Buying a car",
    topicSell: "Selling my car",
    topicFinancing: "Financing",
    topicOther: "Something else",
    fCar: "Car you are interested in",
    noCar: "No specific car",
    fMessage: "Message",
    phMessage: "How can we help?",
    consent: "I agree to be contacted and to the processing of my data.",
    submit: "Send message",
    okTitle: "Message sent!",
    okText: (name, email) => `Thank you, ${name}. We will reply to ${email} within one business day.`,
    again: "Send another message",
    branchesTitle: "Our showrooms",
    branchesLead: "Visit us in any of 12 European cities. Addresses are placeholders – replace them with your own."
  },
  sk: {
    pageTitle: "Kontakt – AutoBazár Koleso",
    heroTitle: "Ozvite sa nám",
    heroDescription: "Máte otázku k autu, predaju alebo financovaniu? Napíšte nám a odpovieme do jedného pracovného dňa.",
    detailsTitle: "Kontaktné údaje",
    cPhone: "Telefón",
    cEmail: "E-mail",
    cHours: "Otváracie hodiny",
    cHoursValue: "Po–Pi 9:00–18:00, So 9:00–13:00",
    cOffice: "Sídlo",
    formTitle: "Napíšte nám",
    formLead: "Polia označené * sú povinné.",
    fName: "Meno a priezvisko",
    fEmail: "E-mail",
    fPhone: "Telefón",
    optional: "nepovinné",
    fTopic: "Téma",
    topicBuy: "Kúpa auta",
    topicSell: "Predaj môjho auta",
    topicFinancing: "Financovanie",
    topicOther: "Niečo iné",
    fCar: "Vozidlo, o ktoré mám záujem",
    noCar: "Žiadne konkrétne vozidlo",
    fMessage: "Správa",
    phMessage: "Ako vám môžeme pomôcť?",
    consent: "Súhlasím s kontaktovaním a so spracovaním osobných údajov.",
    submit: "Odoslať správu",
    okTitle: "Správa odoslaná!",
    okText: (name, email) => `Ďakujeme, ${name}. Odpovieme vám na ${email} do jedného pracovného dňa.`,
    again: "Odoslať ďalšiu správu",
    branchesTitle: "Naše predajne",
    branchesLead: "Navštívte nás v ktoromkoľvek z 12 európskych miest. Adresy sú ukážkové – nahraďte ich vlastnými."
  },
  ru: {
    pageTitle: "Контакты — AutoBazár Koleso",
    heroTitle: "Свяжитесь с нами",
    heroDescription: "Есть вопрос по автомобилю, продаже или финансированию? Напишите нам — ответим в течение одного рабочего дня.",
    detailsTitle: "Контактные данные",
    cPhone: "Телефон",
    cEmail: "Эл. почта",
    cHours: "Часы работы",
    cHoursValue: "Пн–Пт 9:00–18:00, Сб 9:00–13:00",
    cOffice: "Главный офис",
    formTitle: "Напишите нам",
    formLead: "Поля, отмеченные *, обязательны.",
    fName: "Имя и фамилия",
    fEmail: "Эл. почта",
    fPhone: "Телефон",
    optional: "необязательно",
    fTopic: "Тема",
    topicBuy: "Покупка автомобиля",
    topicSell: "Продажа моего автомобиля",
    topicFinancing: "Финансирование",
    topicOther: "Другое",
    fCar: "Интересующий автомобиль",
    noCar: "Без конкретного автомобиля",
    fMessage: "Сообщение",
    phMessage: "Чем мы можем помочь?",
    consent: "Согласен(на) на связь и обработку персональных данных.",
    submit: "Отправить сообщение",
    okTitle: "Сообщение отправлено!",
    okText: (name, email) => `Спасибо, ${name}. Мы ответим на ${email} в течение одного рабочего дня.`,
    again: "Отправить ещё одно",
    branchesTitle: "Наши автосалоны",
    branchesLead: "Приезжайте в любой из 12 городов Европы. Адреса — условные, замените их своими."
  }
});

/* Placeholder showroom addresses – replace with your real ones */
const BRANCHES = [
  ["Bratislava", "Slovakia", "Hlavná 12"],
  ["Prague", "Czechia", "Vinohradská 24"],
  ["Munich", "Germany", "Leopoldstraße 45"],
  ["Berlin", "Germany", "Kantstraße 18"],
  ["Vienna", "Austria", "Mariahilfer Straße 60"],
  ["Budapest", "Hungary", "Váci út 33"],
  ["Warsaw", "Poland", "Puławska 21"],
  ["Brussels", "Belgium", "Rue Neuve 9"],
  ["Amsterdam", "Netherlands", "Overtoom 120"],
  ["Paris", "France", "Rue de Rivoli 55"],
  ["Madrid", "Spain", "Calle de Serrano 40"],
  ["Milan", "Italy", "Via Torino 17"]
];

const $ = id => document.getElementById(id);
const form = $("contactForm");
const params = new URLSearchParams(location.search);
const wantedCar = carFromQuery("car");
let lastMessage = null;

function buildSelects() {
  const topic = $("topic").value || (wantedCar ? "buy" : params.get("topic")) || "buy";
  $("topic").replaceChildren(
    new Option(t("topicBuy"), "buy"),
    new Option(t("topicSell"), "sell"),
    new Option(t("topicFinancing"), "financing"),
    new Option(t("topicOther"), "other")
  );
  $("topic").value = ["buy", "sell", "financing", "other"].includes(topic) ? topic : "buy";

  const selectedCar = $("car").value || (wantedCar ? String(wantedCar.id) : "");
  const cars = [...CARS].sort((a, b) => carName(a).localeCompare(carName(b)) || a.year - b.year);
  $("car").replaceChildren(
    new Option(t("noCar"), ""),
    ...cars.map(car => new Option(`${carName(car)} (${car.year}) – € ${fmt(car.price)}`, car.id))
  );
  $("car").value = selectedCar;
}

function renderBranches() {
  $("branches").innerHTML = BRANCHES.map(([city, country, street]) => `
    <div class="branch">
      <strong>${cityName(city)}</strong>
      <span>${countryName(country)}</span>
      <span>${street}</span>
    </div>`).join("");
  $("office").textContent = `${cityName("Bratislava")}, ${countryName("Slovakia")}`;
}

function renderSuccess() {
  if (!lastMessage) return;
  $("successText").textContent = t("okText")(lastMessage.name, lastMessage.email);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  /* DEMO: nothing is sent anywhere. Post `data` to your own backend or an
     email/form service here, e.g. fetch("/api/contact", { method: "POST", body: data }) */
  lastMessage = { name: data.get("name").trim(), email: data.get("email").trim() };
  renderSuccess();
  $("formPanel").hidden = true;
  $("success").hidden = false;
  $("success").scrollIntoView({ behavior: "smooth", block: "center" });
});

$("againBtn").addEventListener("click", () => {
  form.reset();
  buildSelects();
  lastMessage = null;
  $("success").hidden = true;
  $("formPanel").hidden = false;
});

initLanguage(() => {
  buildSelects();
  renderBranches();
  renderSuccess();
});
