// Manually add the curated dapps
const dappContainer = document.querySelector(".dappContainer");
const dapps = [
    { name: "Uniswap", icon: "icons/uniswap.png", link: "https://uniswap.org/" },
    { name: "Friend.Tech", icon: "icons/friendtech.png", link: "https://friend.tech/" },
    { name: "Lens", icon: "icons/lens.png", link: "https://lens.eth/" },
    { name: "PoolTogether", icon: "icons/pooltogether.png", link: "https://pooltogether.com/" },
    { name: "Instadapp", icon: "icons/instadapp.png", link: "https://instadapp.io/" },
    { name: "CoinTracker", icon: "icons/cointracker.png", link: "https://www.cointracker.io/" },
    { name: "ENS", icon: "icons/ens.png", link: "https://ens.domains/" },
    { name: "Showtime", icon: "icons/showtime.png", link: "https://tryshowtime.com/" }
];

dapps.forEach(dapp => {
    const dappDiv = document.createElement("div");
    dappDiv.className = "dapp";
    dappDiv.addEventListener("click", () => window.open(dapp.link, "_blank"));

    const dappIcon = document.createElement("img");
    dappIcon.src = dapp.icon;
    dappIcon.alt = dapp.name;

    const dappName = document.createElement("div");
    dappName.className = "dappName";
    dappName.textContent = dapp.name;

    dappDiv.appendChild(dappIcon);
    dappDiv.appendChild(dappName);
    dappContainer.appendChild(dappDiv);
});

// Slider functionality
let currentSlide = 0;
const slideLeftButton = document.getElementById("slideLeft");
const slideRightButton = document.getElementById("slideRight");

slideLeftButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        const offset = -300 * currentSlide * 4; // Assuming each dapp takes 300px and we have 4 visible at a time
        dappContainer.style.transform = `translateX(${offset}px)`;
    }
});

slideRightButton.addEventListener("click", () => {
    if (currentSlide < (dapps.length / 4) - 1) { // We have 4 dapps per slide
        currentSlide++;
        const offset = -100 * currentSlide; // Move by 100% of the container width for each slide
        dappContainer.style.transform = `translateX(${offset}%)`;
    }
});
