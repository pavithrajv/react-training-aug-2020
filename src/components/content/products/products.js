
import React from 'react';
import Axios from 'axios';
import ProductDetail from './productDetail';
import Navbar from '../../navbar/navbar';
import '../../navbar/navbar.css';
import './products.css'

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentid: 0
           


        }
    }

    componentWillMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        Axios.get('http://localhost:3002/allProducts')
            .then(response => {
                console.log(response.data)
                this.setState({ products: response.data })
            }).catch(error => {
                console.log(error)
            })
    }

    renderAllProducts = () => {
        console.log("all products will be rendered..")
        return this.state.products.map(product => {
            return (
                <ProductDetail
                    key={product.id}
                    id={product.id}
                    pimage={product.productImage}
                    name={product.productName}
                    category={product.category}
                    price={product.price}
                    quantity={product.quantity}
                    inStock={product.inStock}
                    deleteId={this.deleteProductFromAxios}
                    editId={this.editProductFromAxios}
                >

                </ProductDetail>
            )
        })
    }


    addProduct = () => {
        console.log("add product rendered...")
        console.log(this.props);
        this.props.history.push('/addproduct')
    }

    editProductFromAxios = (id) => {
        console.log("edit product rendered from products.js ..")
        this.setState({ currentid: id})
        console.log('Edit product with currentid: ' + id);
        this.props.history.push({
            pathname: '/editproduct',
            state: { currentid: id }
        })

    }

    deleteProductFromAxios = (id) => {
        console.log("delete product from axios rendered..")
        Axios.delete('http://localhost:3002/allproducts/' + id)
            .then(response => {
                console.log(response)
                alert('You are deleting a product..')
                this.getAllProducts()
            }).catch(error => {
                console.log(error)
            })
    }

    searchProducts = (event) => {
        console.log("search products is being called..!")
        console.log(event.target.value)
        console.log(this.state.products)
        if (event.target.value !== '') {
            console.log(event.target.value)

            let filteredList = this.state.products.filter((product) => {
                return product.productName.toLowerCase().includes(event.target.value.toLowerCase());

            })
            console.log("filteredList", filteredList);
            this.setState({ products: filteredList });
            console.log(this.state.products)

        }
        else {
            this.getAllProducts()
        }

    }


    render() {
        return (
            <div>
                <Navbar></Navbar>
                <input type="text" name="search" id="search" onChange={this.searchProducts} placeholder="Search for a product"></input>
                <button id="addpro" onClick={this.addProduct}>Add product</button>
                <table border="none" id="customers">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>ProductImage</th>
                            <th>PRoductName</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>InStock</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderAllProducts()}

                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default ProductComponent;