const fullStorage = document.getElementById("freeStorage");
const freeStorage = document.getElementById("first");
const range = document.querySelector(".data");

range.addEventListener("input", () => {
    const value = range.value;
    fullStorage.textContent = `${value} GB`;
    freeStorage.textContent = 1000 - value;
});
