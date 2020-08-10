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
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['category', 'Instock'],
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
                </div>
                <div style={{ display: 'flex' }}>

                    <Chart
                        width={'300px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Product', 'InStock'],
                            ['Cheese', 11],
                            ['Butter', 5],
                            ['Panner', 2]
                        ]}
                        options={{
                            title: 'Stock of dairy products',
                            // Just add this option
                            //pieHole: 0.4,
                        }}
                        rootProps={{ 'data-testid': '3' }}
                    />
                </div>
            </div>
        );
    }
}

export default ChartComponent;
