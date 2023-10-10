'use strict'
console.log("cargado");

let cardSummary = document.querySelector('.card__summary');
{/* <div class="card__summary_score memory">
                <div class="card__summary_score_type">
                    <img src="img/icon-reaction.svg" alt="">
                    <p>Reaction</p>
                </div>
                <p class="card__summary_score-evaluation"><span>60</span> / 100</p>
            </div> */}


const getData = async () => {
    const obj = await fetch('/js/data.json');
    const data = await obj.json();
    let domElement;
    data.forEach(element => {
        console.log(element);
        domElement = displayScore(element);
        console.log("Dom element",domElement)
        cardSummary.appendChild(domElement)
    });

    displayBtn();
    return data;
}

const displayBtn = () =>{
    let btnSummary = document.createElement('button');
    btnSummary.textContent = "Continue"
    btnSummary.classList.add('card__summary_button')
    cardSummary.appendChild(btnSummary);
}

const displayScore = (scoreType) => {
    console.log("displayScore", scoreType)
    let container = document.createElement('div');
    container.classList.add("card__summary_score", scoreType.category.toLowerCase());
    
    let score = document.createElement('div')
    score.classList.add("card__summary_score_type");
    
    let icon = document.createElement('img');
    icon.src = scoreType.icon;
    score.appendChild(icon);

    let scoreParag = document.createElement('p');
    scoreParag.innerHTML = scoreType.category;
    score.appendChild(scoreParag);

    let scoreTotal = document.createElement('p');
    scoreTotal.classList.add("card__summary_score-evaluation");
    let scoreSpan = document.createElement('span');

    scoreSpan.innerHTML = " / 100";
    scoreTotal.textContent = scoreType.score;
    scoreTotal.appendChild(scoreSpan);


    container.appendChild(score);
    container.appendChild(scoreTotal);
    return container;
}


let data = getData();

console.log(data);