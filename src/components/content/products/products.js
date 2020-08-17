
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
            newProducts:[],
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
                    code={product.productCode}
                    // pimage={product.productImage}
                    name={product.productName}
                    vendor={product.vendor}
                    category={product.category}
                    manufacturer={product.Manufacturer}
                    price={product.price}
                    quantity={product.quantity}
                    // inStock={product.inStock}
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

    searchCategories=(event) =>{
        if (event.target.value !== '') {
            console.log(event.target.value)

            let filteredList = this.state.products.filter((product) => {
                return product.category.toLowerCase().includes(event.target.value.toLowerCase());

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
                <ul>
               <li> <input type="search" name="search" id="search" onChange={this.searchProducts} placeholder="Search for a product"></input></li>
               <li> <input type="text" name="search" id="search" onChange={this.searchCategories} placeholder="Search by category"></input></li>
                <li><button id="addpro" onClick={this.addProduct}>Add product</button></li></ul>
                <div>
                <table border="none" id="customers">
                    <thead>
                        <tr>
                            <th>ProductCode</th>
                            {/* <th>ProductImage</th> */}
                            <th>ProductName</th>
                            <th>Vendor</th>
                            <th>Category</th>
                            <th>Manufacturer</th>
                            <th>Price</th>
                            
                            <th>InStock</th>
                            <th colSpan="2">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderAllProducts()}

                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default ProductComponent;