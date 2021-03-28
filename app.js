let spoons = 0
let howMany = 1
let spoonGrabPower = 1
let spoonLevel = 1
let spoonMakers = 0
let spoonFactories = 0
let time = 2000

let marketPrice = 1

let money = 0
let grabCost = 10
let spoonCost = 1000
let makerCost = 100
let factoriesCost = 1000
let perfectSpoonCost = 1

//MAIN CLICK
function spoonCount() {
    spoons += howMany
    spoonDraw()
}

//SELL BUTTON
function sellSpoons() {
    money += spoons * (spoonLevel * marketPrice)
    spoons = 0
    spoonDraw()
    sellDraw()
}

//UPGRADES
function spoonGrab() {
    if (money >= grabCost) {
        money -= grabCost
        grabCost += 10
        howMany++
        spoonGrabPower++
        spoonGrabDraw()
        spoonGrabDrawCost()
        sellDraw()
        if (spoonGrabPower >= 100) {
            spoonGrabPower = 100
            spoonGrabDrawMax()
        }
    }
}

function spoonUpgrade() {
    if (money >= spoonCost) {
        money -= spoonCost
        spoonCost *= 10
        spoonLevel++
        spoonUpgradeDraw()
        spoonUpgradeDrawCost()
        spoonTypeDraw()
        sellDraw()
    }
}

function makeSpoonBot() {
    if (money >= makerCost) {
        money -= makerCost
        makerCost += 100
        spoonMakers++
        spoonMakersDraw()
        spoonMakersDrawCost()
        sellDraw()
        if (spoonMakers >= 100) {
            spoonMakers = 100
            spoonMakersDrawMax()
        }
    }
}

function makeSpoonFactory() {
    if (money >= factoriesCost) {
        money -= factoriesCost
        factoriesCost *= 2
        spoonFactories++
        spoonFactoriesDraw()
        spoonFactoriesDrawCost()
        sellDraw()
        time -= 400
        if (time == 0) {
            time = 100
            spoonFactoriesDrawMax()
        }
        clearInterval(autoSpoon)
        autoSpoon = setInterval(function autoMake() { spoons += spoonMakers; spoonDraw() }, time)
    }
}

//AUTOMATIONS
let autoSpoon = setInterval(function autoMake() {
    spoons += spoonMakers; spoonDraw()
}, time)





let marketTimer = setInterval(
    function marketNum() {
        let marketRNG = Math.floor((Math.random() * 7) + 1);
        if (marketRNG > marketPrice) { highPriceDraw() }
        if (marketRNG < marketPrice) { lowPriceDraw() }
        if (marketRNG == marketPrice) { noChangeDraw() }
        marketPrice = marketRNG
        marketPriceDraw()
    }, 3000)






//DRAW FUNCTIONS
function spoonDraw() {
    document.getElementById('howManySpoons').innerText = `${spoons}`
}
function sellDraw() {
    document.getElementById('money').innerText = `$${money}`
}





function spoonGrabDraw() {
    document.getElementById('spoonGrabPower').innerText = `${spoonGrabPower}`
}
function spoonGrabDrawCost() {
    document.getElementById('spoonGrabPowerCost').innerText = `${grabCost}`
}
function spoonGrabDrawMax() {
    document.getElementById('spoonGrabDrawMax').innerHTML = `<button class="button"><b>UPGRADE</b><br><span>MAX</span></button>`
}





function spoonUpgradeDraw() {
    document.getElementById('spoonLevel').innerText = `${spoonLevel}`
}
function spoonUpgradeDrawCost() {
    document.getElementById('spoonLevelCost').innerText = `${spoonCost}`
}

function spoonTypeDraw() {
    if (spoonLevel == 2) {
        document.getElementById('spoonType').innerHTML = `<img class="spoon" src="./assets/spoon-click-wood.png" onclick="spoonCount()">`
    }
    if (spoonLevel == 3) {
        document.getElementById('spoonType').innerHTML = `<img class="spoon" src="./assets/spoon-click-silver.png" onclick="spoonCount()">`
    }
    if (spoonLevel == 4) {
        document.getElementById('spoonType').innerHTML = `<img class="spoon" src="./assets/spoon-click-gold.png" onclick="spoonCount()">`
    }
    if (spoonLevel == 5) {
        document.getElementById('spoonType').innerHTML = `<img class="spoon" src="./assets/spoon-click-diamond.png" onclick="spoonCount()">`
        spoonMaxDraw()
        perfectSpoonDraw()
    }
}
function spoonMaxDraw() {
    document.getElementById('spoonMax').innerHTML = `<button class="button"><b>UPGRADE</b><br><span>MAX</span></button>`
}
function perfectSpoonDraw() {
    document.getElementById('perfectButton').innerHTML = `<div class="row py-4 d-flex flex-column align-items-center"><div class="col-3 d-flex flex-column align-items-center card shadow secondary-t2 primary-b py-2"><h6>THE PERFECT SPOON</h6><button class="button" onclick="endGame()">ALL YOUR MONEY</button></div></div>`
}





function spoonMakersDraw() {
    document.getElementById('spoonMakers').innerText = `${spoonMakers}`
}
function spoonMakersDrawCost() {
    document.getElementById('spoonMakersCost').innerText = `${makerCost}`
}
function spoonMakersDrawMax() {
    document.getElementById('spoonMakersDrawMax').innerHTML = `<button class="button"><b>UPGRADE</b><br><span>MAX</span></button>`
}





function spoonFactoriesDraw() {
    document.getElementById('spoonFactories').innerText = `${spoonFactories}`
}
function spoonFactoriesDrawCost() {
    document.getElementById('spoonFactoriesCost').innerText = `${factoriesCost}`
}
function spoonFactoriesDrawMax() {
    document.getElementById('spoonFactoriesMax').innerHTML = `<button class="button"><b>UPGRADE</b><br><span>MAX</span></button>`
}

function marketPriceDraw() {
    document.getElementById('marketPrice').innerHTML = `<span>$${marketPrice}.00</span>`
}
function highPriceDraw() {
    document.getElementById('marketPriceIcon').innerHTML = `<i class="green fas fa-chevron-up"></i>`
}
function lowPriceDraw() {
    document.getElementById('marketPriceIcon').innerHTML = `<i class="red fas fa-chevron-down"></i>`
}
function noChangeDraw() {
    document.getElementById('marketPriceIcon').innerHTML = `<i class="grey-t fas fa-minus"></i>`
}






//Music
function play0() {
    let audio0 = document.getElementById("audio0");
    audio0.play();
}
function play1() {
    let audio1 = document.getElementById("audio1");
    audio1.play();
}
function play2() {
    let audio2 = document.getElementById("audio2");
    audio2.play();
}
function mute() {
    let audio = document.getElementById("audio0");
    let audio1 = document.getElementById("audio1");
    let audio2 = document.getElementById("audio2");
    audio.pause();
    audio.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
}

//THE RUSE
function showtimeSpoon() {
    let element = document.getElementById("theSpoon");
    element.classList.remove("gonzo");
    element.classList.add("woosh-appear");
}
function showtime() {
    let element = document.getElementById("totalGame");
    element.classList.remove("gonzo");
    element.classList.add("appear");
}
function moonGone() {
    let element = document.getElementById("moon");
    element.classList.add("moon-gone");
}
function spoonShow() {
    let element = document.getElementById("spoonMoon");
    element.classList.remove("gonzo");
}
function finalFlavor() {
    let element = document.getElementById("clickTheSpoon");
    element.classList.remove("gonzo");
}
function removeGame() {
    setTimeout(function getGone() {
        let element = document.getElementById("removeMoon");
        element.classList.add("gonzo");
    }, 15000)
}
function finalFlavor() {
    let element = document.getElementById("clickTheSpoon");
    element.classList.remove("gonzo");
}


//END GAME
function endGame() {
    if (money >= perfectSpoonCost) {
        endGame1()
        endGame2()
        mute()
    }
}
function endGame1() {
    let element = document.getElementById("totalGame");
    element.classList.add("gonzo");
}
function endGame2() {
    let element = document.getElementById("endGame");
    element.classList.remove("gonzo");
}

