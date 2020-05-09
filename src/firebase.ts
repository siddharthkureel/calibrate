import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyATRs5NXQU4_OYSoM_fIPh9Bw-yfsmBqRM",
    authDomain: "calibrate-59c3f.firebaseapp.com",
    databaseURL: "https://calibrate-59c3f.firebaseio.com",
    projectId: "calibrate-59c3f",
    storageBucket: "calibrate-59c3f.appspot.com",
    messagingSenderId: "430556125159",
    appId: "1:430556125159:web:14399f70231f7bd6288f42",
    measurementId: "G-X8V832WWSG"
};

const firebaseLooper = (snapshot: firebase.database.DataSnapshot) => {
    let data: any[] = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data
}

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();

async function onAuthStateChanged() {
  return await new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Ops!'));
      }
    });
  });
}
export {
    firebase,
    firebaseDB,
    firebaseLooper,
    onAuthStateChanged
}