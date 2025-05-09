document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("h2 span[id]"); // Selecciona solo los spans con IDs

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = `+${Math.ceil(current + increment)}`;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = `+${target}`;
      }
    };

    updateCount();
  });
});