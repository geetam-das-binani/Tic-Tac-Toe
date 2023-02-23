let turn = "X";
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let music = new Audio("music.mp3");
let isgameover = false;

let changeturn = () => {
    if (turn == "X") {
        return "0";
    }
    else {
        return "X";
    }

}
let checkforwin = () => {
    let boxtext = document.querySelectorAll(".boxtext");
    let wins = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

    wins.forEach((n) => {
        if ((boxtext[n[0]].innerText == boxtext[n[1]].innerText) && (boxtext[n[1]].innerText == boxtext[n[2]].innerText) && (boxtext[n[0]].innerText !== "")) {
            isgameover = true;
            document.querySelector(".info").innerText = `${boxtext[n[0]].innerText} Won`;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            gameover.play();

        }

    })
}


music.play();
let box = document.querySelectorAll(".box")
Array.from(box).forEach((element) => {
    element.addEventListener("click", () => {
        let boxtext = element.querySelector(".boxtext")
        if (boxtext.innerText == "") {
            boxtext.innerText = turn;
            audioturn.play();
            turn = changeturn();
            checkforwin();
            if (!isgameover) {
                document.querySelector(".info").innerText = `Turn for ${turn}`;
            }
        }
    })

})

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    let box = document.querySelectorAll(".box")
    for (text of box) {
        let boxtext = text.querySelector(".boxtext")
        boxtext.innerText = "";
        turn = "X";
        isgameover = false; document.querySelector(".info").innerText = `Turn for ${turn}`
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";


    }

})




















