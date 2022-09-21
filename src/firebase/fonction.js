import { addDoc,updateDoc,doc,setDoc, getDoc,onSnapshot  } from "firebase/firestore";
// import {db} from '@/firebase'



class FonctionGenrique {
  add(collectionRef,datas) {
    return addDoc(collectionRef,datas)
  }
  //   get () {
  //   return getDocs((collectionRef,datas))
  // }
  create(docRef,datas){
    return setDoc(docRef,datas)
  }
  
    update(collectionRef,document){
    return updateDoc(doc(collectionRef,document))
    }
  show(DocRef){
    return getDoc(DocRef)
  }
  
 
  //   delet = id =>{
  //   return usercolection.doc(id).delete()
  // }
  //   userLoaders = () =>{
  //   const user = ref([])
  //   const close = usercolection.onSnapshot(snapshot=>{
  //     user.value = snapshot.doc.map(doc =>({id: doc.id, ...doc.data()}))
  //   })
  //   onUnmounted(close)
  //   return user
  // }
}
export default new FonctionGenrique()


