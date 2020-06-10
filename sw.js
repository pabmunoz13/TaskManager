/* eslint strict: 0 */

'use strict';

// on push create notification
self.addEventListener('push', event => {
	const pushedData = event.data.json();

	event.waitUntil(
		self.registration.showNotification(pushedData.title, pushedData.options)
	);
});

// on notification click open related url
self.addEventListener('notificationclick', event => {
	const data = event.notification.data;

	if (data && data.url) {
		event.notification.close();
		self.clients.openWindow(data.url);
	}
});