export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence: string) {
    const word = sentence.toLowerCase().split(" ")

    return word.filter(w => w !== "" && w !== "-")
        .map(w => w
            .replace("!", "")
            .replace(".", "")
            .replace(",", ""));
}













