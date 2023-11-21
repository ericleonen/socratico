export function roundInK(n: number) {
    if (n < 1000) {
        return n + "";
    } else {
        return Math.round(n / 1000) + "K";
    }
}

export function parseIntMin(str: string, min: number) {
    const num = parseInt(str);

    if (isNaN(num) || num < min) {
        return min;
    } else {
        return num;
    }
}