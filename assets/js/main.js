document.addEventListener("DOMContentLoaded", function () {
  const faqHeader = document.querySelectorAll(".eachFaq");
  const mFaq = document.getElementById("motherFaq");

  const showFaq = function () {
    const faqBody = this.querySelector(".faqBody");
    const faqIcon = this.querySelector(".controlSign");

    faqHeader.forEach((eachOne) => {
      if (eachOne !== this) {
        eachOne.querySelector(".faqBody").classList.remove("height");
        eachOne.querySelector(".controlSign").classList.remove("iconPlus");
      }
    });

    faqBody.classList.toggle("height");
    faqIcon.classList.toggle("iconPlus");
  };

  const logCon = function () {
    const faqBody = this.querySelector(".faqBody");
    const hoverItem = document.createElement("div");
    hoverItem.classList.add("controlSignafter");

    faqBody.appendChild(hoverItem);

    const rmoveItem = function () {
      if (faqBody.contains(hoverItem)) {
        faqBody.removeChild(hoverItem);
      }
    };
    setTimeout(rmoveItem, 1000);
  };

  for (const header of faqHeader) {
    header.addEventListener("click", showFaq);
    header.addEventListener("mouseenter", logCon);
  }

  const keyFaq = function (event) {
    if (event.key === "Enter" && event.target.classList.contains("eachFaq")) {
      const faqBody = event.target.querySelector(".faqBody");
      const faqIcon = event.target.querySelector(".controlSign");
      event.preventDefault();

      faqHeader.forEach((eachOne) => {
        if (eachOne !== event.target) {
          eachOne.querySelector(".faqBody").classList.remove("height");
          eachOne.querySelector(".controlSign").classList.remove("iconPlus");
        }
      });

      faqBody.classList.toggle("height");
      faqIcon.classList.toggle("iconPlus");
    }
  };

  mFaq.addEventListener("keydown", keyFaq);
});
