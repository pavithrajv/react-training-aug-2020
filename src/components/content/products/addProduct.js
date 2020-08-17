import React from 'react';
import Axios from 'axios';
import Navbar from '../../navbar/navbar';
import  '../../navbar/navbar.css'
import './addProduct.css'
class addProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code:'',
            codeError:"",
            // pimage:'',
            // imageError:"",
            pname: '',
            nameError:"",
            vendor:'',
            vendorError:'',
            pcat: '',
            catError:"",
            manufacturer:'',
            manfError:"",
            price: 0,
            priceError:"",
            quantity: 0,
            quantityError:"",
            pstock:0,
            stockError:"",
            buttonStatus:true

        }
    }
    checkValidation=()=>{
        console.log("inside check validation")
        if(this.state.code == ''){
            this.setState({codeError:"code is mandatory"})
        }
        else{
            this.setState({codeError:"valid"})
        }
        // if(this.state.pimage == ''){
        //     this.setState({imageError:"insert product image"})
        // }
        // else{
        //     this.setState({imageError:"valid"})
        // }
        if(this.state.pname == ''){
            this.setState({nameError:"enter product name"})
        }
        else{
            this.setState({nameError:"valid"})
        }
        if(this.state.vendor == ''){
            this.setState({vendorError:"enter vendor name"})
        }
        else{
            this.setState({vendorError:"valid"})
        }
        if(this.state.pcat == ''){
            this.setState({catError:"select category type"})
        }
        else{
            this.setState({catError:"valid"})
        }
        if(this.state.manufacturer == ''){
            this.setState({manfError:"enter product manufacturer"})
        }
        else{
            this.setState({manfError:"valid"})
        }
        if(this.state.price == ''){
            this.setState({priceError:"enter product price"})
        }
        else{
            this.setState({priceError:"valid"})
        }
        if(this.state.quantity == ''){
            this.setState({quantityError:"enter product quantity"})
        }
        else{
            this.setState({quantityError:"valid"})
        }
        // if(this.state.pstock == ''){
        //     this.setState({stockError:"Enter updated stock"})
        // }
        // else{
        //     this.setState({stockError:"valid"})
        // }
    }

    getCode=(event)=>{
        console.log(event.target.value)
        this.setState({code:event.target.value})
        //console.log(this.state.buttonStatus)
       
    }

    // getPimage=(event)=>{
    //     console.log(event.target.value)
    //     console.log(event.target.value.substr(12))
    //     this.setState({pimage:event.target.value.substr(12)})
    // }

    getPname=(event)=>{
        console.log(event.target.value)
        this.setState({pname:event.target.value})
    }

    getVendor=(event)=>{
        console.log(event.target.value)
        this.setState({vendor:event.target.value})
    }

    getPcat=(event)=>{
        console.log("category"+event.target.value)
        this.setState({pcat:event.target.value})
    }

    getManufacturer=(event)=>{
        console.log("manufacturer"+event.target.value)
        this.setState({manufacturer:event.target.value})
    }

    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value})
    }

    getQuantity=(event)=>{
        console.log(event.target.value)
        this.setState({quantity:event.target.value})
    }
    
    // getPStock=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({pstock:event.target.value})
    // }
    
    addProduct = () => {
        console.log("add product rendered..")
        this.checkValidation()
        console.log(this.state.code)
        if(this.state.codeError == "valid" && this.state.nameError == "valid" && this.state.vendorError =="valid" &&this.state.catError == "valid" && this.state.manfError == "valid" &&this.state.priceError =="valid" && this.state.quantityError =="valid" ){
            console.log("innnnnn")
        let productDetails = {
            "productCode" :this.state.code,
            // "productImage": this.state.pimage,
            "productName": this.state.pname,
            "vendor":this.state.vendor,
            "category": this.state.pcat,
            "Manufacturer":this.state.manufacturer,
            "quantity": this.state.quantity,
            "price": this.state.price,
            // "inStock": this.state.pstock
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
                    <p>ProductCode</p>
                    <input type="text" id="code" placeholder="enter productCode" onChange={this.getCode}></input><span style={{ color: "red" }}>{this.state.codeError}</span>
                    <br></br>
                    {/* <p>ProductImage</p>
                    <input type="file" id="pimage" onChange={this.getPimage} multiple accept='image/*'></input><span style={{ color: "red" }}>{this.state.imageError}</span>
                    <br></br> */}
                    <p>ProductName</p>
                    <input type="text" id="pname" placeholder="enter productName" onChange={this.getPname}></input><span style={{ color: "red" }}>{this.state.nameError}</span>
                    <br></br>
                    <p>Vendor</p>
                    <input type="text" id="vendor" placeholder="enter vendor details" onChange={this.getVendor}></input><span style={{ color: "red" }}>{this.state.vendorError}</span>
                    <br></br>
                    <p>Category</p>
                    <select id="pcat" onChange={this.getPcat}>
                        <option disabled>Electronics</option>
                        <option>Mobile</option>
                        <option>Laptop</option>
                        <option>Headphones</option>
                        <option>Speaker</option>
                        <option>Camera</option>
                        <option>Accesories</option>
                    </select><span style={{ color: "red" }}>{this.state.catError}</span>
                    <br></br>
                    <p>Manufacturer</p>
                    <input type="text" id="manufacturer" placeholder="enter manufacturer" onChange={this.getManufacturer}></input><span style={{ color: "red" }}>{this.state.manfError}</span>
                    <br></br>
                    <p>Price</p>
                    <input type="number" id="price" placeholder="enter Price" onChange={this.getPrice}></input><span style={{ color: "red" }}>{this.state.priceError}</span>
                    <br></br>
                    <p>Quantity</p>
                    <input type="number" id="quantity" placeholder="enter quantity" onChange={this.getQuantity}></input><span style={{ color: "red" }}>{this.state.quantityError}</span>
                    <br></br><br></br>
                    {/* <p>InStock</p>
                    <input type="number" id="pstock" onChange={this.getPStock}></input><span style={{ color: "red" }}>{this.state.stockError}</span>
                    <br></br><br></br> */}
                    <button id="add" onClick={this.addProduct} >Save Product</button>
                </form>
                </div>
            </div>
        );
    }
}

export default addProduct;