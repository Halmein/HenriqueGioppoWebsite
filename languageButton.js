let btnChangeLanguage = document.getElementById("languageBtn");
let currentLanguage = "pt-br";
let buttonText = document.querySelector("p");
let textResponse = '';
let text = document.getElementById("text");

async function fetchText() {
    try {
        if (currentLanguage === "en") {
            const response = await fetch("textEng.txt");
            textResponse = await response.text();
            text.textContent = textResponse;
            log("Text fetched successfully:", textResponse);
        }
        else {
            const response = await fetch("textPtBr.txt");
            textResponse = await response.text();
            text.textContent = textResponse;
            log("Text fetched successfully:", textResponse);
        }
    }
    catch (error) {
        console.error("Error fetching text:", error);
    }
}

btnChangeLanguage.addEventListener("click", () => {
    if (currentLanguage === "pt-br") {
        buttonText.textContent = "ENG";
        currentLanguage = "en";
        fetchText();
    }
    else {
        buttonText.textContent = "PTBR";
        currentLanguage = "pt-br";
        fetchText();
    }

});