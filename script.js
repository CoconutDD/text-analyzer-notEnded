// to się wykona tylko raz, przy załadowaniu strony
document.getElementById("count-words").innerText = 0
document.getElementById("count-characters").innerText = 0
document.getElementById("count-characters-no-spaces").innerText = 0
document.getElementById("longest-word").innerText = 0
document.getElementById("average-word").innerText = 0
// funkcja nie wykona się, dopóki jej nie wywołamy.
// Możemy używać jej ile razy chcemy
function analyze() {
    console.log("analizuję...")

    const text = document.getElementById("user-input").value;
    const textTrimmed = text.trim();
    const words = textTrimmed.split(" ");

    

    document.getElementById("count-words").innerText = words.length;

    document.getElementById("count-characters").innerText = text.length;

// liczba znakow bez spacji
    let counter = 0
    for (let i = 0; i < textTrimmed.length; i++) {
        const letter = textTrimmed.charAt(i);
    if (letter !== ' '){
        counter += 1
    }
    }
    document.getElementById("count-characters-no-spaces").innerText = counter
    //najdlusze slowo
    if(words.length > 0) {
        let theLongWord = words[0];
        for (let i = 1; i < words.length; i++) {
            if(words[i].length > theLongWord.length) {
                theLongWord = words[i];
            }
        }
        document.getElementById("longest-word").innerText = theLongWord;
    }
    
}
