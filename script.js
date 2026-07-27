// ============================================
// 1. Pricing — Monthly / Yearly toggle
// ============================================
// Analogy: dono buttons ek "light switch" ki tarah hain — ek waqt mein
// sirf ek hi "on" (highlighted) reh sakta hai. Jo bhi on hota hai,
// uske hisaab se saari prices apne aap update ho jati hain.

const monthlyBtn = document.querySelector("#monthlyBtn");
const yearlyBtn = document.querySelector("#yearlyBtn");
const priceValues = document.querySelectorAll(".pricing-card .value");

if (monthlyBtn && yearlyBtn) {
  monthlyBtn.addEventListener("click", function () {
    // button ka look swap karo
    monthlyBtn.classList.add("acti");
    monthlyBtn.classList.remove("disa");
    yearlyBtn.classList.add("disa");
    yearlyBtn.classList.remove("acti");

    // har price ko uske data-monthly attribute wali value se update karo
    priceValues.forEach((price) => {
      price.textContent = price.dataset.monthly;
    });
  });

  yearlyBtn.addEventListener("click", function () {
    yearlyBtn.classList.add("acti");
    yearlyBtn.classList.remove("disa");
    monthlyBtn.classList.add("disa");
    monthlyBtn.classList.remove("acti");

    priceValues.forEach((price) => {
      price.textContent = price.dataset.yearly;
    });
  });
}

// ============================================
// 2. FAQ — expand/collapse accordion
// ============================================
// Analogy: har FAQ item ek "dabba" hai jo band ya khula ho sakta hai.
// Question button us dabbe ka dhakkan hai — click karo to khulta/band
// hota hai, aur "+" icon "-" mein badal jata hai jab khula ho.

const faqItems = document.querySelectorAll(".faq-list-item");

faqItems.forEach((item) => {
  const questionBtn = item.querySelector("button");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector("i");

  questionBtn.addEventListener("click", function () {
    const isOpen = answer.style.display === "block";

    if (isOpen) {
      answer.style.display = "none";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      answer.style.display = "block";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});

// Expand All / Collapse All buttons
const expandAllBtn = document.querySelector("#expandAllBtn");
const collapseAllBtn = document.querySelector("#collapseAllBtn");

if (expandAllBtn && collapseAllBtn) {
  expandAllBtn.addEventListener("click", function () {
    faqItems.forEach((item) => {
      item.querySelector(".faq-answer").style.display = "block";
      const icon = item.querySelector("i");
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    });
  });

  collapseAllBtn.addEventListener("click", function () {
    faqItems.forEach((item) => {
      item.querySelector(".faq-answer").style.display = "none";
      const icon = item.querySelector("i");
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    });
  });
}
