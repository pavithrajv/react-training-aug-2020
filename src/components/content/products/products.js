
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
            sortValue: 'Sort by',
            products: [],
            newProducts: [],
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
                    pimage={product.productImage}
                    name={product.productName}
                    vendor={product.vendor}
                    category={product.category}
                    manufacturer={product.Manufacturer}
                    color={product.color}
                    price={product.price}
                    quantity={product.quantity}
                    rating={product.rating}
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
        this.setState({ currentid: id })
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

    searchCategories = (event) => {
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
    searchManufacturer = (event) => {
        if (event.target.value !== '') {
            console.log(event.target.value)

            let filteredList = this.state.products.filter((product) => {
                return product.Manufacturer.toLowerCase().includes(event.target.value.toLowerCase());

            })
            console.log("filteredList", filteredList);
            this.setState({ products: filteredList });
            console.log(this.state.products)

        }
        else {
            this.getAllProducts()
        }
    }

    sort = (event) => {
        let sv=event.target.value
        console.log(sv)
        // console.log("sort" + event.target.value)
        // this.setState({ sortValue: event.target.value })
        // console.log("sort" + this.state.sortValue)
        // if (this.state.sortValue == "price") {
        //     this.priceSort()

        // }
        // if (this.state.sortValue == "quantity") {
        //     this.quantitySort()

        // }
        if (sv == "price") {
            this.priceSort()

        }
        if (sv == "quantity") {
            this.quantitySort()

        }
        if(sv=="rating"){
            this.ratingSort()
        }
    }

    quantitySort = () => {
        let qty
        qty = this.state.products.sort((a, b) => { return a.quantity - b.quantity })
        this.setState({ products: qty })
        console.log(qty)
    }

    priceSort = () => {
        let price
        price = this.state.products.sort((a, b) => { return a.price - b.price })
        this.setState({ products: price })
        console.log(price)
    }
    ratingSort = () => {
        let rating
        rating = this.state.products.sort((a, b) => { return b.rating - a.rating })
        this.setState({ products: rating })
        console.log(rating)
    }


    render() {
        return (
            <div>
                <Navbar></Navbar>


                <input type="text" name="search" id="search" onChange={this.searchProducts} placeholder="Search by product"></input>
                <input type="text" name="search" id="search" onChange={this.searchCategories} placeholder="Search by category"></input>
                <input type="text" name="search" id="search" onChange={this.searchManufacturer} placeholder="Search by manufacturer"></input>
                <select id="sortValue" className="sort" onChange={this.sort}>
                    <option>Sort by</option>
                    <option>price</option>
                    <option>quantity</option>
                    <option>rating</option>
                </select>
                <button id="addpro" onClick={this.addProduct}>Add product</button>

                <div style={{ overflowX: "auto" }}>
                    <table border="none" id="customers">
                        <thead>
                            <tr>
                                <th>Preview</th>
                                <th>ProductCode</th>
                                {/* <th>ProductImage</th> */}
                                <th>ProductName</th>
                                <th>Vendor</th>
                                <th>Category</th>
                                <th>Manufacturer</th>
                                <th>color</th>
                                <th onClick={this.priceSort}>Price</th>

                                <th onClick={this.quantitySort}>InStock</th>
                                <th>Rating</th>
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