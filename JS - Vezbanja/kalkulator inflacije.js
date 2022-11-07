// PRIMER KADA BI SABIRALI //

function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  let maney = document.querySelector('#money');
  inflationRate = parseFloat(inflationRate.value);
  money = parseFloat(money.value);
  console.log(typeof (inflationRate));
  console.log(typeof (money));
  let sabiranje = inflationRate + money;
  console.log(sabiranje);