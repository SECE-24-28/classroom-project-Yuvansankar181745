// Login validation
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    loginMessage.textContent = "Please fill all fields.";
    loginMessage.className = "mt-2 text-sm text-red-600";
    return;
  }

  if (password.length < 6) {
    loginMessage.textContent = "Password must be at least 6 characters.";
    loginMessage.className = "mt-2 text-sm text-red-600";
    return;
  }

  loginMessage.textContent = "Login successful (dummy).";
  loginMessage.className = "mt-2 text-sm text-green-600";
});

// Recharge form validation
const rechargeForm = document.getElementById("rechargeForm");
const rechargeMessage = document.getElementById("rechargeMessage");

rechargeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const mobile = document.getElementById("rechargeMobile").value.trim();
  const amount = document.getElementById("rechargeAmount").value.trim();
  const type = document.querySelector('input[name="rechargeType"]:checked');

  if (!mobile || !amount || !type) {
    rechargeMessage.textContent = "Please fill all fields.";
    rechargeMessage.className = "mt-2 text-sm text-red-600";
    return;
  }

  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    rechargeMessage.textContent = "Enter a valid 10-digit mobile number.";
    rechargeMessage.className = "mt-2 text-sm text-red-600";
    return;
  }

  if (Number(amount) <= 0) {
    rechargeMessage.textContent = "Enter a valid recharge amount.";
    rechargeMessage.className = "mt-2 text-sm text-red-600";
    return;
  }

  rechargeMessage.textContent =
    "Recharge details accepted. Now select a plan below.";
  rechargeMessage.className = "mt-2 text-sm text-green-600";
});

// Plan selection (simulate data flow)
const planButtons = document.querySelectorAll(".select-plan");
const selectedPlanDiv = document.getElementById("selectedPlan");
const planDetails = document.getElementById("planDetails");

planButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const price = btn.dataset.price;
    const validity = btn.dataset.validity;
    const data = btn.dataset.data;

    selectedPlanDiv.classList.remove("hidden");
    planDetails.textContent = `Plan ₹${price} - ${validity} - ${data}. Proceed to payment (dummy).`;
  });
});
