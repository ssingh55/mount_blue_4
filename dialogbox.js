//dialog box
function dlgCancel(){
        dlgHide();
        // document.getElementsByTagName("H1")[0].innerHTML = "You clicked Cancel.";
    }
    function dlgOK(){
        dlgHide();
        // document.getElementsByTagName("H1")[0].innerHTML = "You clicked OK.";
        reload();
    }
    function dlgHide(){
        var whitebg = document.getElementById("white-background");
        var dlg = document.getElementById("dlgbox");
        whitebg.style.display = "none";
        dlg.style.display = "none";
    }
    function showDialog(){
        var whitebg = document.getElementById("white-background");
        var dlg = document.getElementById("dlgbox");
        whitebg.style.display = "block";
        dlg.style.display = "block";
        var winWidth = window.innerWidth;
        dlg.style.left = (winWidth/2) - 480/2 + "px";
        dlg.style.top = "150px";
    }