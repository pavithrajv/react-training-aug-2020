import React from 'react';
import Axios from 'axios';
import Navbar from '../../navbar/navbar';
import  '../../navbar/navbar.css'
import './addProduct.css'
class addProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:0,
            pimage:'',
            pname: '',
            pcat: '',
            price: 0,
            rating: 0,
            pstock:0

        }
    }

    getId=(event)=>{
        console.log(event.target.value)
        this.setState({id:event.target.value})
    }

    getPimage=(event)=>{
        console.log(event.target.value)
        console.log(event.target.value.substr(12))
        this.setState({pimage:event.target.value.substr(12)})
    }

    getPname=(event)=>{
        console.log(event.target.value)
        this.setState({pname:event.target.value})
    }

    getPcat=(event)=>{
        console.log("category"+event.target.value)
        this.setState({pcat:event.target.value})
    }

    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value})
    }

    getRating=(event)=>{
        console.log(event.target.value)
        this.setState({rating:event.target.value})
    }
    
    getPStock=(event)=>{
        console.log(event.target.value)
        this.setState({pstock:event.target.value})
    }
    addProduct = () => {
        console.log("add product rendered..")

        let productDetails = {
            "id" :this.state.id,
            "productImage": this.state.pimage,
            "productName": this.state.pname,
            "category": this.state.pcat,
            "rating": this.state.rating,
            "price": this.state.price,
            "inStock": this.state.pstock
        }
        console.log("productDetails:",productDetails)
        Axios.post('http://localhost:3002/allproducts', productDetails)
            .then(response => {
                console.log(response)
                this.props.history.push('/products')
            }).catch(error => {
                console.log(error)
                alert('Id already exist..!!')
            })

    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div id="addbox">
                    <center><b style={{color:"#1c8adb"}}>PRODUCT INFORMATION..!!</b></center>
                <form>
                    <p>ID</p>
                    <input type="number" id="id" placeholder="enter id" onChange={this.getId}></input><br></br>
                    <p>ProductImage</p>
                    <input type="file" id="pimage" onChange={this.getPimage} multiple accept='image/*'></input><br></br>
                    <p>ProductName</p>
                    <input type="text" id="pname" placeholder="enter productName" onChange={this.getPname}></input><br></br>
                    <p>Category</p>
                    <select id="pcat" onChange={this.getPcat}>
                        <option>Accesories</option>
                        <option>Electronics</option>
                        <option>Dairy Products</option>
                        <option>Books</option>
                    </select><br></br>
                    <p>Price</p>
                    <input type="number" id="price" placeholder="enter Price" onChange={this.getPrice}></input><br></br>
                    <p>Rating</p>
                    <input type="number" id="rating" placeholder="enter rating" onChange={this.getRating}></input><br></br>
                    <p>InStock</p>
                    <input type="number" id="pstock" onChange={this.getPStock}></input><br></br><br></br>
                    <button id="add" onClick={this.addProduct}>Save Product</button>
                </form>
                </div>
            </div>
        );
    }
}

export default addProduct;