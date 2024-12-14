import { Message } from '@/types/chat';

export async function sendChatMessage(message: string, history: Message[]) {
  try {
    const response = await fetch('https://tech0-gen-8-step3-app-py-11.azurewebsites.net/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}