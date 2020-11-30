import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Title": "Miimosa Project List",
            "User": "User",
            "Collected": "Collected",
            "Project Title": "Project Details",
            "Status": "Status",
            "Back To List": "Back to project list"
        }
    },
    fr: {
        translation: {
            "Title": "Liste de projets Miimosa",
            "User": "Utilisateur",
            "Collected": "Collecté",
            "ProjectTitle": "Fiche projet",
            "Status": "Statut",
            "Back To List": "Retour à la liste de projets"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "eng",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;