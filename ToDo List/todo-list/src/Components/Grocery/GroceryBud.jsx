import {useState} from "react"
import {toast} from "react-tostify";
const GroceryBud =()=>{
    const [item,setItems]=useState("");

    const handleInputChange=(e)=>{
        setItems(e.target.value)
    }
    const insertGroceryInput=()=>{
        if(item.trim===""){
            toast.error("Please insert grocery item",{
                position:"top-center",
            });
            return;
        }
    }
    return (
        <div>
            <h1>Grocery Bud</h1>
            <section>
                <input type="text" value={item} onChange={handleInputChange} />
                <button onClick={insertGroceryInput}>Add</button>
            </section>
        </div>
    )
}

export default GroceryBud;