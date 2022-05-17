$(function(){ 
    $(".head_inner nav ul li.switch a").on("click", function(e){
        $("body").toggleClass("switchMode");
        e.preventDefault();
    });
});

function progress(){
    let elem = document.getElementById('progress_line'),
    width = 1,
    id = setInterval(progressStatus,20);
        function progressStatus(){
            if(width >= 83){
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 +'%';
            }
        }

}
progress();

function progress2(){
    let elem = document.getElementById('progress_line2'),
    width = 1,
    id = setInterval(progressStatus,20);
        function progressStatus(){
            if(width >= 91){
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 +'%';
            }
        }

}
progress2();

function progress3(){
    let elem = document.getElementById('progress_line3'),
    width = 1,
    id = setInterval(progressStatus,20);
        function progressStatus(){
            if(width >= 72){
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 +'%';
            }
        }

}
progress3();

function progress4(){
    let elem = document.getElementById('progress_line4'),
    width = 1,
    id = setInterval(progressStatus,20);
        function progressStatus(){
            if(width >= 79){
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 +'%';
            }
        }

}
progress4();