document.addEventListener('DOMContentLoaded', () => {
    const datePicker = document.getElementById('datePicker');
    const selectedDateDisplay = document.getElementById('selectedDate');
    const confirmBtn = document.getElementById('confirmBtn');
    const modal = document.getElementById('confirmationModal');
    const closeBtn = document.querySelector('.close');
  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];
    datePicker.setAttribute('min', todayStr);
  
    datePicker.addEventListener('change', () => {
      const selected = new Date(datePicker.value);
      selected.setHours(0, 0, 0, 0);
  
      if (selected < today) {
        triggerInvalidDateEffect();
        datePicker.value = "";
        selectedDateDisplay.textContent = "Please select a valid future date.";
      } else {
        selectedDateDisplay.textContent = `Selected Appointment Date: ${datePicker.value}`;
      }
    });
  
    confirmBtn.addEventListener('click', () => {
      const fullName = document.getElementById('fullName').value;
      const occupation = document.getElementById('occupation').value;
      const company = document.getElementById('company').value;
      const contact = document.getElementById('contact').value;
      const email = document.getElementById('email').value;
      const reason = document.getElementById('reason').value;
      const date = datePicker.value;
  
      if (!fullName || !occupation || !company || !contact || !email || !reason || !date) {
        alert("Please fill out all fields and select a date.");
        return;
      }
  
      const selected = new Date(date);
      selected.setHours(0, 0, 0, 0);
  
      if (selected < today) {
        triggerInvalidDateEffect();
        return;
      }
  
      document.getElementById('modalDate').textContent = date;
      document.getElementById('modalName').textContent = fullName;
      document.getElementById('modalOccupation').textContent = occupation;
      document.getElementById('modalCompany').textContent = company;
      document.getElementById('modalContact').textContent = contact;
      document.getElementById('modalEmail').textContent = email;
      document.getElementById('modalReason').textContent = reason;
  
      modal.style.display = 'flex';
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
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
  });
  