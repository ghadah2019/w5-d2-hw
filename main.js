var catImage = document.getElementById('cat-image');
var dogImage = document.getElementById('dog-image');
var dogElements = document.querySelectorAll('.replace-dog');
  var catElements = document.querySelectorAll('.replace-cat');

var additionalCatElements = document.querySelectorAll('.replace-cat-additional');
var additionalDogElements = document.querySelectorAll('.replace-dog-additional');

catImage.addEventListener('click', function() {
 
  dogElements.forEach(function(element) {
    element.textContent = element.textContent.replace(/Dog/gi, 'cat');
  });

  catElements.forEach(function(element) {
    element.src = 'https://images.pexels.com/photos/674570/pexels-photo-674570.jpeg?auto=compress&cs=tinysrgb&w=800';
  });

  additionalCatElements.forEach(function(element) {
    element.src = 'https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&w=800'; 
  });

});

dogImage.addEventListener('click', function() {
//   var catElements = document.querySelectorAll('.replace-cat');
  dogElements.forEach(function(element) {
    element.textContent = element.textContent.replace(/Cat/gi, 'dog');
  });
  catElements.forEach(function(element) {
    element.src = 'https://images.pexels.com/photos/8499461/pexels-photo-8499461.jpeg?auto=compress&cs=tinysrgb&w=800'; 
  });

  additionalCatElements.forEach(function(element) {
    element.src = 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=800'; 
  });
});