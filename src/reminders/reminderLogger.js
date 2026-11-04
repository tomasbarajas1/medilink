// Add logging to reminder job
const STATUSES = ["sent", "skipped", "failed"];

function logReminder(appointmentId, status, reason = "") {
  if (!STATUSES.includes(status)) {
    throw new Error(`Unknown reminder status: ${status}`);
  }
  // IDs only: no patient name, phone number, or email in logs
  console.log(
    JSON.stringify({
      time: new Date().toISOString(),
      event: "reminder",
      appointmentId,
      status,
      reason,
    })
  );
}

// Example: logReminder("apt-123", "skipped", "appointment cancelled");

module.exports = { logReminder };
