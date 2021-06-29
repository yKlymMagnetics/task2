export default (_, inject) => {
    inject('currentDate', () => {
        const date = new Date();
        return `${date.getHours()} : ${date.getMinutes()}, ${date.getDate()} ${date.getMonth()}`
    })
}