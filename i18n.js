/* ============================================================
   Shared language support – loaded on every page BEFORE data.js
   ============================================================ */
const I18N = { en: {}, sk: {}, ru: {} };
const SUPPORTED_LANGUAGES = Object.keys(I18N);
const LANGUAGE_KEY = "autobazarkoleso-language";

/* Pages add their own strings with addStrings({ en: {...}, sk: {...}, ru: {...} }) */
function addStrings(pack) {
  Object.keys(pack).forEach(language => Object.assign(I18N[language], pack[language]));
}

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
  } catch (error) {
    /* storage can be blocked – fall back to English */
  }
  return "en";
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    /* ignore */
  }
}

let currentLanguage = readStoredLanguage();
const localeByLanguage = { en: "en-GB", sk: "sk-SK", ru: "ru-RU" };

const t = key => {
  const own = I18N[currentLanguage];
  if (own && key in own) return own[key];
  return key in I18N.en ? I18N.en[key] : key;
};
const fmt = n => n.toLocaleString(localeByLanguage[currentLanguage]);
const money = (n, decimals = 0) =>
  "€ " + n.toLocaleString(localeByLanguage[currentLanguage], {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

function translateStatic() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}

/* Wires up the language <select>, remembers the choice between pages,
   and calls onChange() after every (re)translation so the page can redraw. */
function initLanguage(onChange) {
  const select = document.getElementById("language");

  const apply = language => {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = t("pageTitle");
    translateStatic();
    select.setAttribute("aria-label", t("languageLabel"));
    if (onChange) onChange(language);
  };

  select.value = currentLanguage;
  select.addEventListener("change", event => {
    storeLanguage(event.target.value);
    apply(event.target.value);
  });
  apply(currentLanguage);
}

/* ---------- Strings shared by every page ---------- */
addStrings({
  en: {
    navBuy: "Buy",
    navSell: "Sell",
    navFinancing: "Financing",
    navContact: "Contact",
    languageLabel: "Language",
    footer: "© 2026 AutoBazár Koleso – demo website. Listings are sample data.",
    details: "Details",
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
    fuel: { Petrol: "Petrol", Diesel: "Diesel", Hybrid: "Hybrid", Electric: "Electric" },
    conditionNames: {
      "Like new": "Like new", Excellent: "Excellent", Good: "Good", Fair: "Fair",
      "Needs repair": "Needs repair"
    }
  },
  sk: {
    navBuy: "Kúpiť",
    navSell: "Predať",
    navFinancing: "Financovanie",
    navContact: "Kontakt",
    languageLabel: "Jazyk",
    footer: "© 2026 AutoBazár Koleso – ukážková webová stránka. Ponuka obsahuje ukážkové vozidlá.",
    details: "Detail",
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
    fuel: { Petrol: "Benzín", Diesel: "Diesel", Hybrid: "Hybrid", Electric: "Elektro" },
    conditionNames: {
      "Like new": "Ako nové", Excellent: "Výborný", Good: "Dobrý", Fair: "Uspokojivý",
      "Needs repair": "Vyžaduje opravu"
    }
  },
  ru: {
    navBuy: "Купить",
    navSell: "Продать",
    navFinancing: "Финансирование",
    navContact: "Контакты",
    languageLabel: "Язык",
    footer: "© 2026 AutoBazár Koleso — демонстрационный сайт. Объявления приведены для примера.",
    details: "Подробнее",
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
    fuel: { Petrol: "Бензин", Diesel: "Дизель", Hybrid: "Гибрид", Electric: "Электро" },
    conditionNames: {
      "Like new": "Как новый", Excellent: "Отличное", Good: "Хорошее", Fair: "Удовлетворительное",
      "Needs repair": "Требует ремонта"
    }
  }
});
