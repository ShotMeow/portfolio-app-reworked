const getVerb = (days: number): string => {
    if (days % 10 === 1 && days % 100 !== 11) return 'день'
    else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) return 'дня'
    else return 'дней';
}

export const getDaysBeforeReturn = (): string => {
    const currentDate = new Date().getTime();
    const returnDate = new Date(2024, 6, 3).getTime();

    const days = Math.round((returnDate - currentDate) / (1000 * 60 * 60 * 24));

    return `${days} ${getVerb(days)}`;
}