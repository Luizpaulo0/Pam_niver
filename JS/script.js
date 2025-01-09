const surpriseBtn = document.getElementById('surprise-btn');
const surpriseDiv = document.getElementById('surprise');

surpriseBtn.addEventListener('click', () => {
  surpriseDiv.classList.toggle('hidden');
});
