import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeQ7HYPlIoAVUqubkycjr1BOmjt_SWFZY",
  authDomain: "nirvana-audio-book.firebaseapp.com",
  projectId: "nirvana-audio-book",
  storageBucket: "nirvana-audio-book.firebasestorage.app",
  messagingSenderId: "1065873507202",
  appId: "1:1065873507202:web:df8be6ed3389b499f6859b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;