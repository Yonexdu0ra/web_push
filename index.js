import webPush from "web-push";


const vapidPublicKey =
  "BFk1UbxoVICZ1ZaCWmS02v0zKwlsYJGR4dJJrfBjJ--5OqjsDrKQWYr45ms8jbGnTRhWg_Yslq70wdUpHQix7rQ";
const vapidPrivateKey = "MHMOCdc46C2AYfDkArP_d0MlXPPDTpHPac2Rzmj8QGs";



webPush.setVapidDetails(
  "mailto:qingusi1@gmail.com", // Địa chỉ email của bạn
  vapidPublicKey,
  vapidPrivateKey
);


const pushSubscription = {
//   endpoint: "USER_SUBSCRIPTION_ENDPOINT",
//   keys: {
//     p256dh: "USER_PUBLIC_KEY",
//     auth: "USER_AUTH_KEY",
//   },
};

webPush.sendNotification(pushSubscription, "Hello World!");