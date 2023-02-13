import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export async function getHouses():Promise<Array<Object>> {
    const houseCollection= collection(db,"posts");
    const data= await getDocs(houseCollection);
    const houses:Array<Object>=[];
    data.docs.forEach((doc)=> {
        const house:Object={...doc.data(), id:doc.id} as object;
        houses.push(house);
    } );
    return houses;

}