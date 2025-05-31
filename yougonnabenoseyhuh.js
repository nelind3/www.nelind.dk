let howmanytimesyoudidthethingverycool = 0;

(() => {
    let localStorage = window.localStorage;
    let pfpElem = document.getElementsByClassName("pfp")[0];

    if (localStorage.getItem("youdidthethingitwasverycool")) {
        pfpElem.setAttribute("src", `https://placewaifu.com/image/200?dummyrandtofuckthebrowsercache=${Math.floor(Math.random() * 100)}`);
        return;
    } else {
        pfpElem.setAttribute("src", "pretty_nelly.png");
    }

    pfpElem.addEventListener("click", (e) => {
        howmanytimesyoudidthethingverycool++;
        if (howmanytimesyoudidthethingverycool >= 3) {
            localStorage.setItem("youdidthethingitwasverycool", true);
            if (pfpElem.getAttribute("src") === "pretty_nelly.png") {
                pfpElem.setAttribute("src", `https://placewaifu.com/image/200?dummyrandtofuckthebrowsercache=${Math.floor(Math.random() * 100)}`);
            }
        }
    });
})()
