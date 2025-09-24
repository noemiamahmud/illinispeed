/* Your JS here. */

document.addEventListener("DOMContentLoaded", () =>  {
    const nav = document.querySelectorAll("nav ul li a");
    const section = document.querySelectorAll("section");

    function highlight() {
      let index = section.length;
    
      while (--index && window.scrollY + 100 < section[index].offsetTop) {}
    
      nav.forEach((link) => link.classList.remove("active"));
    
      const id = section[index].getAttribute("id");
      const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
    
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
    

    highlight();
    window.addEventListener("scroll", highlight);
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
  
    let currentIndex = 0;
  
    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    });
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolling");
        } else {
            nav.classList.remove("scrolling");
        }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    const buttons = document.querySelectorAll(".modal-button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const t = button.getAttribute("data-modal");
        const modal = document.getElementById(`panel-${t}`);
        if (modal) modal.style.display = "block";
      });
    });

    modals.forEach((modal) => {
      const exit = modal.querySelector(".exit-modal");
      exit.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", () => {
        if (event.t === modal) {
          modal.style.display = "none";
        }
      });
    });
  });


