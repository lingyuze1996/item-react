import React from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class Framework extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SearchBar/>
                <ProductTable data={this.props.data}/>
            </>
        )
    }
}

export default Framework;