import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMessages } from '../utils/api';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getMessages(); // バックエンドからメッセージを取得する関数
        setMessages(fetchedMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleLogout = () => {
    // ログアウト処理
    router.push('/login');
  };

  return (
    <div>
      <h1>Messages</h1>
      <button onClick={handleLogout}>Logout</button>
      <MessageList messages={messages} />
      <MessageForm setMessages={setMessages} />
    </div>
  );
};

export default Messages;
