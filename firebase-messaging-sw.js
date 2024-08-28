// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCaGaqkFjt11rjCZ2tscCy3YimzJV_gido",
  authDomain: "jonalogic-c8ecf.firebaseapp.com",
  projectId: "jonalogic-c8ecf",
  storageBucket: "jonalogic-c8ecf.appspot.com",
  messagingSenderId: "67802613164",
  appId: "1:67802613164:web:37579fb27c06b11dde6609"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
