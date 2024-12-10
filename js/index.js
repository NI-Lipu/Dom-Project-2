



// document.getElementById('btn-calculate')
//   .addEventListener("click", () => {
//     const incomeFieldValue = parseFloat(document.getElementById("income-field").value);
//     const softwareFieldValue = parseFloat(document.getElementById("software-field").value);
//     const coursesFieldValue = parseFloat(document.getElementById("courses-field").value);
//     const internatFieldValue = parseFloat(document.getElementById("internat-field").value);
    

//     const totalExpenses = softwareFieldValue + coursesFieldValue + internatFieldValue;

//     document.getElementById("total-expenses").innerText = totalExpenses;
//     document.getElementById("balance-amount").innerText = incomeFieldValue - totalExpenses;

    


//     document.getElementById("show-calculate").classList.remove("hidden");

//     // Add History
//     const historyContainer = document.getElementById("history-container");
//     const div = document.createElement("div");
//     div.className = "bg-white rounded-lg p-2";
//     div.innerHTML = `
//     <p>${new Date().toLocaleDateString()}</p>
//     <ul>
//       <li>Income: ${incomeFieldValue}</li>
//       <li>Expenses: ${totalExpenses}</li>
//       <li>Balance: ${incomeFieldValue - totalExpenses}</li>
//     </ul>
//     `
//     historyContainer.append(div);
    
//   })


//   document.getElementById("btn-calculate-savings")
//     .addEventListener("click", () => {
//       const savingsPercentageFieldValue = parseFloat(document.getElementById("savings-percentage").value);
//       const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText);
      
//       const savingsAmount = document.getElementById("savings-amount").innerText = (savingsPercentageFieldValue * balanceAmount) / 100;
//     document.getElementById("remaining-balance").innerText = balanceAmount - savingsAmount;

    
//     })


//     // Toggle button

//     document.getElementById("btn-history")
//       .addEventListener("click", () => {

//         // btn toggle
//         document.getElementById("btn-history").className = "text-white rounded-r-lg text-xl font-bold text-center py-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"

//         document.getElementById("btn-assistant").className = "text-gray-500 bg-slate-200 rounded-l-lg text-xl font-bold text-center py-2 w-1/2"

//         // hide calculate section and show history

//         document.getElementById("calculate-section").classList.add("hidden");
//         document.getElementById("expense-history").classList.remove("hidden")
//       })


//     document.getElementById("btn-assistant")
//       .addEventListener("click", () => {
//         document.getElementById("btn-history").className = "text-gray-500 bg-slate-200 rounded-r-lg text-xl font-bold text-center py-2 w-1/2"

//         document.getElementById("btn-assistant").className = "text-white rounded-l-lg text-xl font-bold text-center py-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"

//                 // hide history section and show calculate section

//                 document.getElementById("calculate-section").classList.remove("hidden");
//                 document.getElementById("expense-history").classList.add("hidden")
//       })






// Utility Function to Toggle Button Styles
function toggleButtonStyles(activeButton, inactiveButton) {
  activeButton.className = "text-white rounded-lg text-xl font-bold py-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500";
  inactiveButton.className = "text-gray-500 bg-slate-200 rounded-lg text-xl font-bold py-2 w-1/2";
}

// Utility Function for Showing/Hiding Sections
function toggleSections(showSection, hideSection) {
  showSection.classList.remove("hidden");
  hideSection.classList.add("hidden");
}

// Calculate Button Logic
document.getElementById('btn-calculate').addEventListener("click", () => {
  const incomeFieldValue = parseFloat(document.getElementById("income-field").value) || 0;
  const softwareFieldValue = parseFloat(document.getElementById("software-field").value) || 0;
  const coursesFieldValue = parseFloat(document.getElementById("courses-field").value) || 0;
  const internetFieldValue = parseFloat(document.getElementById("internat-field").value) || 0;

  const totalExpenses = softwareFieldValue + coursesFieldValue + internetFieldValue;

  document.getElementById("total-expenses").innerText = `$${totalExpenses.toFixed(2)}`;
  document.getElementById("balance-amount").innerText = `$${(incomeFieldValue - totalExpenses).toFixed(2)}`;
  document.getElementById("show-calculate").classList.remove("hidden");

  // Add History
  const historyContainer = document.getElementById("history-container");
  const div = document.createElement("div");
  div.className = "bg-white rounded-lg p-2";
  div.innerHTML = `
    <p>${new Date().toLocaleDateString()}</p>
    <ul>
      <li>Income: $${incomeFieldValue}</li>
      <li>Expenses: $${totalExpenses}</li>
      <li>Balance: $${(incomeFieldValue - totalExpenses)}</li>
    </ul>`;
  historyContainer.appendChild(div);
});

// Calculate Savings Button Logic
document.getElementById("btn-calculate-savings").addEventListener("click", () => {
  const savingsPercentage = parseFloat(document.getElementById("savings-percentage").value) || 0;
  const balance = parseFloat(document.getElementById("balance-amount").innerText.replace('$', '')) || 0;

  const savingsAmount = (savingsPercentage * balance) / 100;
  document.getElementById("savings-amount").innerText = `$${savingsAmount.toFixed(2)}`;
  document.getElementById("remaining-balance").innerText = `$${(balance - savingsAmount).toFixed(2)}`;
});

// Toggle to History Section
document.getElementById("btn-history").addEventListener("click", () => {
  toggleButtonStyles(document.getElementById("btn-history"), document.getElementById("btn-assistant"));
  toggleSections(document.getElementById("expense-history"), document.getElementById("calculate-section"));
});

// Toggle to Assistant Section
document.getElementById("btn-assistant").addEventListener("click", () => {
  toggleButtonStyles(document.getElementById("btn-assistant"), document.getElementById("btn-history"));
  toggleSections(document.getElementById("calculate-section"), document.getElementById("expense-history"));
});
