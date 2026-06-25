const range = document.querySelector("#range");
const after = document.querySelector("#after");

if (range && after) {
  range.addEventListener("input", (event) => {
    after.style.width = `${event.target.value}%`;
  });
}

const reviews = [
  {
    quote: "★★★★★<br />“Manny's crew showed up fast, gave a fair price, and cleared a garage that had been stressing us out for months.”<cite>Alicia R., Santa Ana</cite>"
  },
  {
    quote: "★★★★★<br />“Professional, clean, and easy to schedule. They removed furniture and appliances without damaging a thing.”<cite>Daniel M., Orange</cite>"
  },
  {
    quote: "★★★★★<br />“The estimate was upfront and the same-day pickup saved our move-out. I would absolutely use them again.”<cite>Priscilla V., Tustin</cite>"
  }
];

let reviewIndex = 0;
const review = document.querySelector("#review");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

function renderReview() {
  if (review) {
    review.innerHTML = reviews[reviewIndex].quote;
  }
}

if (prev && next) {
  prev.addEventListener("click", () => {
    reviewIndex = (reviewIndex + reviews.length - 1) % reviews.length;
    renderReview();
  });

  next.addEventListener("click", () => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    renderReview();
  });
}
