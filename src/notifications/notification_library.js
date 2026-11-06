// #9 Upgrade the notification library used by appointment reminders
const CURRENT_VERSION = "2.0.0";
const SUPPORTED_CHANNELS = ["sms", "email", "push"];

function createNotificationClient(options = {}) {
  const enabledChannels = options.enabledChannels || SUPPORTED_CHANNELS;

  if (!enabledChannels.every((channel) => SUPPORTED_CHANNELS.includes(channel))) {
    throw new Error("Unsupported notification channel");
  }

  return {
    version: CURRENT_VERSION,
    enabledChannels,
    send(notification) {
      if (!notification.recipient || !notification.message) {
        throw new Error("Notification recipient and message are required");
      }
      if (!enabledChannels.includes(notification.channel)) {
        throw new Error(`Notification channel is disabled: ${notification.channel}`);
      }

      return {
        ...notification,
        libraryVersion: CURRENT_VERSION,
        status: "queued",
      };
    },
  };
}

function upgradeNotificationLibrary(previousClient, options = {}) {
  if (!previousClient || typeof previousClient.send !== "function") {
    throw new Error("A notification client is required for upgrade");
  }

  const upgradedClient = createNotificationClient(options);
  return {
    ...upgradedClient,
    migratedFrom: previousClient.version || "legacy",
  };
}

module.exports = {
  CURRENT_VERSION,
  createNotificationClient,
  upgradeNotificationLibrary,
};
