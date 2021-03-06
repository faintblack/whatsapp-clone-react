import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({ addNewChat }) {
	const [ seed, setSeed ] = useState('');

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt('Please enter name for chat');

		if (roomName) {
			// do some clever database stuff
		}
	};

	return !addNewChat ? (
		<div className="sidebar-chat-details">
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
			<div className="sidebar-chat-info">
				<h2>Room Name</h2>
				<p>Last message . . .</p>
			</div>
		</div>
	) : (
		<div onClick={createChat} className="sidebar-chat-details" >
			<h3>Add new chat</h3>
		</div>
	);
}

export default SidebarChat;
