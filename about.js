// Get the feature cards
const featureCards = document.querySelectorAll('.feature-card');

// Add a mouseover event listener to each feature card
featureCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  });
});