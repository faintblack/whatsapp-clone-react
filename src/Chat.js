import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, DonutLarge, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Chat.css';

function Chat() {
	const [ seed, setSeed ] = useState('');
	const [ input, setInput ] = useState('');

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
    }, []);
    
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed ' + input);
    }

	return (
		<div className="chat">
			<div className="chat-header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="chat-header-info">
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>
				<div className="chat-header-right">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat-body">
                <p className={`chat-message ${true && "chat-receiver"} `}>
                    <span className="chat-name">Mahardika</span>
                    Hey...
                    <span className="chat-timestamp"> 17.00</span>
                </p>
            </div>
			<div className="chat-footer">
                <InsertEmoticon/>
                <form action="">
                    <input type="text" value={input} onChange={e => {
                        setInput(e.target.value)
                    }} placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
		</div>
	);
}

export default Chat;
