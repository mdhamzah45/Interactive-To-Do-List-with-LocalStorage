# Responsive Product Pricing Cards

This project is a three-plan pricing section with a monthly/yearly billing toggle, a highlighted popular plan, and card hover effects.

## Features

- Three responsive pricing cards
- Monthly/yearly billing switch
- Highlighted "Popular" plan
- Smooth transitions and hover effects
- Call-to-action buttons for each plan

## How to view locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## JavaScript toggle behavior

The billing switch updates the displayed prices by reading each card's data attributes and switching between monthly and yearly values. This keeps the pricing data in HTML attributes instead of repeating numbers in the script.
