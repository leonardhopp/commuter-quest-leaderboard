import './style.css';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, onSnapshot,orderBy, query, where } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyChrD9-1LY3C-SSnL5wrIQP8App9G0pPFw",
  authDomain: "commuter-quest.firebaseapp.com",
  databaseURL: "https://commuter-quest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "commuter-quest",
  storageBucket: "commuter-quest.appspot.com",
  messagingSenderId: "337373202395",
  appId: "1:337373202395:web:a42b8521f1f298df3b89fe",
  measurementId: "G-K6SCFTM9KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db,"scores");
const q = query(colRef, orderBy("score", "desc"))

//get collection data (real time)
onSnapshot(q, (snapshot) => {
  let scores = []
  snapshot.docs.forEach((doc) => {
    scores.push({...doc.data(), id: doc.id})
  })
  console.log("onsnapshot: ", scores)
  populateTable(scores)
})

// Function to populate the table
function populateTable(data) {
  if (data) {
    const table = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];

    // Clear existing table rows
    table.innerHTML = '';
       
    data.forEach((item, index) => {
        let row = table.insertRow();
        let cellRank = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);


        cellRank.textContent = index + 1; // Add 1 to index for rank
        cell1.textContent = item.userTag;
        cell2.textContent = item.score;
    });
  }
}


