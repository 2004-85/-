import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <strong>{message.sender}</strong>: {message.content}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
