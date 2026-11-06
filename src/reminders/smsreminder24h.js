// #6 Send an SMS reminder 24 hours before an appointment
const REMINDER_WINDOW_MS = 24 * 60 * 60 * 1000;

function isDueFor24HourReminder(appointmentTime, currentTime = new Date()) {
  const appointmentMs = new Date(appointmentTime).getTime();
  const currentMs = new Date(currentTime).getTime();

  return appointmentMs - currentMs <= REMINDER_WINDOW_MS
    && appointmentMs > currentMs;
}

function buildReminderMessage(appointment) {
  if (!appointment.id || !appointment.startTime) {
    throw new Error("Appointment id and startTime are required");
  }

  return `Reminder: your appointment is scheduled for ${appointment.startTime}.`;
}

function sendSmsReminder24h(appointment, sendSms, currentTime = new Date()) {
  if (appointment.status === "cancelled") {
    return { sent: false, reason: "appointment cancelled" };
  }

  if (!isDueFor24HourReminder(appointment.startTime, currentTime)) {
    return { sent: false, reason: "reminder is not due" };
  }

  const message = buildReminderMessage(appointment);
  sendSms(appointment.patientPhone, message);

  return {
    sent: true,
    appointmentId: appointment.id,
    message,
  };
}

module.exports = {
  buildReminderMessage,
  isDueFor24HourReminder,
  sendSmsReminder24h,
};
