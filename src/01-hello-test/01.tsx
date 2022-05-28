export function sum (a:number, b:number) {
    return a + b;
}

export function multiply (a:number, b:number) {
    return a * b;
}

export function splitIntoWords (sentence: string) {
    return sentence.toLowerCase().split(" ").map(w=>w.replace("!",""));
}













