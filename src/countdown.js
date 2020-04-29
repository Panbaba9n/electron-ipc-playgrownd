module.exports = function countdown(tick) {
    let count = 3;

    const timer = setInterval(() => {
        tick(count = count + -1);

        if (count ===0) {
            clearInterval(timer);
        }
    }, 1000);
}