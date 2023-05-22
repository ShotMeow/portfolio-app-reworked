export const getDaysBeforeReturn = () => {
    const currentDate = new Date().getTime();
    const returnDate = new Date(2024, 7, 3).getTime();

    return Math.round((returnDate - currentDate) / (1000 * 60 * 60 * 24));
}