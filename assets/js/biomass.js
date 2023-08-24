// Get form elements
// Get form elements
const form = document.getElementById('biomass-form');
const wasteInput = document.getElementById('form2Example18'); // Update the ID to match the input field ID
const calculateBtn = document.getElementById('result-container');
const resultContainer = document.getElementById('result-container');

// Rest of the code remains the same...

// Function to calculate biomass energy production
function calculateBiomassEnergy(wasteAmount) {
  // Conversion factor for biomass energy production (adjust according to your needs)
  const conversionFactor = 0.5; // Example value

  // Calculate energy production
  const energyProduction = wasteAmount * conversionFactor;

  // Return energy production value
  return energyProduction;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get waste amount from the input field
  const wasteAmount = parseFloat(wasteInput.value);

  // Check if the waste amount is a valid number
  if (isNaN(wasteAmount) || wasteAmount <= 0) {
    resultContainer.textContent = 'Please enter a valid waste amount.';
    return;
  }

  // Calculate biomass energy production
  const energyProduction = calculateBiomassEnergy(wasteAmount);

  // Display the result
  resultContainer.textContent = `The estimated biomass energy production is: ${energyProduction} units.`;
}

// Event listener for form submission
form.addEventListener('submit', handleSubmit);
