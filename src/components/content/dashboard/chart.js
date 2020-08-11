import React from 'react';
import { Chart } from 'react-google-charts';
import Axios from 'axios';
class ChartComponent extends React.Component {
    state = {
        products: [],
        categories: []
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', maxWidth: 900 }}>

                    <Chart
                        width={'500px'}
                        height={'400px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['category', 'quantity'],
                            ['Dairy products', 11],
                            ['Electronics', 2],
                            ['Accesories', 2],
                            ['Books', 2],
                            ['Clothes', 7],
                        ]}
                        options={{
                            title: 'Stock of all categories',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                    <Chart
                        width={'500px'}
                        height={'400px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['x', 'panner', 'cheese'],
                            [0, 0, 0],
                            
                            [2, 23, 15],
                            
                            [4, 18, 10],
                            
                            [6, 11, 3],
                            
                        ]}
                        options={{
                            hAxis: {
                                title: 'product',
                            },
                            vAxis: {
                                title: 'quantity',
                            },
                            series: {
                                1: { curveType: 'function' },
                            },
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                    
                </div>
            </div>
               
                

                    
        );
    }
}

export default ChartComponent;
