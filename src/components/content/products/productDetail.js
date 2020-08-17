import React from 'react';
import './productDetail.css'
class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.id)
        console.log("editid:",this.props.pimage)
        this.state = {}
    }

    editProduct = () => {
        console.log("edit product with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    deleteProduct = () => {
        console.log("delete product rendered....")
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }
    // // render(){

    // //     let imgStyle ={
    // //         width:'100px',
    // //         borderRadius:'10px'
    // //     }
    // // } 
    // //     return (

    // //             // <tr>
    // //             //     <td>{this.props.id}</td>
    // //             //     <td>
    // //             //     <img src={"images/" + this.props.pimage} style={imgStyle}></img>
    // //             //     </td>
    // //             //     <td>{this.props.name}</td>
    // //             //     <td>{this.props.category}</td>
    // //             //     <td>{this.props.price}</td>
    // //             //     <td>{this.props.quantity}</td>
    // //             //     <td>{this.props.inStock}</td>
    // //             //     <td>
    // //             //         <button style={{backgroundColor:" #61dafb",borderRadius:"10px",border:"none",padding:"5px"}} onClick={this.editProduct}>Edit</button>
    // //             //     </td>
    // //             //     <td>
    // //             //         <button style={{backgroundColor:" #61dafb",borderRadius:"10px",border:"none",padding:"5px"}} onClick={this.deleteProduct}>Delete</button>
    // //             //     </td>
    // //             // </tr>

    // //     )
    // }
    render() {
        let imgStyle = {
            width: '100px',
            height:'100px',
            borderRadius: '10px'
        }
        return (
            <tr>

                <td>{this.props.code} </td>
                {/* <td>
                    <img src={"images/" + this.props.pimage} alt="sorry,no img" style={imgStyle}></img>
                </td> */}
                <td>{this.props.name} </td>
                <td>{this.props.vendor}</td>
                <td>{this.props.category}</td>
                <td>{this.props.manufacturer}</td>
                <td>{this.props.price}</td>
                <td>{this.props.quantity}</td>
                {/* <td>{this.props.inStock}</td> */}
                <td>
                    <button id="editpro" onClick={this.editProduct}>Edit</button>
                </td>
                <td>
                    <button id="deletepro" onClick={this.deleteProduct}>Delete</button>
                </td>

            </tr>
        )
    }
}

export default ProductDetail;