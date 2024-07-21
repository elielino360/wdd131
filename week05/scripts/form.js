document.addEventListener("DOMContentLoaded", function() {
  const yearElement = document.querySelector('#currentyear');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const lastModifiedElement = document.querySelector('#lastModified');
  const lastModified = document.lastModified;
  lastModifiedElement.textContent = `Last Modification: ${lastModified}`;

  const products = [
      {
          id: "fc-1888",
          name: "flux capacitor",
          avgRating: 4.5
      },
      {
          id: "fc-2050",
          name: "power laces",
          avgRating: 4.7
      },
      {
          id: "fs-1987",
          name: "time circuits",
          avgRating: 3.5
      },
      {
          id: "ac-2000",
          name: "low voltage reactor",
          avgRating: 3.9
      },
      {
          id: "jj-1969",
          name: "warp equalizer",
          avgRating: 5.0
      }
  ];
  
  const productSelect = document.getElementById("productSelect");
  products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
  });

  let reviewCount = localStorage.getItem("reviewCount");
  if (!reviewCount) {
      reviewCount = 0;
  } else {
      reviewCount = parseInt(reviewCount);
  }

  // Increment the review count
  reviewCount += 1;
  localStorage.setItem("reviewCount", reviewCount);

  // Display the updated count
  document.getElementById("reviewCounter").textContent = reviewCount;
});
