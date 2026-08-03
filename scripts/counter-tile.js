(function () {
  const COUNTER_DATE = new Date("2028-03-17T00:00:00");

  function updateClickCountdown() {
    const now = new Date();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const difference = RETIREMENT_DATE - now;
    const daysRemaining = Math.max(0, Math.ceil(difference / millisecondsPerDay));
    const element = document.getElementById("clickCountdown");

    if (element) {
      element.textContent = `${daysRemaining} DAYS`;
    }
  }

  updateclickCountdown();
  setInterval(updateclickCountdown, 60 * 60 * 1000);
})();
