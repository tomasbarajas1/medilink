// #7 Fix: double booking on same slot
// A slot can only be booked once. 
// The check and the update happen together so a second request for the same slot is rejected
function bookSlot(slot, patientId) {
  if (slot.isBooked) {
    throw new Error("Slot taken: please choose another time");
  }
  slot.isBooked = true;
  slot.bookedBy = patientId; // ID only, no personal data
  return slot;
}

module.exports = { bookSlot };
