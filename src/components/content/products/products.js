
import React from 'react';
import Axios from 'axios';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        Axios.get('http://localhost:3000/allProducts')
            .then(response => {
                console.log(response.data)
                this.setState({ products: response.data })
            }).catch(error => {
                console.log(console.error())
            })
    }

    editProduct = () => {

    }



    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>ProductId</th>
                            <th>PRoductName</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>InStock</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(function (item, key) {
                            return (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.inStock}</td>
                                    <td>
                                        <button >Edit</button>
                                    </td>
                                    <td>
                                        <button >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductComponent;