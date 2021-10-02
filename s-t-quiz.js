var rightAnswers = 0;
function onRightAnswer(answer){
    if (answer===1) {
        //Will get right answer
        var getAnswerBad = document.querySelector("#badAnswer1-1")
        var getAnswerBad2 = document.querySelector("#badAnswer1-2")
        var getAnswerRight = document.querySelector("#rightAnswer1");
        //Will change color of answer
        getAnswerRight.style.backgroundColor = "rgb(72, 231, 41)";

        //Debbuging
        console.log(getAnswerRight.innerHTML);

        getAnswerRight.onclick = "";
        getAnswerBad.onclick = ""
        getAnswerBad2.onclick = "";

        rightAnswers++

        console.log(rightAnswers);
    }else if(answer===2){

    }else if (answer===3){

    }else if (answer===4){

    }else if (answer===5){

    }
}

function onBadAnswer(answer){
    if (answer===1.1) {
        //Will get good and bad answer
        var getAnswerBad = document.querySelector("#badAnswer1-1")
        var getAnswerBad2 = document.querySelector("#badAnswer1-2")
        var getAnswerRight = document.querySelector("#rightAnswer1");

        //Will change color of answers
        getAnswerBad.style.backgroundColor = "red";
        getAnswerRight.style.backgroundColor = "rgb(72, 231, 41)";

        //Debbuging
        console.log("Hi");

        getAnswerRight.onclick = "";
        getAnswerBad.onclick = ""
        getAnswerBad2.onclick = "";
    }else if (answer===1.2) {
        //Will get good and bad answer
        var getAnswerBad = document.querySelector("#badAnswer1-1")
        var getAnswerBad2 = document.querySelector("#badAnswer1-2")
        var getAnswerRight = document.querySelector("#rightAnswer1");

        //Will change color of answers
        getAnswerBad2.style.backgroundColor = "red";
        getAnswerRight.style.backgroundColor = "rgb(72, 231, 41)";

        //Debbuging
        console.log(getAnswerBad.innerHTML);

        getAnswerRight.onclick = "";
        getAnswerBad.onclick = ""
        getAnswerBad2.onclick = "";
    }
}