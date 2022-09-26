let turn = 1;
function gameInit() {


    let gameStatus = 1;
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.innerText = ""
    })
    document.querySelector('.result').innerHTML = ""
    boxes.forEach(box => {
        box.addEventListener('mousedown', function () {
            if (gameStatus === 1) {

                turn == 1 ? box.innerText = "x" : box.innerText = "o"
                turn == 1 ? turn = 2 : turn = 1
                checkWinCondition()
            }
        }, { once: true })
    });


    function checkWinCondition() {
        turn == 1 ? document.querySelector('h2').innerText = "X TURN" : document.querySelector('h2').innerText = "O TURN"

        if (boxes[0].innerText === "X" && boxes[1].innerText === "X" && boxes[2].innerText === "X" ||
            boxes[3].innerText === "X" && boxes[4].innerText === "X" && boxes[5].innerText === "X" ||
            boxes[6].innerText === "X" && boxes[7].innerText === "X" && boxes[8].innerText === "X" ||
            boxes[0].innerText === "X" && boxes[3].innerText === "X" && boxes[6].innerText === "X" ||
            boxes[1].innerText === "X" && boxes[4].innerText === "X" && boxes[7].innerText === "X" ||
            boxes[2].innerText === "X" && boxes[5].innerText === "X" && boxes[8].innerText === "X" ||
            boxes[0].innerText === "X" && boxes[4].innerText === "X" && boxes[8].innerText === "X" ||
            boxes[2].innerText === "X" && boxes[4].innerText === "X" && boxes[6].innerText === "X"
        ) {
            document.querySelector('.result').innerHTML = "<p style='margin:0;padding:0;color:green;white-space: nowrap;font-size:2rem;'>X WINNER!</p><button type='button' id='minigameResetBtn' onclick='gameInit()'>Reset</button>"
            document.querySelector('.X').innerText = parseInt(document.querySelector('.X').innerText) + 1
            gameStatus = 2
            boxes.forEach(box => {
                box.removeEventListener("mousedown", function () { })
            })

        }

        if (boxes[0].innerText === "O" && boxes[1].innerText === "O" && boxes[2].innerText === "O" ||
            boxes[3].innerText === "O" && boxes[4].innerText === "O" && boxes[5].innerText === "O" ||
            boxes[6].innerText === "O" && boxes[7].innerText === "O" && boxes[8].innerText === "O" ||
            boxes[0].innerText === "O" && boxes[3].innerText === "O" && boxes[6].innerText === "O" ||
            boxes[1].innerText === "O" && boxes[4].innerText === "O" && boxes[7].innerText === "O" ||
            boxes[2].innerText === "O" && boxes[5].innerText === "O" && boxes[8].innerText === "O" ||
            boxes[0].innerText === "O" && boxes[4].innerText === "O" && boxes[8].innerText === "O" ||
            boxes[2].innerText === "O" && boxes[4].innerText === "O" && boxes[6].innerText === "O"
        ) {
            document.querySelector('.result').innerHTML = "<p style='margin:0;padding:0;color:red;white-space: nowrap;font-size:2rem;'>O WINNER!</p><button type='button' id='minigameResetBtn' onclick='gameInit()'>Reset</button>"
            gameStatus = 2
            document.querySelector('.O').innerText = parseInt(document.querySelector('.O').innerText) + 1
        }

        if (gameStatus === 1 &&
            boxes[0].innerText.length > 0 && boxes[1].innerText.length > 0 && boxes[2].innerText.length > 0 &&
            boxes[3].innerText.length > 0 && boxes[4].innerText.length > 0 && boxes[5].innerText.length > 0 &&
            boxes[6].innerText.length > 0 && boxes[7].innerText.length > 0 && boxes[8].innerText.length > 0
        ) {
            document.querySelector('.result').innerHTML = "<p style='margin:0;padding:0;color:white;'>TIE</p><button type='button' id='minigameResetBtn' onclick='gameInit()'>Reset</button>"
            document.querySelector('.TIE').innerText = parseInt(document.querySelector('.TIE').innerText) + 1
        }

    }
}
if(window.location.pathname==="/minigame"){
    gameInit()
}