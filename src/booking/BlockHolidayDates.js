// #5 Admin can block holiday dates from appointment availability
function toDateKey(date) {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  return String(date).slice(0, 10);
}

function isHolidayDate(date, holidayDates) {
  const dateKey = toDateKey(date);
  return holidayDates.some((holidayDate) => toDateKey(holidayDate) === dateKey);
}

function blockHolidayDates(availability, holidayDates) {
  return availability.map((slot) => ({
    ...slot,
    isAvailable: !isHolidayDate(slot.date, holidayDates),
    blockedReason: isHolidayDate(slot.date, holidayDates)
      ? "Holiday"
      : slot.blockedReason,
  }));
}

function getAvailableSlots(availability, holidayDates) {
  return blockHolidayDates(availability, holidayDates)
    .filter((slot) => slot.isAvailable);
}

module.exports = {
  blockHolidayDates,
  getAvailableSlots,
  isHolidayDate,
};
