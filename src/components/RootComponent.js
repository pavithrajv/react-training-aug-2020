import React from 'react';
import Header from './header/header';
import ContentComponent from './content/content'

class RootComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* <Header></Header> */}
                <ContentComponent></ContentComponent>
            </div>
         );
    }
}
 
export default RootComponent;