// Use your MockAPI base + resource path
// Assuming you created a resource named "plans" in this project:
const API_URL = "https://69369809f8dc350aff316cab.mockapi.io/plans";

const statusDiv = document.getElementById("status");
const plansContainer = document.getElementById("plansContainer");
const selectedPlanBox = document.getElementById("selectedPlan");
const selectedPlanDetails = document.getElementById("selectedPlanDetails");

async function fetchPlans() {
  try {
    statusDiv.textContent = "Loading plans from server...";

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch plans");
    }

    const plans = await response.json();
    statusDiv.textContent = `Loaded ${plans.length} plans.`;

    displayPlans(plans);
  } catch (error) {
    console.error(error);
    statusDiv.textContent = "Error loading plans. Please try again later.";
  }
}

function displayPlans(plans) {
  plansContainer.innerHTML = "";

  plans.forEach((plan) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-4 rounded shadow flex flex-col justify-between";

    const content = document.createElement("div");
    content.innerHTML = `
      <h3 class="text-lg font-bold mb-1">₹${plan.price}</h3>
      <p class="text-sm text-gray-700 mb-1">Type: ${plan.type}</p>
      <p class="text-sm text-gray-700 mb-1">Validity: ${plan.validity}</p>
      <p class="text-sm text-gray-700 mb-2">Data: ${plan.data}</p>
      <p class="text-xs text-gray-500">${plan.description}</p>
    `;

    const btn = document.createElement("button");
    btn.textContent = "Select Plan";
    btn.className =
      "mt-3 bg-blue-600 text-white px-3 py-1 rounded self-start text-sm";
    btn.addEventListener("click", () => {
      showSelectedPlan(plan);
    });

    card.appendChild(content);
    card.appendChild(btn);
    plansContainer.appendChild(card);
  });
}

function showSelectedPlan(plan) {
  selectedPlanBox.classList.remove("hidden");
  selectedPlanDetails.textContent = `You selected ₹${plan.price} plan (${plan.validity}, ${plan.data}). ${plan.description}`;
}

fetchPlans();
