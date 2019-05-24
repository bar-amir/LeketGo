import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAvu90OSR5YeQ4JSH61gerVvwLJZm64ADQ",
    authDomain: "leketgo.firebaseapp.com",
    databaseURL: "https://leketgo.firebaseio.com",
    projectId: "leketgo",
    storageBucket: "leketgo.appspot.com",
    messagingSenderId: "427584696273",
    appId: "1:427584696273:web:286a00c4ddae79ec"
};
// Initialize Firebase
const fire = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default fire;