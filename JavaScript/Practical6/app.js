const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://semegenkep.github.io/json/example.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
  //console.log(superHeroes);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myParagraph = document.createElement('p');
    myParagraph.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myParagraph);
  }


  function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myParagraph1 = document.createElement('p');
      var myParagraph2 = document.createElement('p');
      var myParagraph3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myParagraph1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myParagraph2.textContent = 'Age: ' + heroes[i].age;
      myParagraph3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myParagraph1);
      myArticle.appendChild(myParagraph2);
      myArticle.appendChild(myParagraph3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }