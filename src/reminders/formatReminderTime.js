// Fix: reminder shows UTC instead of local time
// Format the appointment time in the clinic's time zone, not the server's
function formatReminderTime(appointmentTimeUtc, clinicTimeZone) {
  if (!clinicTimeZone) {
    throw new Error("clinicTimeZone is required, e.g. America/Toronto");
  }
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: clinicTimeZone,
    timeZoneName: "short",         // shows EST / EDT
  }).format(new Date(appointmentTimeUtc));
}

// Example: formatReminderTime("2026-11-10T19:30:00Z", "America/Toronto")
// is 2:30 p.m. EST instead of 19:30 UTC.

module.exports = { formatReminderTime };
