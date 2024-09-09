// Function to send form data to Telegram bot
interface FormData {
    name: string
    phone: string
    email: string
    message: string
}

const sendFeedbackToTelegram = async (formData: FormData) => {
    const botToken = process.env.NEXT_PUBLIC_TG_KEY;
    const userId = '@ugToolRent'
    // Format message
    const message = `
    Новое обращение:
    Имя: ${formData.name}
    Почта: ${formData.email}
    Номер: ${formData.phone}
    Информация: ${formData.message}
  `;

    // Telegram API endpoint
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: userId, // Your Telegram User ID
                text: message,   // The message you want to send
            }),
        });

        const result = await response.json();

        if (result.ok) {
            console.log('Message sent successfully to Telegram!');
        } else {
            console.error('Failed to send message:', result);
        }
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
};

export default sendFeedbackToTelegram
