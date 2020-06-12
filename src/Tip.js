import React, { Component } from 'react';
import './Tip.css';

class Tip extends Component{
    constructor(props){
        super(props);
        this.state = {
            bill: '',
            percentage: '',
            people: '',
            totalAmt: '0.00'

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        if(this.state.bill === ''){
            alert('Enter Bill');
        }
        if(this.state.percentage === ''){
            alert('Enter Tip %');
        }
        if(this.state.people === ''){
            alert('Enter the Number of People');
        }

        this.setState({
            totalAmt: ((this.state.bill * this.state.percentage) / this.state.people).toFixed(2),
            bill: '',
            percentage: '',
            people: ''
        });
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render(){
        return(
            <React.Fragment>
            <h1>Tip Calculator</h1>
            <form onSubmit={this.handleSubmit} className='container'>
                
                <div className='containerInput'>
                    <p>Bill</p>
                    <input 
                    type={Number}
                    name = 'bill'
                    value={this.state.bill}
                    onChange={this.handleChange}
                    />

                    <p>Tip %</p>
                    <input 
                    type={Number}
                    name = 'percentage'
                    value={this.state.percentage}
                    onChange={this.handleChange}
                />
            

                    <p>Number of People</p>
                    <input
                    type={Number}
                    name = 'people'
                    value={this.state.people} 
                    onChange={this.handleChange}
                    />
                    <button>Calculate</button>
                </div>
                
                <div className='tipAmt'>
                    <p className='tipTitle'>Tip Amount</p>
                    <span><span>$</span>{this.state.totalAmt} <span>each</span></span>
                </div>

            </form>
            </React.Fragment>
        )
    }
}

export default Tip;

