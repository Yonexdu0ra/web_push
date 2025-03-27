self.addEventListener('push', function(event) {
    self.registration.sendNotification('Hello World!', {});
})