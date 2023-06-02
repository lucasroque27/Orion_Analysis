window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
    if (windowHeight + scrollTop >= documentHeight) {
      footer.classList.add('show-footer');
    } else {
      footer.classList.remove('show-footer');
    }
  });
  