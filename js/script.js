const trainings = [
  {
    title: "Guard Training",
    mainImg: "/imagens/guarddog.jpg",
    breeds: "German Shepherd, Rottweiler, Doberman",
    desc: "Guard dogs are trained for protection and deterrence.",
    iconic: "/imagens/doberman.png"
  },
  {
    title: "Guide Training",
    mainImg: "/imagens/guide-dog.jpg",
    breeds: "Labrador, Golden Retriever",
    desc: "Guide dogs assist visually impaired people with navigation.",
    iconic: "/imagens/labrador.png"
  },
  {
    title: "Farm Training",
    mainImg: "/imagens/farm-dog.jpg",
    breeds: "Border Collie, Australian Shepherd",
    desc: "Farm dogs are skilled in herding and protecting livestock.",
    iconic: "/imagens/bordercollie.png"
  },
  {
    title: "Companion Training",
    mainImg: "/imagens/companion-dog.jpg",
    breeds: "Pug, French Bulldog",
    desc: "Companion dogs offer emotional support and friendship.",
    iconic: "/imagens/pug.png"
  }
];

let currentIndex = 0;
const cardElements = document.querySelectorAll(".trainer-card");

function updateCards(index) {
  const t = trainings[index];
  document.getElementById("training-title").textContent = t.title;
  document.getElementById("training-img").src = t.mainImg;
  document.getElementById("training-img").alt = t.title;

  const breedList = document.getElementById("similar-breeds");
  breedList.innerHTML = "";
  t.breeds.split(",").forEach(breed => {
    const span = document.createElement("span");
    span.textContent = breed.trim();
    breedList.appendChild(span);
  });  

  document.getElementById("training-desc").textContent = t.desc;
  document.getElementById("iconic-img").src = t.iconic;
  document.getElementById("iconic-img").alt = t.title;
}

function animateAndChange(newIndex) {
  cardElements.forEach(card => card.classList.add("fade-out"));
  setTimeout(() => {
    currentIndex = (newIndex + trainings.length) % trainings.length;
    updateCards(currentIndex);
    cardElements.forEach(card => {
      card.classList.remove("fade-out");
      card.classList.add("fade-in");
      setTimeout(() => card.classList.remove("fade-in"), 500);
    });
  }, 500);
}

document.getElementById("next-btn").addEventListener("click", () => {
  animateAndChange(currentIndex + 1);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  animateAndChange(currentIndex - 1);
});

let autoPlayInterval = setInterval(() => {
  animateAndChange(currentIndex + 1);
}, 5000); 

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    animateAndChange(currentIndex + 1);
  }, 5000);
}

document.getElementById("next-btn").addEventListener("click", () => {
  animateAndChange(currentIndex + 1);
  resetAutoPlay();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  animateAndChange(currentIndex - 1);
  resetAutoPlay();
});

const modal = document.getElementById('breedModal');
const closeModal = document.getElementById('closeModal');
const breedListFull = document.querySelector('.breed-list-full');

document.querySelectorAll('.more-breeds').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;

    fetch('/js/breeds.json')
      .then(res => res.json())
      .then(data => {
        const breedList = btn.closest('.trainer-card').querySelector('#similar-breeds');
        breedList.innerHTML = ''; 
        data[type].forEach(breed => {
          const span = document.createElement('span');
          span.textContent = breed;
          breedList.appendChild(span);
        });
      })
      .catch(err => console.error('Erro ao carregar raças:', err));
  });
});

(function() {
  const slider = document.querySelector(".puppies-slider");
  const cards  = Array.from(document.querySelectorAll(".puppy-card"));
  let current = 0;
  let auto;

  function goNext() {
    current = (current + 1) % cards.length;
    slider.scrollTo({
      left: cards[current].offsetLeft - 16, 
      behavior: 'smooth'
    });
  }

  function startAuto() {
    auto = setInterval(goNext, 4000);
  }
  function stopAuto(){
    clearInterval(auto);
  }

  startAuto();

  slider.addEventListener('touchstart', stopAuto);
  slider.addEventListener('touchend',   startAuto);

  slider.addEventListener('scroll', () => {
    const scrollLeft = slider.scrollLeft + 20; 
    cards.forEach((card, i) => {
      if(card.offsetLeft <= scrollLeft) {
        current = i;
      }
    });
  });
})();