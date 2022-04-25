import React from 'react';
import ReactDOM from 'react-dom/client';
const Hello = () => {
  const [text, setText] = React.useState('Hello Pet!');
  return (
    <span
      onClick={() => {
        setText('Hi!');
      }}
    >
      {text}
    </span>
  );
};
const root = ReactDOM.createRoot(document.getElementById('pet')!);
root.render(<Hello />);
