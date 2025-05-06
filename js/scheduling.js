
const form = document.getElementById('appointmentForm');
const datePicker = document.getElementById('datePicker');
const selectedDateDisplay = document.getElementById('selectedDate');

const confirmationModal = document.getElementById('confirmationModal');
const thankYouModal = document.getElementById('thankYouModal');

const correctBtn = document.getElementById('correctBtn');
const closeThankYou = document.getElementById('closeThankYou');
const closeBtn = document.querySelector('#confirmationModal .close');

const today = new Date();
today.setHours(0, 0, 0, 0); 
const todayStr = today.toISOString().split('T')[0];
datePicker.setAttribute('min', todayStr);

datePicker.addEventListener('change', () => {
  const selectedDate = new Date(datePicker.value);
  selectedDate.setHours(0, 0, 0, 0);

  if (!datePicker.value || selectedDate < today) {
    selectedDateDisplay.textContent = "Invalid date selected";
    triggerInvalidDateEffect();
  } else {
    selectedDateDisplay.textContent = `Scheduled Appointment: ${selectedDate.toDateString()}`;
    removeInvalidDateEffect();
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!form.checkValidity()) return;

  const fullName = document.getElementById('fullName').value.trim();
  const occupation = document.getElementById('occupation').value.trim();
  const company = document.getElementById('company').value.trim();
  const contact = document.getElementById('contactNumber').value.trim();
  const email = document.getElementById('email').value.trim();
  const reason = document.getElementById('reason').value.trim();
  const date = datePicker.value.trim();

  const selected = new Date(date);
  selected.setHours(0, 0, 0, 0);

  if (selected < today || !date) {
    triggerInvalidDateEffect();
    selectedDateDisplay.textContent = "Invalid date selected";
    return;
  }

  document.getElementById('modalDate').textContent = selected.toDateString();
  document.getElementById('modalName').textContent = fullName;
  document.getElementById('modalOccupation').textContent = occupation;
  document.getElementById('modalCompany').textContent = company;
  document.getElementById('modalContact').textContent = contact;
  document.getElementById('modalEmail').textContent = email;
  document.getElementById('modalReason').textContent = reason;


selectedDateDisplay.textContent = `Scheduled Appointment: ${selected.toDateString()}`;
  confirmationModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
});
closeThankYou.addEventListener('click', () => {
  thankYouModal.style.display = 'none';
});

correctBtn.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
  thankYouModal.style.display = 'flex';
  form.reset();
  selectedDateDisplay.textContent = "No date selected";
});


window.addEventListener('click', (e) => {
  if (e.target === confirmationModal) {
    confirmationModal.style.display = 'none';
  }
  if (e.target === thankYouModal) {
    thankYouModal.style.display = 'none';
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    confirmationModal.style.display = 'none';
    thankYouModal.style.display = 'none';
  }
});

function triggerInvalidDateEffect() {
  datePicker.classList.add('invalid-date');
  selectedDateDisplay.classList.add('invalid-date');
  setTimeout(() => {
    datePicker.classList.remove('invalid-date');
    selectedDateDisplay.classList.remove('invalid-date');
  }, 500);
}

function removeInvalidDateEffect() {
  datePicker.classList.remove('invalid-date');
  selectedDateDisplay.classList.remove('invalid-date');
}
