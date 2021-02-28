import React from 'react';
import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.data.forEach((product) => {
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

    constructor(props) {
        super(props);
    }
}

export default ProductTable;