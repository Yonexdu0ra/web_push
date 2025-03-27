self.addEventListener('push', function(event) {
    console.log(event);
    
    self.registration.showNotification('Hello world!', {})
})