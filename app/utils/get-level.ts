export function getLevel(progress: number) {
    if (progress === 100) return "Lenda desbloqueada";
    if (progress >= 75) return "Elite em formação";
    if (progress >= 50) return "Aventureiro experiente";
    if (progress >= 25) return "Recruta promissor";
    return "Início da missão";
}