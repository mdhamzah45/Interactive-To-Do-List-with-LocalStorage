const billingButtons = document.querySelectorAll('[data-billing]');
const pricingCards = document.querySelectorAll('.plan-card');

function updatePricing(selectedBilling) {
  pricingCards.forEach((card) => {
    const priceValue = card.querySelector('.price-value');
    const billingLabel = card.querySelector('.billing-label');
    const discountNote = card.querySelector('.discount-note');
    const monthlyPrice = Number(card.dataset.monthly);
    const yearlyPrice = Number(card.dataset.yearly);

    const activePrice = selectedBilling === 'monthly' ? monthlyPrice : yearlyPrice;

    priceValue.textContent = activePrice;
    billingLabel.textContent = selectedBilling === 'monthly' ? '/mo' : '/mo';

    if (selectedBilling === 'yearly') {
      discountNote.textContent = 'Save 20% with yearly billing';
    } else {
      discountNote.textContent = 'Billed monthly';
    }
  });
}

billingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedBilling = button.dataset.billing;

    billingButtons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    updatePricing(selectedBilling);
  });
});

updatePricing('monthly');
