var cards = document.querySelectorAll(".card");
var tags = document.querySelectorAll(".tag");

for (let i = 0; i < tags.length; i++) {
  tags[i].classList.remove("--selected");
}

if (location.search.endsWith("cat")) {
  tags[1].classList.add("--selected");
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.type != "cat") {
      cards[i].style.display = "none";
    }
  }
} else if (location.search.endsWith("dog")) {
  tags[2].classList.add("--selected");
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.type != "dog") {
      cards[i].style.display = "none";
    }
  }
} else if (location.search.endsWith("hamster")) {
  tags[3].classList.add("--selected");
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].dataset.type != "hamster") {
      cards[i].style.display = "none";
    }
  }
} else {
  for (let i = 0; i < cards.length; i++) {
    tags[0].classList.add("--selected");
    cards[i].style.display = "flex";
  }
}
