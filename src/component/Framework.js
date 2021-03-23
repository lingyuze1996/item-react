import React from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class Framework extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.handleFilterText = this.handleFilterText.bind(this);
        this.handleInStockFilter = this.handleInStockFilter.bind(this);
    }

    handleFilterText(text) {
        this.setState(
            state => ({
                filterText: text
            })
        )
    }

    handleInStockFilter(boolean) {
        this.setState(
            state => ({
                inStockOnly: boolean
            })
        )
    }

    render() {
        const rawData = this.props.data

        return (
            <>
                <SearchBar text={this.state.filterText} inStockOnly={this.state.inStockOnly} onTextChange={this.handleFilterText} onStockOnlyChange={this.handleInStockFilter}/>
                <ProductTable data={rawData} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </>
        )
    }
}

export default Framework;