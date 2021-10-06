//counters
let headsCount = 0;
let tailsCount = 0;

//html elements:
let pennyFlipBtn = document.querySelector("#penny-flip-btn");
let clearBtn = document.querySelector("#clear-scoreboard");
let pennyImg = document.querySelector("#penny-img");

//image variables
let pennyHeadsImage = "assests/images/penny-heads.jpg";
let pennyTailsImage = "assests/images/penny-tails.jpg";
let resultheader = document.querySelector(".result-header");
let resultOneCnt = document.querySelector(".result-one-cnt");
let resultTwoCnt = document.querySelector(".result-two-cnt");
let resultOnePercent = document.querySelector(".result-one-percent");
let resultTwoPercent = document.querySelector(".result-two-percent");

//event listeners:

pennyFlipBtn.addEventListener("click", function(){
    
    //Math.random()
    let randomNumber = Math.ceil(Math.random()*2);

    if(randomNumber === 1){
        // update image tag src
        pennyImg.setAttribute("src", pennyHeadsImage);
        // update the h2 with result
        resultheader.textContent = "You Flipped Heads!"
        //update the counter
        headsCount = headsCount + 1;
        // set table cell value to updated count
        resultOneCnt.textContent = headsCount;
        // calcualte percentage = count/total * 100
        let percentage = headsCount/(headsCount+tailsCount) * 100;
        resultOnePercent.textContent = Math.round(percentage) + "%";

    }else {
        // update image tag src
        pennyImg.setAttribute("src", pennyTailsImage);
        // update the h2 with result
        resultheader.textContent = "You Flipped Tails!";
        //update the counter
        tailsCount = tailsCount + 1;
        // set table cell value to updated count
        resultTwoCnt.textContent = tailsCount;
        // calcualte percentage = count/total * 100
        let percentage = tailsCount/(headsCount+tailsCount) * 100;
        resultTwoPercent.textContent = percentage;
        resultTwoPercent.textContent = Math.round(percentage) + "%";
    }
});



clearBtn.addEventListener("click", function(){
    resultheader.textContent = "Let's get rolling!";
    headsCount = 0;
    tailsCount = 0;

    //reset heads count/percentage
    resultOneCnt.textContent = headsCount;
    percentage = headsCount/(headsCount+tailsCount) * 100;
    resultOnePercent.textContent = "0 %";
    
    //reset tails count/percentage
    resultTwoCnt.textContent = tailsCount;
    percentage = tailsCount/(headsCount+tailsCount) * 100;
    resultTwoPercent.textContent = "0 %";
});