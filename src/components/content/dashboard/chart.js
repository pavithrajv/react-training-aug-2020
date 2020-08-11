import React from 'react';
import { Chart } from 'react-google-charts';
import Axios from 'axios';
class ChartComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            barChartData: [["category", "stock."]],
            barChartData2:[["productName","Stock"]],
            categories: [],
            products: [],
            productNames: []
        }
    }

    componentWillMount() {
        this.getAllProducts();
        this.getProductNames();

    }

    getAllProducts = () => {
        Axios.get('http://localhost:3002/allproducts')
            .then(response => {
                this.setState({ products: response.data })
                let categoryArr = [];

                response.data.map(data => {
                    categoryArr.push(data.category)
                })

                this.setState({ categories: categoryArr })

                let arr = this.state.categories.filter((value, index, self) => self.indexOf(value) === index)

                arr.map(datamap => {
                    let quantity = []
                    quantity = this.state.products.filter(prod =>
                        prod.category === datamap
                    )
                    console.log(quantity)
                    let count = 0;
                    quantity.map(data => {
                        count = parseInt(data.inStock) + count;
                        console.log(count)
                    })
                    this.state.barChartData.push([datamap, parseInt(count)]);
                })



            }).catch(err => {
                console.log(err)
            })
            console.log(this.state.barChartData)
    }

    getProductNames = () => {
        Axios.get('http://localhost:3002/allproducts')
            .then(response => {
                this.setState({ productNames: response.data })
                let productnameArr = [];

                response.data.map(data => {
                    productnameArr.push(data.productName)
                })

                this.setState({ productNames: productnameArr })

                let pnarr = this.state.productNames.filter((value, index, self) => self.indexOf(value) === index)

                pnarr.map(datamap => {
                    let pnquantity = []
                    pnquantity = this.state.products.filter(prod =>
                        prod.productName === datamap
                    )
                    console.log(pnquantity)
                    let count = 0;
                    pnquantity.map(data => {
                        count = parseInt(data.inStock) + count;
                        console.log(count)
                    },0);
                    this.state.barChartData2.push([datamap, parseInt(count)]);
                })



            }).catch(err => {
                console.log(err)
            })
            console.log(this.state.barChartData)
    }

    render() {
        return (
            <div>
                <h3 style={{marginLeft: "5%"}}>Stock of products based on category</h3>
                <div style={{ display: 'flex', maxWidth: 1100, margin: "5%" }}>
                    
                    <Chart
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={this.state.barChartData}
                        width="600px"
                        height="300px"
                        legendToggle
                    />
                   
                    <Chart
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={this.state.barChartData2}
                        options={{
                            title: 'Stock of all products'
                        }}
                        width="600px"
                        height="300px"
                        legendToggle
                    />

                </div>
            </div>


        );
    }
}

export default ChartComponent;
