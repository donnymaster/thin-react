import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    };


    state = {
       count: this.props.value ? this.props.value : this.props.min
    };

    addProduct = () => {
       let newCount = this.state.count + 1;
       if(newCount <= this.props.max){
           this.setState({count: newCount});
       }
    }

    minusProduct = () => {
        let newCount = this.state.count - 1;
        if(newCount >= this.props.min){
            this.setState({count: newCount});
        }
     }


    render(){
        return(
            <div style={{display: "flex", alignItems: 'center'}}>
                <button onClick={this.addProduct}>Add product</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.minusProduct}>Minus product</button>
            </div>
        )
    }
}