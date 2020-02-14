const toggleButtons = document.querySelectorAll('.code-toggler');
toggleButtons.forEach(button => {
  button.addEventListener('click', e => {
    const targetCodeBlockId = e.target.dataset.target;
    const targetCodeBlock = document.getElementById(targetCodeBlockId);
    if (targetCodeBlock.classList.contains('hidden')) {
      e.target.textContent = 'Hide code';
      targetCodeBlock.classList.remove('hidden');
    } else {
      e.target.textContent = 'Show code';
      targetCodeBlock.classList.add('hidden');
    }
  });
});
