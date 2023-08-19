// Set a daily reminder
const remindUser = () => {
    const currentDate = new Date();
    const reminderTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 10, 0, 0, 0); // Set for 10 AM

    if (currentDate > reminderTime) {
        reminderTime.setDate(reminderTime.getDate() + 1); // Set for next day if current time is past 10 AM
    }

    const timeToReminder = reminderTime.getTime() - currentDate.getTime();
    setTimeout(() => {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon.png',
            title: 'Web3 Streak Tracker',
            message: 'Engage with a dapp today to maintain your streak!'
        });
        remindUser(); // Schedule the next reminder
    }, timeToReminder);
};

remindUser();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.endsWith('.eth')) {
        // Detected a .eth domain
        // TODO: Update user's streak and store the interaction
    }
});
