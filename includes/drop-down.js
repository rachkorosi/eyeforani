
var dropdownButtons = document.querySelectorAll('.dropdown button');

dropdownButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('show');
  });
});

var dropdownLinks = document.querySelectorAll('.dropdown-content a');

dropdownLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var url = this.getAttribute('href');

    window.location.href = url;
  });
});

