import { useState } from "react"
import data from "../data/data.json";

const Restaurant=()=>{
    const [search,setSearch]=useState("");
    const renderList=()=>{
        const list=data
            .filter((restaurant)=>restaurant.name.toLowerCase().includes(search.toLowerCase()));

        return list.map((restaurant)=>(
            <h3 key={restaurant._id.$oid}>{restaurant.name}</h3>))
    }
    return (
        <div>
            <input placeholder="search restaurant"  value={search} onChange={(e)=>setSearch(e.target.value)}/>

            <section>
                <ul>
                    {renderList()}
                </ul>
            </section>
        </div>
    )
}

export default Restaurant;