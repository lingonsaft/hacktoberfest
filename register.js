if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js', {scope: '/'}).then((registration) => {
			console.log('Service Worker -Registered- With scope: ', registration.scope);
		}, (err) => {
			// registration failed
			console.log('Service Worker -Failed to Register-', err);
<<<<<<< HEAD
			console.log('hacktoberfest!');
		});
	});
}
=======
		});
	});
}
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
