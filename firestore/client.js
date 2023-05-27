import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDVpUWNa4ai2168ygDKcjWKzGTH2u0ctcY',
  authDomain: 'portfolio-9076d.firebaseapp.com',
  projectId: 'portfolio-9076d',
  storageBucket: 'portfolio-9076d.appspot.com',
  messagingSenderId: '836886481857',
  appId: '1:836886481857:web:dc76dea01df052c0183d40',
  measurementId: 'G-PC3RME89MC'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export async function getProjects () {
  const data = collection(db, 'projects')
  const dataSnapshot = await getDocs(data)
  const dataList = dataSnapshot.docs.map(doc => doc.data())
  return dataList
}

export async function getExperience () {
  const experienceData = collection(db, 'experience')
  const professionalData = collection(db, 'professional')

  const dataSnapshot = await getDocs(experienceData)
  const professionalSnapshot = await getDocs(professionalData)
  const experienceList = dataSnapshot.docs.map(doc => doc.data()).sort((a, b) => a.positionId - b.positionId)
  const professionalList = professionalSnapshot.docs.map(doc => doc.data())
  return {
    experienceList,
    professionalList
  }
}
