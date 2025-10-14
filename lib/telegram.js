import WebApp from "@twa-dev/sdk";

export function initTelegram() {
  try {
    WebApp.ready();
    console.log("✅ Telegram WebApp initialized");

    const user = WebApp.initDataUnsafe?.user;
    if (user) {
      console.log("Logged in as:", user.username);
      return user;
    } else {
      console.log("No Telegram user found");
      return null;
    }
  } catch (error) {
    console.error("Telegram init failed:", error);
    return null;
  }
}
