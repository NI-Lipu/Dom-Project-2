



document.getElementById('btn-calculate')
  .addEventListener("click", () => {
    const incomeFieldValue = parseFloat(document.getElementById("income-field").value);
    const softwareFieldValue = parseFloat(document.getElementById("software-field").value);
    const coursesFieldValue = parseFloat(document.getElementById("courses-field").value);
    const internatFieldValue = parseFloat(document.getElementById("internat-field").value);
    

    const totalExpenses = softwareFieldValue + coursesFieldValue + internatFieldValue;

    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById("balance-amount").innerText = incomeFieldValue - totalExpenses;

    


    document.getElementById("show-calculate").classList.remove("hidden");

    // Add History
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.className = "bg-white rounded-lg p-2";
    div.innerHTML = `
    <p>${new Date().toLocaleDateString()}</p>
    <ul>
      <li>Income: ${incomeFieldValue}</li>
      <li>Expenses: ${totalExpenses}</li>
      <li>Balance: ${incomeFieldValue - totalExpenses}</li>
    </ul>
    `
    historyContainer.append(div);
    
  })


  document.getElementById("btn-calculate-savings")
    .addEventListener("click", () => {
      const savingsPercentageFieldValue = parseFloat(document.getElementById("savings-percentage").value);
      const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText);
      
      const savingsAmount = document.getElementById("savings-amount").innerText = (savingsPercentageFieldValue * balanceAmount) / 100;
    document.getElementById("remaining-balance").innerText = balanceAmount - savingsAmount;

    
    })


    // Toggle button

    document.getElementById("btn-history")
      .addEventListener("click", () => {

        // btn toggle
        document.getElementById("btn-history").className = "text-white rounded-r-lg text-xl font-bold text-center py-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"

        document.getElementById("btn-assistant").className = "text-gray-500 bg-slate-200 rounded-l-lg text-xl font-bold text-center py-2 w-1/2"

        // hide calculate section and show history

        document.getElementById("calculate-section").classList.add("hidden");
        document.getElementById("expense-history").classList.remove("hidden")
      })


    document.getElementById("btn-assistant")
      .addEventListener("click", () => {
        document.getElementById("btn-history").className = "text-gray-500 bg-slate-200 rounded-r-lg text-xl font-bold text-center py-2 w-1/2"

        document.getElementById("btn-assistant").className = "text-white rounded-l-lg text-xl font-bold text-center py-2 w-1/2 bg-gradient-to-r from-blue-500 to-green-500"

                // hide history section and show calculate section

                document.getElementById("calculate-section").classList.remove("hidden");
                document.getElementById("expense-history").classList.add("hidden")
      })

