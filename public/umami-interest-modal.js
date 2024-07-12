document.addEventListener('DOMContentLoaded', function () {
  // Create modal element
  const modal = document.createElement('div');
  modal.id = 'infoModal';
  modal.className = 'UmamiInterestModal';
  modal.style.display = 'none';
  modal.style.flexDirection = 'column';
  modal.style.gap = '20px';
  modal.style.position = 'fixed';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';

  // Create modal content for interest form
  const interestContent = document.createElement('div');
  interestContent.id = 'interestContent';
  interestContent.style.backgroundColor = '#fff';
  interestContent.style.padding = '20px';
  interestContent.style.borderRadius = '5px';
  interestContent.style.textAlign = 'center';
  interestContent.innerHTML = `
    <h3>Ten artykuł nie jest jeszcze dostępny 🥺</h3>
    <p>Kliknij "zgłoś zainteresowanie", aby dać mi kopa do szybszej publikacji 😉</p>
    <p>Podaj adres email, jeśli chcesz, żebym powiadomił Cię, gdy artykuł będzie dostępny.</p>
    <input type="email" id="userEmail" placeholder="Twój email (opcjonalnie)">
    <p><small>Podając adres wyrażasz zgodę na przetwarzanie swoich danych w celach marketingowych.</small></p>
    <div class="UmamiInterestModal__Buttons">
      <button id="closeUmamiInterestModal">Zamknij</button>
      <button id="submitInterestToUmami">Zgłoś zainteresowanie</button>
    </div>
  `;

  // Create modal content for thank you message
  const thankYouContent = document.createElement('div');
  thankYouContent.id = 'thankYouContent';
  thankYouContent.style.backgroundColor = '#fff';
  thankYouContent.style.padding = '20px';
  thankYouContent.style.borderRadius = '5px';
  thankYouContent.style.textAlign = 'center';
  thankYouContent.style.display = 'none';
  thankYouContent.innerHTML = `
    <h3>Dziękuję za zainteresowanie! 🥳</h3>
    <p>Postaram się jak najszybciej opublikować artykuł.</p>
    <div class="UmamiInterestModal__Buttons">
      <button id="closeThankYouModal">Zamknij</button>
    </div>
  `;

  modal.appendChild(interestContent);
  modal.appendChild(thankYouContent);
  document.body.appendChild(modal);

  // Show modal function
  window.showModal = function (slug) {
    modal.style.display = 'flex';
    interestContent.style.display = 'block';
    thankYouContent.style.display = 'none';
    modal.dataset.slug = slug;
  };

  // Close modal function
  document.getElementById('closeUmamiInterestModal').onclick = function () {
    modal.style.display = 'none';
  };

  // Submit interest function
  document.getElementById('submitInterestToUmami').onclick = function () {
    const email = document.getElementById('userEmail').value;
    const slug = modal.dataset.slug;
    if (email) {
      localStorage.setItem('userEmail', email);
    }
    // Send event to Umami
    umami.track('Interest Submitted', { email: email || 'no-email', slug: slug });

    interestContent.style.display = 'none';
    thankYouContent.style.display = 'block';

    setTimeout(() => {
      modal.style.display = 'none';
    }, 3000);
  };

  // Close thank you modal function
  document.getElementById('closeThankYouModal').onclick = function () {
    modal.style.display = 'none';
  };

  // Pre-fill email if it exists in localStorage
  const storedEmail = localStorage.getItem('userEmail');
  if (storedEmail) {
    document.getElementById('userEmail').value = storedEmail;
  }
});
