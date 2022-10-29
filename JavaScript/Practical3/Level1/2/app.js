// var next = document.getElementById("arrow-next");
// var back = document.getElementById("arrow-back");
// var block = document.querySelector(".slide")


// next.addEventListener("click", function(e) {
//     if(e.type === "click")
//     block.lastElementChild.style.marginLeft = -350 + "px";
   

//     //next.nextElementSibling.style.marginLeft = -350 + "px";
// })
// back.addEventListener("click", function(e) {
//     if(e.type === "click")
//     block.lastElementChild.style.marginLeft = +350 + "px";
   

//     //next.nextElementSibling.style.marginLeft = -350 + "px";
// })
    /* этот код помечает картинки, для удобства разработки */
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* конфигурация */
    let width = 130; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
