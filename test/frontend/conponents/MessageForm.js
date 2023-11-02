import React, { useState } from 'react';
import { sendMessage } from '../utils/api';

const MessageForm = ({ setMessages }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMessage = await sendMessage(content); // バックエンドにメッセージを送信する関数
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setContent('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
