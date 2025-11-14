export const sendToTelegram = async (form) => {
  const BOT_TOKEN = "8533057931:AAEx1vNZ1R_ifRIogHS_jFmIQVPB6BNpPHA";  // BotFather
  const CHAT_ID = "6551681512";       // @userinfobot dan

  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const text = `
📩 Yangi xabar:
👤 Ism: ${form.name}
📧 Email: ${form.email}
📌 Mavzu: ${form.subject}
💬 Xabar: ${form.message}
`;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  });
};
