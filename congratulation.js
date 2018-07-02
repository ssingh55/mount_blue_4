//congratulations part
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = count;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        //closeicon on modal
        closeModal();
    };
}


// @description close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}


// @desciption for user to play Again 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

function dlgCancel1(){
        dlgHide1();
        // document.getElementsByTagName("H1")[0].innerHTML = "You clicked Cancel.";
    }
    function dlgOK1(){
        dlgHide1();
        // document.getElementsByTagName("H1")[0].innerHTML = "You clicked OK.";
        reload();
    }
    function dlgHide1(){
        var whitebg = document.getElementById("white-background1");
        var dlg = document.getElementById("dlgbox1");
        whitebg.style.display = "none";
        dlg.style.display = "none";
    }
    function showDialog1(){
        var whitebg = document.getElementById("white-background1");
        var dlg = document.getElementById("dlgbox1");
        whitebg.style.display = "block";
        dlg.style.display = "block";
        var winWidth = window.innerWidth;
        dlg.style.left = (winWidth/2) - 480/2 + "px";
        dlg.style.top = "150px";
    }