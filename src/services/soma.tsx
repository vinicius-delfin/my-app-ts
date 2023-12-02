export const soma = (number: number): number => {
    return number+ 1
}

export const multiplica = (number: number, mult: number): number | string => {
    if (mult === 2 || mult === 3) {
        return number * mult
    } else {
        return 'Multiplicador não aceito'
    }
}