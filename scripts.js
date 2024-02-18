// Function to hide all screens and show only the one with the provided ID
function showScreen(screenId) {
    const screens = document.querySelectorAll('div[id$="Screen"]');
    // Hide all screens
    screens.forEach(screen => {
      screen.style.display = 'none';
    });
  
    // Show the requested screen
    const screenToShow = document.getElementById(screenId);
    screenToShow.style.display = 'block';
  }
  
  // Function to move to the tip screen and optionally skip the tip input
  function skipTip() {
    document.getElementById('tipPercentage').value = "0";
    showScreen('splitScreen');
  }
  
  // Function to calculate and show the final amount each person should pay
  function showFinalAmount() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const splitCount = parseInt(document.getElementById('splitCount').value, 10);
  
    if (isNaN(billAmount) || isNaN(splitCount) || splitCount <= 0) {
      alert("Please make sure to fill in all the fields correctly.");
      return;
    }
  
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / splitCount;
  
    document.getElementById('finalAmount').textContent = `$${amountPerPerson.toFixed(2)}`;
  
    showScreen('finalScreen');
  }
  
  // Event listener to update the tip value display as the range input changes
  document.addEventListener('input', function (event) {
    if (event.target.id === 'tipPercentage') {
      const tipValueDisplay = document.getElementById('tipValue');
      tipValueDisplay.textContent = `${event.target.value}%`;
    }
  });
  
  // Initially, we want to show only the welcome screen
  showScreen('welcomeScreen');
  