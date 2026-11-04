// #4 Patient can reschedule an appointment
function rescheduleAppointment(appointment, newSlot) {
  if (newSlot.isBooked) {
    throw new Error("This slot is no longer available");
  }
  appointment.slot.isBooked = false;   // free old slot
  newSlot.isBooked = true;             // reserve new slot
  appointment.slot = newSlot;
  updateReminder(appointment);         // reminder moves to new time
  return appointment;
}

module.exports = { rescheduleAppointment };
