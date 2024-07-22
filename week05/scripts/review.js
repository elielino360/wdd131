const reviewsDisplay = document.querySelector("#reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews == 0) {
	reviewsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
    numReviews = 1;
} else {
  reviewsDisplay.innerHTML = numReviews;
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);