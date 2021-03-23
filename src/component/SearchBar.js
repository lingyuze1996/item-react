import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.changeFilterText = this.changeFilterText.bind(this)
        this.changeInStockOnly = this.changeInStockOnly.bind(this)
    }

    changeFilterText(e) {
        let text = e.target.value
        this.props.onTextChange(text)
    }

    changeInStockOnly(e) {
        let checked = e.target.checked
        console.log(checked)
        this.props.onStockOnlyChange(checked)
    }

    render() {
        const filterText = this.props.text
        const inStockOnly = this.props.inStockOnly

        return (
            <form>
                <input
                    type='text'
                    placeholder='Search...'
                    value={filterText}
                    onChange={this.changeFilterText} />
                <p>
                    <input type="checkbox" checked={inStockOnly} onChange={this.changeInStockOnly} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

export default SearchBar;