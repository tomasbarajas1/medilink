# v1 Booking API – Removed

The v1 booking endpoints (/api/v1/book, /api/v1/cancel) were deprecated.
Logs showed no client calls in the last 30 days, so they were removed.
Any call to a v1 endpoint now returns 410 Gone. Clients must use /api/v2.
