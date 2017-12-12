document.addEventListener("DOMContentLoaded", function(event) {
    printHighScore();
});

const printHighScore = () => {
    const highScoreTable = document.getElementById("highscore-table");

    // create array of all keys from locan storage
    let keysArray = [];

    for (let i = 0; i < localStorage.length; i++) {
        keysArray[i] = localStorage.key(i);
    }

    for (let i = 0; i < keysArray.length; i++) {
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("id", `tableRow${i}`);

        highScoreTable.appendChild(tableRow);

        let tempRow = document.getElementById(`tableRow${i}`);

        let tempObject = JSON.parse(localStorage.getItem(keysArray[i]));

        let placeNum = document.createElement("td");
        placeNum.appendChild(document.createTextNode(i + 1));
        let name = document.createElement("td");
        name.appendChild(document.createTextNode(tempObject.name));
        let lastname = document.createElement("td");
        lastname.appendChild(document.createTextNode(tempObject.surname));
        let highscore = document.createElement("td");
        highscore.appendChild(document.createTextNode(tempObject.highscore));

        tempRow.appendChild(placeNum);
        tempRow.appendChild(name);
        tempRow.appendChild(lastname);
        tempRow.appendChild(highscore);
    }
};
