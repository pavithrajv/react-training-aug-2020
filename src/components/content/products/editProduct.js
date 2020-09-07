import React from 'react';
import axios from 'axios';
import Axios from 'axios';
import Navbar from '../../navbar/navbar';
import './editProduct.css';
class editProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        console.log(this.props.key)
        
        console.log(this.props.location.state)
        this.state={
            id:0,
            code:'',
            image:'',
            name:'',
            vendor:'',
            category:'',
            manufacturer:'',
            color:'',
            price:0,
            quantity:0,
            rating:0
           // stock:0
        }
        
    }
    
    
    getPimage=(event)=>{
        console.log(event.target.value)
        this.setState({image:event.target.value})
        //this.setState({image:event.target.value})
    }
    
    getPname=(event)=>{
        console.log(event)
        console.log(event.target) 
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    getVendor=(event)=>{
        console.log(event.target.value)
        this.setState({vendor:event.target.value})
    }
    getPcat=(event)=>{
        console.log(event.target.value)
        this.setState({category:event.target.value})
    }
    getManufacturer=(event)=>{
        console.log(event.target.value)
        this.setState({manufacturer:event.target.value})
    }
    getColor = (event) => {
        console.log(event.target.value)
        this.setState({ color: event.target.value })
    }
    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value})
    }
    getQuantity=(event)=>{
        console.log(event.target.value)
        this.setState({quantity:event.target.value})
    }
    getRating = (event) => {
        console.log(event.target.value)
        this.setState({ rating: event.target.value })
    }
    // getPStock=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({stock:event.target.value})
    // }
    
    componentDidMount(){
        if(this.props.location.state!==undefined){
            Axios.get('http://localhost:3002/allproducts/'+this.props.location.state.currentid)
            .then(response=>{
                console.log(response)
                console.log(response.data.productImage)
                console.log(this.state.image)
                this.setState({
                    code:response.data.productCode,
                    image:response.data.productImage,
                    name:response.data.productName,
                    vendor:response.data.vendor,
                    category:response.data.category,
                    manufacturer:response.data.Manufacturer,
                    color:response.data.color,
                    quantity:response.data.quantity,
                    price:response.data.price,
                    rating:response.data.rating
                    //stock:response.data.inStock    
                })
            }).catch(error=>{
                console.log(error)
            })
        }
        
    }
    editProduct=()=>{
        console.log("in edit product..")
        let productDetails = {
            "productImage": this.state.image,
            "productCode":this.state.code,
            "productName":this.state.name,
            "vendor":this.state.vendor,
            "category":this.state.category,
            "Manufacturer":this.state.manufacturer,
            "color":this.state.color,
            "quantity":this.state.quantity,
            "price":this.state.price,
            "rating":this.state.rating
            // "inStock":this.state.stock
        }
        console.log("productDetails:",productDetails)
        axios.put('http://localhost:3002/allproducts/'+this.props.location.state.currentid, productDetails)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                    this.componentDidMount()
                }, error=>{
                    console.error(error);
                })
        
    }
    
    render() { 
        if(this.props.location.state === undefined){
            return (
                <div>
                    <center><h1>You cannot navigate to edit product from here!!!! </h1></center>
                </div>
            )
            }    
        return ( 
            <div>
                <Navbar></Navbar>
                <div id="editbox">
                    <center><b style={{color:"#1c8adb"}}>EDIT PRODUCT INFO.!!</b></center>
                <form>
                    <p>ProductCode</p>
                    <input type="text" value={this.state.code} readOnly></input><br></br>
                    <p>ProductImage</p>
                    <input type="text" id="image" value={this.state.image} onChange={this.getPimage} ></input><br></br>
                    <p>ProductName</p>
                    <input type="text" id="name" value={this.state.name} onChange={this.getPname}></input><br></br>
                    <p>Vendor</p>
                    <input type="text" id="vendor" value={this.state.vendor} onChange={this.getVendor}></input><br></br>
                    <br></br>
                    <p>Category</p>
                    <select id="category" value={this.state.category} onChange={this.getPcat}>
                    <option disabled>Electronics</option>
                        <option>Mobile</option>
                        <option>Laptop</option>
                        <option>Headphones</option>
                        <option>Speaker</option>
                        <option>Camera</option>
                        <option>Accesories</option>
                    </select><br></br>
                    <p>Manufacturer</p>
                    <input type="text" id="manufacturer" value={this.state.manufacturer} onChange={this.getManufacturer}></input><br></br>
                    <p>Color</p>
                    <input type="text" id="color" value={this.state.color} onChange={this.getColor}></input><span style={{ color: "red" }}>{this.state.codeError}</span>
                    <br></br>
                    <p>Price</p>
                    <input type="number" id="price" value={this.state.price} onChange={this.getPrice}></input><br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" value={this.state.quantity} onChange={this.getQuantity}></input><br></br>
                    <p>Rating</p>
                    <input type="number" id="rating" value={this.state.rating} onChange={this.getRating}></input><span style={{ color: "red" }}>{this.state.ratingError}</span>
                    <br></br>
                    {/* <p>InStock</p>
                    <input type="number" id="stock" value={this.state.stock} onChange={this.getPStock}></input><br></br> */}
                    <button id="edit" onClick={this.editProduct}>Update Product</button>
                </form>
                </div>
            </div>
         );
    }
}
 
export default editProduct;