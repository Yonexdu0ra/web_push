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
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dI0H4bQt2s8:APA91bHpDTVWFDhoaSu3JkZWILgaWo5TKOxU2AMmXg8DEIS9gABdIFpdpjBStQsi96oCFLWdh_A6WjUHpyn5fW3zNNhpfZF4jYNIW4MX0ogL0srK7Zl-ABfWJFiWubxtTySSScHOdJQz",
  expirationTime: null,
  keys: {
    p256dh:
      "BKGEmnbHJivxeot3poKm7tFVo1kYhX1stJkplAVSGbe03StNDZjG9K1_NYwRJcNd9SB57QUwn_6Ro3b0_EfOk44",
    auth: "paCf0DeqZfqtHvrxiNke2g",
  },
};

webPush.sendNotification(pushSubscription, "Hello World!");