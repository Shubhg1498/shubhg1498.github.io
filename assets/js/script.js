
function animateSkills() {
  const bars = document.querySelectorAll('.bar div');
  bars.forEach(bar => {
    const target = bar.getAttribute('data-width');
    bar.style.width = target;
  });
}
