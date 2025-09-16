import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          buy: "Buy",
          charter: "Charter",
          destinations: "Destinations",
          offices: "Offices",
          news: "News",
          favorites: "Favorites",
          about: "About Us",
          contact: "Contact"
        },
        hero_title: "Explore the World's Finest Yachts",
        featured: "Featured Yachts",
        view_all: "View all"
      }
    },
    sq: {
      translation: {
        nav: {
          buy: "Bli",
          charter: "Chartero",
          destinations: "Destinacione",
          offices: "Zyra",
          news: "Lajme",
          favorites: "Të preferuarat",
          about: "About Us",
          contact: "Contact"
        },
        hero_title: "Eksploro Jahtet më të Mirë në Botë",
        featured: "Jahtet e Veçuar",
        view_all: "Shiko të gjitha"
      }
    },
    it: {
      translation: {
        nav: {
          buy: "Compra",
          charter: "Noleggia",
          destinations: "Destinazioni",
          offices: "Uffici",
          news: "Notizie",
          favorites: "Preferiti",
          about: "About Us",
          contact: "Contact"
        },
        hero_title: "Esplora gli yacht più belli del mondo",
        featured: "Yacht in Evidenza",
        view_all: "Vedi tutti"
      }
    }
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
