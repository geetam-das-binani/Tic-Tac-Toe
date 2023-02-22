let turn = "X";
// let audioturn= new Audio("ting.mp3");
// let gameover=new Audio("gameover.mp3");
// let music=new Audio("music.mp3");
let isgameover = false;




let changeturn = () => {
    if (turn == "X") {
        return "0"
    }
    else {
        return "X"
    }
}

let checkforwin = () => {
    let boxtext = document.querySelectorAll(".boxtext")
    let wins = [[0, 1, 2, 9, 180, 7,],
    [3, 4, 5, 8, 180, 20],
    [6, 7, 8, 8, 180, 32],
    [0, 3, 6, -9, 90, 20],
    [1, 4, 7, 6, 90, 20],
    [2, 5, 8, 22, 90, 20],
    [0, 4, 8, 6, 45, 20],
    [2, 4, 6, 6, -45, 20]]

    wins.forEach((n) => {
        if ((boxtext[n[0]].innerText == boxtext[n[1]].innerText) && (boxtext[n[1]].innerText == boxtext[n[2]].innerText) && (boxtext[n[0]].innerText !== "")) {
            isgameover = true;
            document.querySelector(".info").innerText = `${boxtext[n[0]].innerText} Won`
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
            document.querySelector(".LINE").style.transform = `translateX${n[3]}vw rotate${n[4]}deg`
            document.querySelector(".LINE").style.top = `${n[5]}%`
            document.querySelector(".LINE").style.width = "40%"
            document.querySelector(".LINE").style.border = "2px solid black"

        }

    })
}

let box = document.querySelectorAll(".box")
Array.from(box).forEach((element) => {
    element.addEventListener("click", () => {
        let boxtext = element.querySelector(".boxtext")
        if (boxtext.innerText == "") {
            boxtext.innerText = turn;
            turn = changeturn();
            checkforwin();
            if (!isgameover) {
                document.querySelector(".info").innerText = `Turn for ${turn}`
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
        turn = "X"
        isgameover = false
        document.querySelector(".info").innerText = `Turn for ${turn}`
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
        document.querySelector(".LINE").style.width = "0%"
        document.querySelector(".LINE").style.border = "none"

    }

})




















