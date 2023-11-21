export function roundInK(n: number) {
    if (n < 1000) {
        return n + "";
    } else {
        return Math.round(n / 1000) + "K";
    }
}