export default (_, inject) => {
    inject('currentDate', () => new Intl.DateTimeFormat('en-US').format(new Date()))
}