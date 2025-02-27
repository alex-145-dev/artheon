function toggleMenu() {
    document.querySelector(".header-left").classList.toggle("active");
}


function toggleCard() {
    document.querySelector(".card").classList.toggle("active");
}

/*p(//1)*/
function toggleText1() {
    var moreText = document.getElementById("moreText1");
    var readMoreBtn = document.getElementById("readMoreBtn1");
    var readLessBtn = document.getElementById("readLessBtn1");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      readMoreBtn.style.display = "none";
      readLessBtn.style.display = "inline";
    } else {
      moreText.style.display = "none";
      readMoreBtn.style.display = "inline";
      readLessBtn.style.display = "none";
    }
  }

  /*p(//2)*/
  function toggleText2() {
    var moreText = document.getElementById("moreText2");
    var readMoreBtn = document.getElementById("readMoreBtn2");
    var readLessBtn = document.getElementById("readLessBtn2");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      readMoreBtn.style.display = "none";
      readLessBtn.style.display = "inline";
    } else {
      moreText.style.display = "none";
      readMoreBtn.style.display = "inline";
      readLessBtn.style.display = "none";
    }
  }

  /*slide (//1)*/
  const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  
  // Se è l'ultima immagine, torna alla prima
  if (currentIndex >= totalImages) {
    slides.style.transition = 'none';
    slides.style.transform = 'translateX(0)';
    currentIndex = 0;
    
    // Forza il reflow per far ripartire la transizione
    setTimeout(() => {
      slides.style.transition = 'transform 3s ease';
    }, 50);
  } else {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

// Cambia immagine ogni 6 secondi (3s fermo + 3s transizione)
setInterval(nextSlide, 6000);
