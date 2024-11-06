document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;

    const counterText = document.getElementById("counterText");
    counterText.textContent = counter;

    const decreaseButton = document.getElementById("decreaseButton");
    const resetButton = document.getElementById("resetButton");
    const increaseButton = document.getElementById("increaseButton");

    decreaseButton.addEventListener("click", function () {
        counter = counter - 1;
        counterText.textContent = counter;
    });

    resetButton.addEventListener("click", function () {
        counter = 0;
        counterText.textContent = counter;
    });

    increaseButton.addEventListener("click", function () {
        counter = counter + 1;
        counterText.textContent = counter;
    });
});
