import SearchBox from "./SearchBox";
import React from "react";
import Checkbox from "./Checkbox";

function SearchBar() {
    return (
        <form>
            <input type='text' placeholder='Search...'/>
            <br/>
            <input id='box' type="checkbox" checked={true}/>
            <label htmlFor='box'>Only show products in stock</label>
        </form>
    )
}

export default SearchBar;