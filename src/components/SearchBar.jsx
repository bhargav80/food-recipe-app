import React from "react";

export const SearchBar = ({setSearchQuery})=>{
    return(
        <input type="text" placeholder="Search for recipes"  onChange={(e)=>setSearchQuery(e.target.value)}/>
    )
}