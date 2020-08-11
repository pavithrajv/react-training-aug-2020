import React from 'react';
import axios from 'axios';
import Axios from 'axios';
import Navbar from '../../navbar/navbar';
import './editProduct.css';
class editProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        console.log(this.props.id)
        
        console.log(this.props.location.state)
        this.state={
            id:0,
            image:'../../../images/bg1.jpg',
            name:'',
            category:'',
            price:0,
            quantity:0,
            stock:0
        }
        
    }
    
    
    getPimage=(event)=>{
        console.log(event.target.value)
        this.setState({image:event.target.value})
        this.setState({image:event.target.value.substr(12)})
    }
    
    getPname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    getPcat=(event)=>{
        console.log(event.target.value)
        this.setState({category:event.target.value})
    }
    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value})
    }
    getQuantity=(event)=>{
        console.log(event.target.value)
        this.setState({quantity:event.target.value})
    }
    getPStock=(event)=>{
        console.log(event.target.value)
        this.setState({stock:event.target.value})
    }
    
    componentWillMount(){
        if(this.props.location.state!==undefined){
            Axios.get('http://localhost:3002/allproducts/'+this.props.location.state.currentid)
            .then(response=>{
                console.log(response)
                console.log(response.data.productImage)
                console.log(this.state.image)
                this.setState({
                    id:response.data.id,
                     image:response.data.productImage,
                    name:response.data.productName,
                    category:response.data.category,
                    quantity:response.data.quantity,
                    price:response.data.price,
                    stock:response.data.inStock    
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
            "productName":this.state.name,
            "category":this.state.category,
            "quantity":this.state.quantity,
            "price":this.state.price,
            "inStock":this.state.stock
        }
        console.log("productDetails:",productDetails)
        axios.put('http://localhost:3002/allproducts/'+this.state.id, productDetails)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                    this.componentWillMount()
                }, error=>{
                    console.error(error);
                })
        
    }
    
    render() { 
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>You cannot navigate to edit product from here!!!! </h1>
                </div>
            )
            }    
        return ( 
            <div>
                <Navbar></Navbar>
                <div id="editbox">
                    <center><b style={{color:"#1c8adb"}}>EDIT PRODUCT INFO.!!</b></center>
                <form>
                <p>ID</p>
                    <input type="number" value={this.state.id} readOnly></input><br></br>
                    <p>ProductImage</p>
                    <input type="file" id="image" onChange={this.getPimage} readOnly multiple accept='image/*'></input><br></br>
                    <p>ProductName</p>
                    <input type="text" id="name" value={this.state.name} onChange={this.getPname}></input><br></br>
                    <p>Category</p>
                    <select id="category" value={this.state.category} onChange={this.getPcat}>
                        <option>Accesories</option>
                        <option>Electronics</option>
                        <option>Dairy Products</option>
                        <option>Books</option>
                    </select><br></br>
                    <p>Price</p>
                    <input type="number" id="price" value={this.state.price} onChange={this.getPrice}></input><br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" value={this.state.quantity} onChange={this.getQuantity}></input><br></br>
                    <p>InStock</p>
                    <input type="number" id="stock" value={this.state.stock} onChange={this.getPStock}></input><br></br>
                    <button id="edit" onClick={this.editProduct}>Update Product</button>
                </form>
                </div>
            </div>
         );
    }
}
 
export default editProduct;