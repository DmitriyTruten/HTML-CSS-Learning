function dropDown () {
  document.getElementById("dropdown").classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function faqDropDown () {
  document.getElementById("faq-dropdown").classList.toggle("faq-show")
}

window.onclick = function(event) {
  if (!event.target.matches('.faq-dropdown-btn')) {
    let dropdowns = document.getElementsByClassName("faq-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('faq-show')) {
        openDropdown.classList.remove('faq-show');
      }
    }
  }
}