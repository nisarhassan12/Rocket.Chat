import { Box, Margins, Tabs } from '@rocket.chat/fuselage';
import React from 'react';

import { useTranslation } from '../../../../../client/contexts/TranslationContext';
import { Page } from '../../../../../client/components/basic/Page';
import { UsersTab } from './UsersTab';
import { MessagesTab } from './MessagesTab';
import { ChannelsTab } from './ChannelsTab';

export function EngagementDashboardPage({
	tab = 'users',
	onSelectTab,
}) {
	const t = useTranslation();

	const handleTabClick = onSelectTab ? (tab) => () => onSelectTab(tab) : () => undefined;

	return <Page>
		<Page.Header title={t('Engagement Dashboard')} />
		<Page.Content style={{ padding: 0 }}>
			<Margins block='x24'>
				<Tabs>
					<Tabs.Item selected={tab === 'users'} onClick={handleTabClick('users')}>{t('Users')}</Tabs.Item>
					<Tabs.Item selected={tab === 'messages'} onClick={handleTabClick('messages')}>{t('Messages')}</Tabs.Item>
					<Tabs.Item selected={tab === 'channels'} onClick={handleTabClick('channels')}>{t('Channels')}</Tabs.Item>
				</Tabs>
			</Margins>
			<Margins all='x24'>
				<Box>
					{(tab === 'users' && <UsersTab />)
				|| (tab === 'messages' && <MessagesTab />)
				|| (tab === 'channels' && <ChannelsTab />)}
				</Box>
			</Margins>
		</Page.Content>
	</Page>;
}