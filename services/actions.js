import { db } from "./firebase"
import { doc, collection, query, getDocs, addDoc, deleteDoc } from "firebase/firestore"


const fetchProductData = async () => {
    let arry = []
    const response = query(collection(db, 'products'));
    const data = await getDocs(response);
    data.forEach((doc) => {
        arry.push(doc.data())
    })
    return arry
}


const fetchCartData = async () => {
    let arry = []
    const response = query(collection(db, 'cart'));
    const data = await getDocs(response);
    data.forEach((doc) => {
        arry.push(doc.data())
    })
    return arry
}

const addTocart = async (data) => {
    const docRef = await addDoc(collection(db, "cart"), data);
    console.log("Document written with ID: ", docRef.id);
}

const clearCartState = async (data) => {
    await deleteDoc(doc(db, "cart", {}));
    console.log("Documents deleted");
}

export { fetchProductData, fetchCartData, addTocart, clearCartState }