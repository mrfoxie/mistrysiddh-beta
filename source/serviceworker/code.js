if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(() => {
            console.info('Mr. Blogger Service Worker Registered');
        }, err => console.error("Mr. Blogger Service Worker registration failed: ", err));

    navigator.serviceWorker
        .ready
        .then(() => {
            console.info('Mr. Blogger Service Worker Ready');
        });
}