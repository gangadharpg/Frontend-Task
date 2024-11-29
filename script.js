// Select elements
const boxHeaders = document.querySelectorAll('.box-header');
const boxContents = document.querySelectorAll('.box-content');
const unitCheckboxes = document.querySelectorAll('.unit-checkbox');
const totalAmount = document.getElementById('total-amount');

// Expand or collapse box content on header click
boxHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    const content = boxContents[index];
    content.classList.toggle('hidden');
  });
});

// Update total amount
unitCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let total = 0;
    unitCheckboxes.forEach((box) => {
      if (box.checked) {
        total += parseFloat(box.dataset.price);
      }
    });
    totalAmount.textContent = total.toFixed(2);
  });
});
