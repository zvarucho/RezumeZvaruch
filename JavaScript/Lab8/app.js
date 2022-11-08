var tab;
var tabContent;

window.onload=function() {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event) {
    var target = event.target;
    if(target.className == 'tab') {
        for(var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
}}}}

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

function generate() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;

    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
    document.getElementById('output').value = 'border-radius: ' + block.style.borderRadius;
}
function generate2() {
    var block = document.getElementById('layer1');
    var input = document.getElementsByName('float');
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            block.style.cssFloat = input[i].id;
            document.getElementById('output2').value = 'float: ' + input[i].id;
        }
    }
}
function generate3() {
    var inputFont = document.getElementById('font-family').value;
    var block3 = document.getElementById('block3');

    var text = document.getElementById('paragraph');
    var input = document.getElementsByName('font-family');
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            text.style.fontFamily = input[i].id;
            block3.style.fontFamily = inputFont + ', ' + input[i].id;
            document.getElementById('output3').value = 'font-family: ' + block3.style.fontFamily;
        }
    }

   
}