let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});

  let swiper2 = new Swiper(".mySwiper2", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const headers = document.querySelectorAll("[data-name='accordeon-title']");
// let h = document.querySelector('.list-group-heading')


headers.forEach(function(item) {

  item.addEventListener('click', function(){
    
    this.nextElementSibling.classList.toggle('hidden');
    
  })
})

