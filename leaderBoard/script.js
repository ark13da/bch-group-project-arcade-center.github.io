// functions for filling tables
let pushToTable = (obj, table) => {
    let row = document.getElementById(table).insertRow(-1);
    row.insertCell(0).innerHTML = obj.gameScore;
    row.insertCell(1).innerHTML = obj.playerName;
    row.insertCell(2).innerHTML = obj.gameDate.slice(0, 10)
};

let tableMaker = (arr, tableID) => {
    arr.forEach(item => pushToTable(item, tableID));
}

// speed game fetching from localStorage and displaying in leaderboard
let indexLocalStorage = window.localStorage;
let speedGameScoreString = JSON.parse(indexLocalStorage.getItem("speedGame"));
let speedGameScoreArray = speedGameScoreString.sort((a, b) => {
    return b.gameScore - a.gameScore;
});

/*
// display scores as list
let speedGameScoreList = [];
speedGameScoreArray.forEach(i => {
    speedGameScoreList.push(`<li> ${i.gameScore} by ${i.playerName} on ${i.gameDate.slice(0,10)} </li>`)
})

document.getElementById("speedGameList").innerHTML = speedGameScoreList.join('');
*/

tableMaker(speedGameScoreArray, 'speedGameTable');

//cyclone game fetching from localStorage and displaying in leaderboard


//Jackpot game fetching from localStorage and displaying in leaderboard

