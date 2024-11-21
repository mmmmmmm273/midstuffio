//tabs
function setTab(selected) {
    document.querySelector("#main").style.visibility = "hidden"
    document.querySelector("#shop").style.visibility = "hidden"
    document.querySelector("#techs").style.visibility = "hidden"
    document.querySelector("#feat").style.visibility = "hidden"
    document.querySelector("#guild").style.visibility = "hidden"
    document.querySelector("#auction").style.visibility = "hidden"
    document.querySelector("#stats").style.visibility = "hidden"
    document.querySelector("#settings").style.visibility = "hidden"
    document.querySelector("#tutorial").style.visibility = "hidden"
    document.querySelector("#fishBTN").style.visibility = "hidden"
    document.querySelector("#fishInfBuy").style.visibility = "hidden"
    let allRanks = [
        // document.getElementsByClassName("rankP"),
        document.getElementsByClassName("rankS"),
        document.getElementsByClassName("rankA"),
        document.getElementsByClassName("rankB"),
        document.getElementsByClassName("rankC"),
        document.getElementsByClassName("rankD"),
        document.getElementsByClassName("rankE"),
        document.getElementsByClassName("tRankS"),
        document.getElementsByClassName("tRankA"),
        document.getElementsByClassName("tRankB"),
        document.getElementsByClassName("tRankC"),
        document.getElementsByClassName("tRankD"),
        document.getElementsByClassName("tRankE"),
    ]
    for (var i = 0; i < allRanks.length; i++) {
        let benRank = allRanks[i]
        for (var v = 0; v < benRank.length; v++) {
            benRank[v].style.visibility = "hidden"
        }
    }

    if (selected == "lake") {
        document.querySelector("#main").style.visibility = "visible"
        if (cFlip || fishInf) {
            document.querySelector("#fishInfBuy").style.visibility = "visible"
        }
        else document.querySelector("#fishBTN").style.visibility = "visible"
    }
    else if (selected == "shop") {
        document.querySelector("#shop").style.visibility = "visible"
        if (rank >= 1) {
            let classE = document.getElementsByClassName("rankE")
            for (var i = 0; i < classE.length; i++) {
                classE[i].style.visibility = "visible"
            }
        }
        if (rank >= 2) {
            let classD = document.getElementsByClassName("rankD")
            for (var i = 0; i < classD.length; i++) {
                classD[i].style.visibility = "visible"
            }
        }
        if (rank >= 3) {
            let classC = document.getElementsByClassName("rankC")
            for (var i = 0; i < classC.length; i++) {
                classC[i].style.visibility = "visible"
            }
        }
        if (rank >= 4) {
            let classB = document.getElementsByClassName("rankB")
            for (var i = 0; i < classB.length; i++) {
                classB[i].style.visibility = "visible"
            }
        }
        if (rank >= 5) {
            let classA = document.getElementsByClassName("rankA")
            for (var i = 0; i < classA.length; i++) {
                classA[i].style.visibility = "visible"
            }
        }
        if (rank >= 6) {
            let classC = document.getElementsByClassName("rankS")
            for (var i = 0; i < classC.length; i++) {
                classC[i].style.visibility = "visible"
            }
        }
    }
    else if (selected == "guild") {
        document.querySelector("#guild").style.visibility = "visible"
    }
    else if (selected == "tech") {
        document.querySelector("#techs").style.visibility = "visible"
        if (rank >= 1) {
            let classE = document.getElementsByClassName("tRankE")
            for (var i = 0; i < classE.length; i++) {
                classE[i].style.visibility = "visible"
            }
        }
        if (rank >= 2) {
            let classD = document.getElementsByClassName("tRankD")
            for (var i = 0; i < classD.length; i++) {
                classD[i].style.visibility = "visible"
            }
        }
        if (rank >= 3) {
            let classC = document.getElementsByClassName("tRankC")
            for (var i = 0; i < classC.length; i++) {
                classC[i].style.visibility = "visible"
            }
        }
        if (rank >= 4) {
            let classB = document.getElementsByClassName("tRankB")
            for (var i = 0; i < classB.length; i++) {
                classB[i].style.visibility = "visible"
            }
        }
        if (rank >= 5) {
            let classA = document.getElementsByClassName("tRankA")
            for (var i = 0; i < classA.length; i++) {
                classA[i].style.visibility = "visible"
            }
        }
        if (rank >= 6) {
            let classC = document.getElementsByClassName("tRankS")
            for (var i = 0; i < classC.length; i++) {
                classC[i].style.visibility = "visible"
            }
        }
    }
    else if (selected == "auction") document.querySelector("#auction").style.visibility = "visible"
    else if (selected == "feat") document.querySelector("#feat").style.visibility = "visible"
    else if (selected == "stat") document.querySelector("#stats").style.visibility = "visible"
    else if (selected == "tutorial") document.querySelector("#tutorial").style.visibility = "visible"
    else if (selected == "setting") document.querySelector("#settings").style.visibility = "visible"
}
document.querySelector("#lakeTab").addEventListener("click", (e) => {
    setTab("lake")
    document.querySelector("#lakeTab").innerHTML = "Lake"
})
document.querySelector("#shopTab").addEventListener("click", (e) => {
    setTab("shop")
    document.querySelector("#shopTab").innerHTML = "Shop"
})
document.querySelector("#guildTab").addEventListener("click", (e) => {
    setTab("guild")
    document.querySelector("#guildTab").innerHTML = "Guild"
})
let techTabClicked = false;
document.querySelector("#techTab").addEventListener("click", (e) => {
    setTab("tech");
    techTabClicked = true;
    document.querySelector("#techTab").innerHTML = "Techs";
})
let feaTabClicked = false;
document.querySelector("#feaTab").addEventListener("click", (e) => {
    setTab("feat");
    feaTabClicked = true;
    document.querySelector("#feaTab").innerHTML = "Feats";
})
let aucTabClicked = false;
document.querySelector("#aucTab").addEventListener("click", (e) => {
    setTab("auction")
    aucTabClicked = true;
    document.querySelector("#aucTab").innerHTML = "Auction"
})
document.querySelector("#staTab").addEventListener("click", (e) => {
    setTab("stat")
    document.querySelector("#settiTab").innerHTML = "Settings"
})
document.querySelector("#tutTab").addEventListener("click", (e) => {
    setTab("tutorial")
    document.querySelector("#tutTab").innerHTML = "Tutorial"
})
document.querySelector("#settiTab").addEventListener("click", (e) => {
    setTab("setting")
    document.querySelector("#settiTab").innerHTML = "Settings"
})

//inv
var inv = []
var maxInv = 10

//money
var money = 0
const moneyDisplay = document.querySelector("#cashDisplay")
function updateMoney(given) {
    money += given
    if (money == Infinity) moneyDisplay.innerHTML = "Cash: seven bazinjillion dollars"
    else moneyDisplay.innerHTML = `Cash: ${money}`
    if (doubleCash == true) moneyDisplay.innerHTML += " (2x)"
    if (money >= rankUpBTN.value) moneyDisplay.innerHTML += " [YOU CAN RANK UP, check the 'guild' tab for more info]"
    //feat get
    if (money >= 30000) getBigMoney()
    //update stats
    if (money <= rankUpBTN.value) {
        if (given > 0) {
            stat.moneyEarn += given;
            updateStat("moneyEarn", stat.moneyEarn);
        }
        else if (given < 0) {
            stat.moneySpend -= given;
            updateStat("moneySpend", stat.moneySpend);
        }
    }
}


//charges
var charges = 0
const chargeDisplay = document.querySelector("#chargeDisplay")
function updateCharges(given) {
    charges += given
    chargeDisplay.innerHTML = `Charges: ${charges}`
    //stattster
    if (given > 0) {
        stat.chargeEarn += given;
        updateStat("chargeEarn", stat.chargeEarn);
    }
    else {
        stat.chargeSpend -= given;
        updateStat("chargeSpend", stat.chargeSpend);
    }
}

//rank
var rank = 0
const rankDisplay = document.querySelector("#cRank")
function rankDo(temp, updateBool) { //returns rank as string
    let cRank = ""
    let tempRank = rank + temp
    if (tempRank == 0) {
        cRank = "F"
    }
    else if (tempRank == 1) {
        cRank = "E"
    }
    else if (tempRank == 2) {
        cRank = "D"
    }
    else if (tempRank == 3) {
        cRank = "C"
    }
    else if (tempRank == 4) {
        cRank = "B"
    }
    else if (tempRank == 5) {
        cRank = "A"
    }
    else if (tempRank == 6) {
        cRank = "S"
    }
    else if (tempRank == 7) {
        cRank = "P"
    }

    if (updateBool == true) {
        rankDisplay.innerHTML = `Rank: ${cRank}`
    }
    
    return cRank
}

//chances
var rareChance = 30
var epicChance = 5
var legeChance = 2
var champChance = 0.5
var chanceDisplay = document.querySelector("#chanceDisplay")
function updateChances() {
    chanceDisplay.innerHTML = `Chances:
    Rare: ${rareChance};
    Epic: ${epicChance};
    Legendary: ${legeChance};
    Mythical: ${champChance}`
}
updateChances()

//cgv
var maxOppValue = 0
var maxValueDisplay = document.querySelector("#maxValue")
function updateMaxValue() {
    if (!fishInf) {
        let rankPen = Math.ceil(minCGV/2)
        let currentMax = getRandomInt(1500 + rankPen)
        if (currentMax >= minCGV) {
            maxOppValue = currentMax
            maxValueDisplay.innerHTML = `MOBV: ${currentMax} <span class="tooltiptext">MAXIMUM OPPOSITION BET VALUE</span>`
        }
        else updateMaxValue()
    }
    else {
        maxOppValue = minCGV
        maxValueDisplay.innerHTML = `MOBV: ${maxOppValue} <span class="tooltiptext">MAXIMUM OPPOSITION BET VALUE</span>`
    }
}

//fishing
var completeVal = 0
var compValDisplay = document.querySelector("#totalValDisplay")
function updateTotalVal(amount) {
    completeVal += amount
    compValDisplay.innerHTML = `Total Value: ${completeVal}`
}
var totalChamps = 0 //feat stuf...
function getFish(r, e, l, c, amount, preset, method) {
    if (inv.length < maxInv && money >= amount) {
        
        updateMoney(-amount)
        if (preset) drop = preset
        else if (!cFlip) drop = lootFind(r, e, l, c)
        else drop = lootFind(0, 0, 40, 10)
        document.querySelector("#fishCa").innerHTML = "you got a " + drop.fish + ` (${drop.rarity} rarity)`
        inv.push(drop)
        updateTotalVal(drop.sellValue)
        updateMaxValue()
        document.querySelector("#result").innerHTML = "..."

        let myDiv = document.getElementById("myDiv");

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = inv.length;
        checkbox.name = "selling"

        let label = document.createElement('label');
        let br = document.createElement('br')
        label.value = inv.length;
        label.className = "sold"
        br.className = "soldBR"

        label.appendChild(document.createTextNode(`${drop.fish} (${drop.rarity}, ${drop.sellValue})`));
        myDiv.appendChild(checkbox);
        myDiv.appendChild(label);
        myDiv.appendChild(br)

        //FEAT STUFF OH YEAHHH
        if (drop.rarity == "mythical") {
            totalChamps += 1
        } 
        if (totalChamps == 10) {
            getFullH()
        }
        //stastuff....
        if (drop.rarity == "legendary" && method == "fish") {
            stat.legFishCatches++;
            updateStat("legFishCatches", stat.legFishCatches);
        }
        else if (drop.rarity == "legendary") {
            stat.legFishGets++;
            updateStat("legFishGets", stat.legFishGets);
        }
        else if (drop.rarity == "mythical" && method == "fish") {
            stat.champFishCatches++;
            updateStat("champFishCatches", stat.champFishCatches);
        }
        else if (drop.rarity == "mythical") {
            stat.champFishGets++;
            updateStat("champFishGets", stat.champFishGets);
        }
        return true
    }
    else {
        document.querySelector("#fishCa").innerHTML = `you got too much junk in your trunk broski`
        return false
    }
}
var eventDur = 0;
var eventBool = false;
var eventID = "";
var eventCost = 0;
const fishBTN = document.querySelector("#fishBTN");
fishBTN.addEventListener("click", (e) => {
    if (getFish(rareChance, epicChance, legeChance, champChance, eventCost, false, "fish")) {
        //rep events
        if (!eventBool) {
            if (stat.aucRep > 50 && getRandomInt(20) == 1) { //rng paycheck
                let paycheck = stat.aucRep*25+getRandomInt(100);
                updateMoney(paycheck);
                resultDisplay.innerHTML = `jimmster beast just gave you a ${paycheck}$ check!`;
            }
            else if (stat.aucRep > 40 && getRandomInt(18) == 1) { //rng robbery
                let robbery = stat.aucRep * 30 + getRandomInt(100);
                if (money-robbery < 0) resultDisplay.innerHTML = `someone tried to rob you for ${robbery}$, but you were too broke`;
                else {
                    updateMoney(-robbery);
                    resultDisplay.innerHTML = `someone stole ${robbery}$ from you!!`;
                }
            }
            else if (stat.aucRep < -20 && getRandomInt(24) == 1) doFishRepEvent(true, false, 2, "chargeCoupon");
            else if (stat.aucRep > 20 && getRandomInt(24) == 1) doFishRepEvent(true, false, 4, "chargeInflate");
            else if (stat.aucRep > 80 && getRandomInt(30) == 1 && !fishInf && !cFlip) doFishRepEvent(true, false, getRandomInt(2)+2, "fishCost");
        }
        else doFishRepEvent(false);
    }
    else if (money < eventCost) doFishRepEvent(false);
})
function doFishRepEvent(edit, endCE, dur, eID) {
    if (edit) {
        eventDur = dur;
        if (endCE) eventBool = false;
        else eventBool = true;
        eventID = eID;

        if (eID == "chargeCoupon") {
            if (!endCE) {
                chargeBuyBTN.value = `${chargeBuyBTN.value/2}`;
                chargeBuyBTN.innerHTML = `${chargeBuyBTN.value}$`;
                resultDisplay.innerHTML = `CHARGES ARE HALF OFF FOR ${dur} FISHINGS JUST FOR YOU!! BUY BUY BUY!!!`;
            }
            else if (endCE) {
                chargeBuyBTN.value = `${chargeBuyBTN.value*2}`;
                chargeBuyBTN.innerHTML = `${chargeBuyBTN.value}$`;
                resultDisplay.innerHTML = `CHARGE SALE IS OVER.....`;
            }
        }
        else if (eID == "chargeInflate") {
            if (!endCE) {
                chargeBuyBTN.value = `${chargeBuyBTN.value*2}`;
                chargeBuyBTN.innerHTML = `${chargeBuyBTN.value}$`;
                resultDisplay.innerHTML = `papple released a new LPhone, doubling the price of charges for ${dur} fishings!`;
            }
            else if (endCE) {
                chargeBuyBTN.value = `${chargeBuyBTN.value/2}`;
                chargeBuyBTN.innerHTML = `${chargeBuyBTN.value}$`;
                resultDisplay.innerHTML = `charge costs are normal again!`;
            }
        }
        else if (eID == "fishCost") {
            if (!endCE) {
                eventCost = Math.ceil(stat.aucRep*1.5+getRandomInt(200))
                fishBTN.innerHTML = `Fish (${eventCost}$)`
                resultDisplay.innerHTML = `fishes are now TAXED for ${dur} fishings!`;
            }
            else if (endCE) {
                eventCost = 0
                fishBTN.innerHTML = `Fish`
                resultDisplay.innerHTML = `no more!`;
            }
        }

    }
    else {
        eventDur--;
        console.log(eventDur);
        if (eventDur <= 0) doFishRepEvent(true, true, 0, eventID);
    }
}
document.querySelector("#fishInfBuy").addEventListener("click", (e) => {
    getFish(rareChance, epicChance, legeChance, champChance, 400)
})

function getRandomInt(max) {
    //includes 0
    return Math.floor(Math.random() * max);
}
function lootFind(rare, epic, lege, champ) {
    var dropF = {}
    dropF.isExisting = true;
    //loot tables
    const commonDrops = ["sea bass", "free bass", "salmon", "salben", "very free fish", "yawn squid", "firefisher", "skibidi salmon", "squiddo"]
    const rareDrops = ["squidwart", "squidmid", "midwart", "slightly bigger salmon", "slightly bigger bass", "freeben salbass", "fish rider"]
    const epicDrops = ["oiled squid", "baby shark 🤢", "juicy squid", "under-age-sea shark", "sharkDP445", "len", "giant skelefish", "lionfish"]
    const legeDrops = ["electra fishel", "muscular shark", "fat squid", "el goto", "special grade npc", "luck no pluck nomi", "salord of the seas", "midoraga"]
    const champDrops = ["ben", "el gato", "raged ebarb", "usb cable gojo", "mighty minor", "suluna the curse of kings", "good burger", "kaido", "baki", "thunder squid"]

    //roll
    const roll = getRandomInt(100)
    if (roll < champ) {
        dropF.fish =  champDrops[getRandomInt(champDrops.length)]
        dropF.rarity = "mythical"
        dropF.sellValue = 500
    }
    else if (roll <= lege) {
        dropF.fish = legeDrops[getRandomInt(legeDrops.length)]
        dropF.rarity = "legendary"
        dropF.sellValue = 250
    }
    else if (roll <= epic) {
        dropF.fish =  epicDrops[getRandomInt(epicDrops.length)]
        dropF.rarity = "epic"
        dropF.sellValue = 120
    }
    else if (roll <= rare) {
        dropF.fish =  rareDrops[getRandomInt(rareDrops.length)]
        dropF.rarity = "rare"
        dropF.sellValue = 90
    }
    else {
        dropF.fish =  commonDrops[getRandomInt(commonDrops.length)]
        dropF.rarity = "common"
        dropF.sellValue = 45
    }
    return dropF
}

document.querySelector("#selectAll").addEventListener("click", (e) => {
    var ele = document.getElementsByName('selling');
    for(var i=0; i<ele.length; i++) {  
        if(ele[i].type=='checkbox')  
        ele[i].checked=true;  
    }  
})
document.querySelector("#deselectAll").addEventListener("click", (e) => {
    var ele = document.getElementsByName('selling');
    for(var i=0; i<ele.length; i++) {  
        if(ele[i].type=='checkbox')  
        ele[i].checked=false;  
    }  
})

document.querySelector("#seller").addEventListener("click", (e) => {
    var boxes = document.getElementsByName('selling');
    var texts = document.getElementsByClassName('sold');
    for(var i = 0; i<boxes.length; i++){
        box = boxes[i];
        txt = texts[i];
        brs = document.getElementsByClassName("soldBR")[i]
        if (box.checked){
            let itemP = box.value - 1;
            if (inv[itemP].isExisting) {
                //update money
                updateMoney(inv[itemP].sellValue * doubleCashReturn());
                updateTotalVal(-inv[itemP].sellValue);
                //remove item from array
                inv[itemP].isExisting = false;
                maxInv = maxInv + 1;
                if (inv[itemP].rarity == "mythical") {
                    totalChamps -= 1
                }
            }
            //remove item from checkbox list
            box.style.display = "none"
            txt.style.display = "none"
            brs.style.display = "none"
        }
    }
})

//gamble
const resultDisplay = document.querySelector("#result");
document.querySelector("#gambler").addEventListener("click", (e) => {
    var boxes = document.getElementsByName('selling');
    var texts = document.getElementsByClassName('sold');
    var totalValueG = 0
    //feat stuff
    let epicCount = 0
    let legeCount = 0
    let eBarbs = false
    let champ = false
    //
    for (var i = 0; i<boxes.length; i++){
        box = boxes[i];
        txt = texts[i];
        brs = document.getElementsByClassName("soldBR")[i]
        if (box.checked){
            let itemP = box.value - 1
            if (inv[itemP].isExisting) {
                //FEATS CHECKING!!
                if (inv[itemP].rarity == "epic") epicCount += 1;
                else epicCount = 80085

                if (inv[itemP].rarity == "legendary") legeCount += 1

                if (inv[itemP].fish == "raged ebarb") eBarbs = true;

                if (inv[itemP].rarity == "mythical") {
                    champ = true;
                    totalChamps -= 1;
                }
                //add value to total
                totalValueG += inv[itemP].sellValue
                updateTotalVal(-inv[itemP].sellValue)
                //remove item from array
                inv[itemP].isExisting = false
                maxInv = maxInv + 1
            }
            //remove item from checkbox list
            box.style.display = "none"
            txt.style.display = "none"
            brs.style.display = "none"
        }
    }
    //feat yoink
    if (legeCount == 10 && doubleCash == true) {
        getAllLege()
    }
    //
    if (totalValueG > 0) {
        //the gamble
        let opposition = getRandomInt(maxOppValue)
        if (totalValueG > opposition) {
            let theGain = totalValueG * 2 + Math.floor(opposition/2)
            resultDisplay.innerHTML = `Your value: ${totalValueG}; Opposition value: ${opposition}; YOU WIN ${theGain} CASH`
            updateMoney(theGain*doubleCashReturn())
            //feat get
            if (epicCount == 1) {
                getOnlyEpic()
            }
            if (eBarbs == true) {
                getCRoyale()
            }
            //stat update
            stat.gambsWon++;
            updateStat("gambsWon", stat.gambsWon);
        }
        else if (totalValueG < opposition) {
            resultDisplay.innerHTML = `Your value: ${totalValueG}; Opposition value: ${opposition}; YOU LOST YOUR FISH HAHAHA`
            //feat get
            if (doubleCash == true && fishInf == true && cFlip == true) {
                getTechSold()
            }
            if (champ == true) {
                getSoldMyth()
            }
            //stat update
            stat.gambsLost++;
            updateStat("gambsLost", stat.gambsLost);
        }
        else {
            resultDisplay.innerHTML = `Your value: ${totalValueG}; Opposition value: ${opposition}; a tie???? well i GUESS you get a refund`
            updateMoney(totalValueG * doubleCashReturn())
        }
    }
})

const rareBuyBTN = document.querySelector("#rareBuy")
rareBuyBTN.addEventListener("click", (e) => {
    if (money >= rareBuyBTN.value && rareChance < maxRareChance) {
        updateMoney(-rareBuyBTN.value)
        rareChance += 1
        updateChances()
    }
})
const rareFishBuyBTN = document.querySelector("#rareFishBuy")
rareFishBuyBTN.addEventListener("click", (e) => {
    if (money >= rareFishBuyBTN.value && inv.length < maxInv) {
        updateMoney(-rareFishBuyBTN.value)
        getFish(100, 0, 0, 0, 0)
    }
})
const epicBuyBTN = document.querySelector("#epicBuy")
epicBuyBTN.addEventListener("click", (e) => {
    if (money >= epicBuyBTN.value && epicChance < maxEpicChance) {
        updateMoney(-epicBuyBTN.value)
        epicChance += 1
        updateChances()
    }
})
const epicFishBuyBTN = document.querySelector("#epicFishBuy")
const eFBV = document.querySelector("#epicFishBuy").value
epicFishBuyBTN.addEventListener("click", (e) => {
    if (money >= eFBV && inv.length < maxInv) {
        updateMoney(-eFBV);
        getFish(0, 100, 0, 0, 0);
    }
})
const legeBuyBTN = document.querySelector("#legeBuy")
legeBuyBTN.addEventListener("click", (e) => {
    if (money >= legeBuyBTN.value && legeChance < maxLegeChance) {
        updateMoney(-legeBuyBTN.value)
        legeChance += 1
        updateChances()
    }
})
const legeFishBuyBTN = document.querySelector("#legeFishBuy")
const lFBV = document.querySelector("#legeFishBuy").value
legeFishBuyBTN.addEventListener("click", (e) => {
    if (money >= lFBV && inv.length < maxInv) {
        updateMoney(-lFBV)
        getFish(0, 0, 100, 0, 0)
    }
})
const champBuyBTN = document.querySelector("#champBuy")
champBuyBTN.addEventListener("click", (e) => {
    if (money >= champBuyBTN.value && champChance < maxChampChance) {
        updateMoney(-champBuyBTN.value)
        champChance += 0.5
        updateChances()
    }
})
const champFishBuyBTN = document.querySelector("#champFishBuy")
const cFBV = document.querySelector("#champFishBuy").value
champFishBuyBTN.addEventListener("click", (e) => {
    if (money >= cFBV && inv.length < maxInv) {
        updateMoney(-cFBV)
        getFish(0, 0, 0, 100, 0)
    }
})

//rank up
var maxRareChance = 40
var maxEpicChance = 20
var maxLegeChance = 5
var maxChampChance = 2
var minCGV = 200
const rankUpBTN = document.querySelector("#buyRank")
const rankUpDisplay = document.querySelector("#buyRankDisplay")
const rankStats = document.querySelector("#rankStats")

rankUpBTN.addEventListener("click", (e) => {
    let rankUpReq = rankUpBTN.value
    if (money >= rankUpReq && rank < 7) {
        rank += 1
        minCGV += 50
        updateMoney(-money)
        loadRankUnlocks()
    }
})

function loadRankUnlocks() {
    if (rankDo(0, true) == "E") {
        rankUpDisplay.innerHTML = `Buy Rank ${rankDo(1, false)}`
        maxRareChance += 20
        rankStats.innerHTML = `Max Rare Chance: ${maxRareChance}; Max Epic Chance: ${maxEpicChance}; Minimum MOBV: ${minCGV};`
        rankUpBTN.value = Math.floor(rankUpBTN.value * 1.6)
        rankUpBTN.innerHTML = `${rankUpBTN.value}$`
    }
    else if(rankDo(0, true) == "D" ) {
        rankUpBTN.value = Math.floor(rankUpBTN.value * 1.6)
        rankUpBTN.innerHTML = `${rankUpBTN.value}$`
        rankUpDisplay.innerHTML = `Buy Rank ${rankDo(1, false)}`
        //visible techs
        document.querySelector("#techTab").style.visibility = "visible"
        //increase max chances
        maxEpicChance += 5
        rankStats.innerHTML = `Max Rare Chance: ${maxRareChance}; Max Epic Chance: ${maxEpicChance}; Minimum MOBV: ${minCGV};`
    }
    else if(rankDo(0, true) == "C" ) {
        rankUpBTN.value = Math.floor(rankUpBTN.value * 1.6)
        rankUpBTN.innerHTML = `${rankUpBTN.value}$`
        rankUpDisplay.innerHTML = `Buy Rank ${rankDo(1, false)}`
        //remove selling
        document.querySelector("#seller").style.display = "none"
        //visible auction
        document.querySelector("#aucTab").style.visibility = "visible"
        //increase max chances
        maxEpicChance += 5
        rankStats.innerHTML = `Max Rare Chance: ${maxRareChance}; Max Epic Chance: ${maxEpicChance}; Max Legendary Chance: ${maxLegeChance}; Minimum MOBV: ${minCGV};`
    }
    else if(rankDo(0, true) == "B" ) {
        rankUpBTN.value = Math.floor(rankUpBTN.value * 1.6)
        rankUpBTN.innerHTML = `${rankUpBTN.value}$`
        rankUpDisplay.innerHTML = `Buy Rank ${rankDo(1, false)}`
        //visible feats
        document.querySelector("#feaTab").style.visibility = "visible"
        //increase max chances
        maxLegeChance += 1
        rankStats.innerHTML = `Max Rare Chance: ${maxRareChance}; Max Epic Chance: ${maxEpicChance}; Max Legendary Chance: ${maxLegeChance}; Minimum MOBV: ${minCGV};`
    }
    else if(rankDo(0, true) == "A" ) {
        rankUpBTN.value = Math.floor(rankUpBTN.value * 1.6)
        rankUpBTN.innerHTML = `${rankUpBTN.value}$`
        rankUpDisplay.innerHTML = `Buy Rank ${rankDo(1, false)}`
        //increase max chances
        maxLegeChance += 1
        rankStats.innerHTML = `Max Rare Chance: ${maxRareChance}; Max Epic Chance: ${maxEpicChance}; Max Legendary Chance: ${maxLegeChance}; Max Mythical Chance: ${maxChampChance};<br> Minimum MOBV: ${minCGV};`
    }
    else if(rankDo(0, true) == "S" ) {
        rankUpDisplay.innerHTML = `Buy Rank ${rankDo(1, false)}`
        maxChampChance += 1
        rankStats.innerHTML = `Max Rare Chance: ${maxRareChance}; Max Epic Chance: ${maxEpicChance}; Max Legendary Chance: ${maxLegeChance}; Max Mythical Chance: ${maxChampChance};<br> Minimum MOBV: ${minCGV};`
        rankUpBTN.value = NaN
        rankUpBTN.innerHTML = "COMPLETE EVERY FEAT FIRST"
        pRankUnlock();
    }
    else if (rankDo(0, true) == "P") {
        document.querySelector("#guild").style.display = "none";
    }
}

//tech
const chargeBuyBTN = document.querySelector("#chargeBuy")
chargeBuyBTN.addEventListener("click", (e) => {
    if (money >= chargeBuyBTN.value) {
        updateMoney(-chargeBuyBTN.value);
        updateCharges(1);
    }
})
//double cash vv
var doubleCash = false
const doubleCashBTN = document.querySelector("#cash2x")
const dcashActivate = document.querySelector("#dcashActivate")
doubleCashBTN.addEventListener("click", (e) => {
    if (charges >= doubleCashBTN.value && doubleCash == false) {
        updateCharges(-doubleCashBTN.value)
        doubleCash = true
        updateMoney(0)
        dcashActivate.innerHTML = "(activated)";
        setTimeout(() => {
            doubleCash = false;
            updateMoney(0)
            dcashActivate.innerHTML = "(deactivated)";
        }, 30000);
    }
})
function doubleCashReturn() {
    if (doubleCash) return 2;
    else return 1;
}
//inflation vv
var fishInf= false
const fishInfBTN = document.querySelector("#fishInfl")
const fishInfActivate = document.querySelector("#finfActivate")
fishInfBTN.addEventListener("click", (e) => {
    //feat check
    var beforeMoney = money
    //rest of code
    if (charges >= fishInfBTN.value && fishInf == false) {
        updateCharges(-fishInfBTN.value)
        fishInf = true
        fishInfActivate.innerHTML = "(activated)"
    }
    else if (fishInf) {
        fishInf = false
        fishInfActivate.innerHTML = "(deactivated)"
        //real feat check
        let midFeatCheck = beforeMoney - 4000
        if (midFeatCheck < money) {
            getMidDepp()
        }
    }
})
//coin flip vv
var cFlip = false
const cFlipBTN = document.querySelector("#cFlipBTN")
const cFlipAct = document.querySelector("#cFlipAct")
cFlipBTN.addEventListener("click", (e) => {
    if (charges >= cFlipBTN.value && cFlip == false) {
        updateCharges(-cFlipBTN.value)
        cFlip = true;
        cFlipAct.innerHTML = "(activated)";
    }
    else if (cFlip == true) {
        cFlip = false;
        cFlipAct.innerHTML = "(deactivated)";
    }
})

//auction
var currentAuction = lootFind(rareChance, epicChance, legeChance, champChance)
var auctValue = currentAuction.sellValue
function updateAuct(r, e, l, c) {
    currentAuction = lootFind(r, e, l, c)
    if (getRandomInt(2) == 1) {
        auctValue = currentAuction.sellValue + getRandomInt(400)
    }
    else {
        auctValue = currentAuction.sellValue - getRandomInt(currentAuction.sellValue - 1)
    }
    document.querySelector("#cAuct").innerHTML = `Current Auction: ${currentAuction.fish}; Proposed Value: ${auctValue}`
    document.querySelector("#buyAuct").innerHTML = `${auctValue}$`
    getAucBTN.value = auctValue
}
const getAucBTN = document.querySelector("#buyAuct")
getAucBTN.addEventListener("click", (e) => {
    if (getFish(0, 0, 0, 0, getAucBTN.value, currentAuction)) {
        //start of some feat stuff
        if (currentAuction.rarity == "epic" && getAucBTN.value >= 500) {
            getCrypZ()
        }
        else if (currentAuction.rarity == "mythical" && getAucBTN.value <= 10) {
            getRobCh()
        }
        //increase aucrep
        let rareMod = 0.0;
        if (currentAuction.rarity == "epic") rareMod = 1.0
        else if (currentAuction.rarity == "legendary") rareMod = 1.1
        else if (currentAuction.rarity == "mythical") rareMod = 1.3
        stat.aucRep += Math.ceil(Math.sqrt(getAucBTN.value)*rareMod);
        if (stat.aucRep > 100) stat.aucRep = 100
        updateStat("aucRep", stat.aucRep);
        //
        updateAuct(0, 100, 30, 20)
    }
})
const rerollAucBTN = document.querySelector("#rerollA")
rerollAucBTN.addEventListener("click", (e) => {
    if (money >= rerollAucBTN.value) {
        updateMoney(-rerollAucBTN.value)
        updateAuct(0, 100, 30, 20)
        //decrease aucrep
        stat.aucRep -= Math.ceil(rerollAucBTN.value/15);
        if (stat.aucRep < -100) stat.aucRep = -100;
        updateStat("aucRep", stat.aucRep);
    }
})
const skewAucBTN = document.querySelector("#skewAuc")
skewAucBTN.addEventListener("click", (e) => {
    if (money >= skewAucBTN.value) {
        updateMoney(-skewAucBTN.value)
        //decrease aucrep
        stat.aucRep -= Math.ceil(skewAucBTN.value/10);
        if (stat.aucRep < -100) stat.aucRep = -100;
        updateStat("aucRep", stat.aucRep);
        //
        updateAuct(0, 0, 0, 100)
    }
})
const bribeBTN = document.querySelector("#bribe")
const briResult = document.querySelector("#bribeResult")
bribeBTN.addEventListener("click", (e) => {
    let briValue = parseInt(document.querySelector("#moneyBribe").value)
    if (briValue <= money && briValue > 0) {
        let tempOpp = getRandomInt(maxOppValue)
        updateMoney(-briValue)
        if (briValue >= tempOpp) {
            getAucBTN.value = Math.ceil(getAucBTN.value/2)
            document.querySelector("#cAuct").innerHTML = `Current Auction: ${currentAuction.fish}; Proposed Value: ${getAucBTN.value}`
            document.querySelector("#buyAuct").innerHTML = `${getAucBTN.value}$`
            briResult.innerHTML = `The auctioneer takes the money... the value was lowered to ${getAucBTN.value}`
            //decrease aucrep
            stat.aucRep -= Math.floor(briValue/100);
            if (stat.aucRep < -100) stat.aucRep = -100;
            updateStat("aucRep", stat.aucRep);
        }
        else if (briValue * 2 <= money && getRandomInt(3) == 1) {
            updateMoney(-Math.floor(money/4))
            briResult.innerHTML = `The auctioneer takes the money... THE COPS PULL UP AND TAKE A LARGE PORTION OF YOUR CASH`
            //decrease aucrep
            stat.aucRep -= 70;
            if (stat.aucRep < -100) stat.aucRep = -100;
            updateStat("aucRep", stat.aucRep);
        }
        else {
            briResult.innerHTML = `The auctioneer takes the money... he/she/they dipped`
            //decrease aucrep
            stat.aucRep -= Math.floor(briValue/25);
            if (stat.aucRep < -100) stat.aucRep = -100;
            updateStat("aucRep", stat.aucRep);
        }
    }
    else {
        getAucBTN.value = Math.ceil(getAucBTN.value*1.3)
        document.querySelector("#cAuct").innerHTML = `Current Auction: ${currentAuction.fish}; Proposed Value: ${getAucBTN.value}`
        document.querySelector("#buyAuct").innerHTML = `${getAucBTN.value}$`
        briResult.innerHTML = `The auctioneer rejects the money and raises the value because you're free`
    }
})
updateAuct(0, 100, 30, 20)

//feats
var bigMoney = false
function getBigMoney() {
    bigMoney = true
    document.querySelector("#bigMoney").innerHTML = "<em>Mr. Bazooki</em>: Have 30000 cash <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var midDepp = false
function getMidDepp() {
    midDepp = true
    document.querySelector("#midDepp").innerHTML = "<em>The Mid Deppression</em>: Have lost 4000 cash after Inflation <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var techSold = false
function getTechSold() {
    techSold = true
    document.querySelector("#allSell").innerHTML = "<em>Turbo Loser</em>: Lose a gamble with all Techs activated <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var onlyEpic = false
function getOnlyEpic() {
    onlyEpic = true
    document.querySelector("#onlyEpic").innerHTML = "<em>Very Epic</em>: Win a gamble with only an Epic Fish <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var allLege = false
function getAllLege() {
    allLege = true
    document.querySelector("#dcashSell").innerHTML = "<em>Big Guy</em>: Gamble 10 Legendary Fish during Double Cash <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var cRoyale = false
function getCRoyale() {
    cRoyale = true
    document.querySelector("#cRoyale").innerHTML = "<em>Mid-Ladder</em>: Win a gamble with raged ebarb <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var soldMyth = false
function getSoldMyth() {
    soldMyth = true
    document.querySelector("#mythSell").innerHTML = "<em>Lost Cause</em>: Gamble a Mythical Fish and still lose <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var fullH = false
function getFullH() {
    fullH = true
    document.querySelector("#fullH").innerHTML = "<em>Full House</em>: Have 10 Mythical Fish <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var crypZ = false
function getCrypZ() {
    crypZ = true
    document.querySelector("#crypZ").innerHTML = "<em>Logan Paul Scheme</em>: Buy an Epic Fish for 500$ or more <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}
var robCh = false
function getRobCh() {
    robCh = true
    document.querySelector("#cheapCh").innerHTML = "<em>Robbery</em>: Buy a Mythical Fish for 10$ or less <strong>(COMPLETE!!!)</strong>"
    pRankUnlock()
}


function pRankUnlock() {
    let allComplete = true
    let allFeats = [bigMoney, midDepp, techSold, onlyEpic, allLege, cRoyale, soldMyth, fullH, crypZ, robCh]
    for (var i = 0; i < allFeats.length; i++) {
        if (!allFeats[i]) {
            allComplete = false;
        };
    };
    if (allComplete && rankDo(0, false) == "S") {
        rankUpBTN.value = 50000;
        rankUpBTN.innerHTML = `${rankUpBTN.value}$`;
    }
}

//stats
var stat = {};
stat.aucRep = 0;
stat.moneyEarn = 0;
stat.moneySpend = 0;
stat.gambsWon = 0;
stat.gambsLost = 0;
stat.legFishGets = 0;
stat.legFishCatches = 0;
stat.champFishGets = 0;
stat.champFishCatches = 0;
stat.chargeEarn = 0;
stat.chargeSpend = 0;
function updateStat(statID, amount) {
    if (!rankDo(0, false) == "S" && !rankDo(0, false) == "P" || statID == "aucRep") {
        var statLabels = document.getElementsByClassName("clasStat");
        for (var i = 0; i < statLabels.length; i++) {
            if (statLabels[i].id == statID) {
                statLabels[i].innerHTML = amount;
                break;
            }
        }
    }
}

//settings 
let saveDebounce = false
document.querySelector("#saveP").addEventListener("click", (e) => {
    if (!saveDebounce) {
        localStorage.setItem("moneySave", money);
        localStorage.setItem("rankSave", rank);
        localStorage.setItem("chargeSave", charges);
        localStorage.setItem("rareSave", rareChance);
        localStorage.setItem("epicSave", epicChance);
        localStorage.setItem("legeSave", legeChance);
        localStorage.setItem("champSave", champChance);
        localStorage.setItem("techClicked", techTabClicked);
        localStorage.setItem("featClicked", feaTabClicked);
        localStorage.setItem("auClicked", aucTabClicked);

        localStorage.setItem("bigMoneySave", bigMoney);
        localStorage.setItem("midDeppSave", midDepp);
        localStorage.setItem("techSoldSave", techSold);
        localStorage.setItem("onlyEpicSave", onlyEpic);
        localStorage.setItem("allLegeSave", allLege);
        localStorage.setItem("cRoyaleSave", cRoyale);
        localStorage.setItem("soldMythSave", soldMyth);
        localStorage.setItem("fullHSave", fullH);
        localStorage.setItem("crypZSave", crypZ);
        localStorage.setItem("robCHSave", robCh);

        localStorage.setItem("aucRep", stat.aucRep)

        const saveCheck = document.querySelector("#saveCheck");
        const preSaveMessage = saveCheck.innerHTML
        saveCheck.innerHTML = "Saved!";
        saveDebounce = true;
        setTimeout(() => {
            document.querySelector("#saveCheck").innerHTML = preSaveMessage;
            saveDebounce = false;
        }, 2500)
    }
})
document.querySelector("#deleteP").addEventListener("click", (e) => {
    if(confirm("Are you sure?")) {
        if (confirm("Are you super sure?")) {
            localStorage.clear()
            alert("Bye bye!")
            location.reload()
        }
    }
})
//save load
const savedData = [
    localStorage.getItem("moneySave"),
    localStorage.getItem("rankSave"),
    localStorage.getItem("chargeSave"),
    [
        localStorage.getItem("bigMoneySave"),
        localStorage.getItem("midDeppSave"),
        localStorage.getItem("techSoldSave"),
        localStorage.getItem("onlyEpicSave"),
        localStorage.getItem("allLegeSave"),
        localStorage.getItem("cRoyaleSave"),
        localStorage.getItem("soldMythSave"),
        localStorage.getItem("fullHSave"),
        localStorage.getItem("crypZSave"),
        localStorage.getItem("robCHSave"),
    ],
    localStorage.getItem("rareSave"),
    localStorage.getItem("epicSave"),
    localStorage.getItem("legeSave"),
    localStorage.getItem("champSave"),
    localStorage.getItem("techClicked"),
    localStorage.getItem("featClicked"),
    localStorage.getItem("auClicked"),
    localStorage.getItem("aucRep")
];
//load money
if (savedData[0]) updateMoney(parseInt(savedData[0]));
//load rank
if (savedData[1]) {
    for (var i = 0; i < savedData[1]; i++) {
        rank += 1;
        loadRankUnlocks();
    };
};
//load charges
if (savedData[2]) updateCharges(parseInt(savedData[2]));
//load feats
if (savedData[3]) {
    const savedFeats = savedData[3]
    if (savedFeats[0] == "true") getBigMoney();
    if (savedFeats[1] == "true") getMidDepp();
    if (savedFeats[2] == "true") getTechSold();
    if (savedFeats[3] == "true") getOnlyEpic();
    if (savedFeats[4] == "true") getAllLege();
    if (savedFeats[5] == "true") getCRoyale();
    if (savedFeats[6] == "true") getSoldMyth();
    if (savedFeats[7] == "true") getFullH();
    if (savedFeats[8] == "true") getCrypZ();
    if (savedFeats[9] == "true") getRobCh();
}
//load chances
if (savedData[4]) rareChance = parseInt(savedData[4]);
if (savedData[5]) epicChance = parseInt(savedData[5]);
if (savedData[6]) legeChance = parseInt(savedData[6]);
if (savedData[7]) champChance = parseFloat(savedData[7]);
updateChances();
//load bold tabs
if (savedData[8] == "true") document.querySelector("#techTab").innerHTML = "Techs";
if (savedData[9] == "true") document.querySelector("#feaTab").innerHTML = "Feats";
if (savedData[10] == "true") document.querySelector("#aucTab").innerHTML = "Auction";
//load aucRep
if (savedData[11]) {
    stat.aucRep = parseInt(savedData[11]);
    updateStat("aucRep", stat.aucRep);
}
