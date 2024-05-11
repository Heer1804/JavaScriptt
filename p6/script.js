function calculateSalary() {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  let hra, da, pf, pt, hi, grossSalary, totalDeduction, netPay;

  if (basicSalary <= 10000) {
    hra = basicSalary * 0.2;
    da = basicSalary * 0.8;
    pf = basicSalary * 0.08;
  } else if (basicSalary > 10000 && basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.9;
    pf = basicSalary * 0.12;
  } else {
    hra = basicSalary * 0.3;
    da = basicSalary * 0.95;
    pf = null;
  }

  pt = 200;
  hi = 1800;

  grossSalary = hra + da + pf;
  totalDeduction = pt + hi;
  netPay = grossSalary - totalDeduction;

  document.getElementById("basicSalaryResult").innerText = `${basicSalary}`;
  document.getElementById("hraResult").innerText = `${hra}`;
  document.getElementById("daResult").innerText = `${da}`;
  document.getElementById("pfResult").innerText = `${pf || "Not Applicable"}`;
  document.getElementById("ptResult").innerText = `${pt}`;
  document.getElementById("hiResult").innerText = `${hi}`;
  document.getElementById("gsResult").innerText = `${grossSalary}`;
  document.getElementById("tdResult").innerText = `${totalDeduction}`;
  document.getElementById("ntpResult").innerText = `${netPay}`;
}