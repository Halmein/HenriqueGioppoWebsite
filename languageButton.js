let btnChangeLanguage = document.getElementById("languageBtn");
let currentLanguage = "pt-br";
let p = document.querySelector("p");

btnChangeLanguage.addEventListener("click", () => {
    if (currentLanguage === "pt-br") {
        p.textContent = "ENG";
        currentLanguage = "en";
    }
    else {
        p.textContent = "PTBR";
        currentLanguage = "pt-br";
    }
});