import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<Avatar />
				<div className="sidebar-header-right">
					<IconButton>
						<DonutLarge />
					</IconButton>
					<IconButton>
						<Chat />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="sidebar-search">
				<div className="sidebar-search-container">
					<SearchOutlined />
					<input placeholder="Search or start a new chat" />
				</div>
			</div>
			<div className="sidebar-chat">
                <SidebarChat addNewChat />
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
		</div>
	);
}

export default Sidebar;
