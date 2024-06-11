import './App.css';

function Messages({ messages }) {
    return (
        <div className="Messages">
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    )
}

export default Messages;