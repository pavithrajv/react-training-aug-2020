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
            idError:"",
            pimage:'',
            imageError:"",
            pname: '',
            nameError:"",
            pcat: '',
            catError:"",
            price: 0,
            priceError:"",
            rating: 0,
            ratingError:"",
            pstock:0,
            stockError:"",
            buttonStatus:true

        }
    }
    checkValidation=()=>{
        console.log("inside check validation")
        if(this.state.id == ''){
            this.setState({idError:"id is mandatory"})
        }
        else{
            this.setState({idError:"valid"})
        }
        if(this.state.pimage == ''){
            this.setState({imageError:"insert product image"})
        }
        else{
            this.setState({imageError:"valid"})
        }
        if(this.state.pname == ''){
            this.setState({nameError:"enter product name"})
        }
        else{
            this.setState({nameError:"valid"})
        }
        if(this.state.pcat == ''){
            this.setState({catError:"select category type"})
        }
        else{
            this.setState({catError:"valid"})
        }
        if(this.state.price == ''){
            this.setState({priceError:"enter product price"})
        }
        else{
            this.setState({priceError:"valid"})
        }
        if(this.state.rating == ''){
            this.setState({ratingError:"enter product rating"})
        }
        else{
            this.setState({ratingError:"valid"})
        }
        if(this.state.pstock == ''){
            this.setState({stockError:"Enter updated stock"})
        }
        else{
            this.setState({stockError:"valid"})
        }
    }

    getId=(event)=>{
        console.log(event.target.value)
        this.setState({id:event.target.value})
        //console.log(this.state.buttonStatus)
       
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
        this.checkValidation()
        if(this.state.idError == "valid" && this.state.imageError== "valid"  && this.state.nameError == "valid" &&this.state.catError == "valid" && this.state.priceError =="valid" && this.state.ratingError =="valid" && this.state.stockError =="valid"){
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
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div id="addbox">
                    <center><b style={{color:"#1c8adb"}}>PRODUCT INFORMATION..!!</b></center>
                <form>
                    <p>ID</p>
                    <input type="number" id="id" placeholder="enter id" onChange={this.getId}></input><span style={{ color: "red" }}>{this.state.idError}</span>
                    <br></br>
                    <p>ProductImage</p>
                    <input type="file" id="pimage" onChange={this.getPimage} multiple accept='image/*'></input><span style={{ color: "red" }}>{this.state.imageError}</span>
                    <br></br>
                    <p>ProductName</p>
                    <input type="text" id="pname" placeholder="enter productName" onChange={this.getPname}></input><span style={{ color: "red" }}>{this.state.nameError}</span>
                    <br></br>
                    <p>Category</p>
                    <select id="pcat" onChange={this.getPcat}>
                        <option>Accesories</option>
                        <option>Electronics</option>
                        <option>Dairy Products</option>
                        <option>Books</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span>
                    <br></br>
                    <p>Price</p>
                    <input type="number" id="price" placeholder="enter Price" onChange={this.getPrice}></input><span style={{ color: "red" }}>{this.state.priceError}</span>
                    <br></br>
                    <p>Rating</p>
                    <input type="number" id="rating" placeholder="enter rating" onChange={this.getRating}></input><span style={{ color: "red" }}>{this.state.ratingError}</span>
                    <br></br>
                    <p>InStock</p>
                    <input type="number" id="pstock" onChange={this.getPStock}></input><span style={{ color: "red" }}>{this.state.stockError}</span>
                    <br></br><br></br>
                    <button id="add" onClick={this.addProduct} >Save Product</button>
                </form>
                </div>
            </div>
        );
    }
}

export default addProduct;