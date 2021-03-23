import React from 'react';
import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const rows = [];
        let lastCategory = null;
        const inStockOnly = this.props.inStockOnly
        const filterText = this.props.filterText

        this.props.data.forEach((product) => {
            if (!product.stocked && inStockOnly) {
                return
            }

            if (product.name.indexOf(filterText) === -1) {
                return
            }

            if (product.category !== lastCategory) {
                rows.push(
                    <CategoryRow category={product.category} />
                )
            }

            rows.push(
                <ProductRow product={product} />
            )

            lastCategory = product.category;
        })

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default ProductTable;