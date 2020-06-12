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
        this.setState({
            totalAmt: ((this.state.bill * this.state.percentage) / this.state.people).toFixed(2)
        });
        ////console.log(this.state.totalAmt)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
        //console.log(this.state.bill);
        //console.log(this.state.people);
    }
    render(){
        return(
            <React.Fragment>
            <h1>Tip Calculator</h1>
            <form onSubmit={this.handleSubmit} className='container'>
                <div className='containerInput'>
                    <p>Bill</p>
                    <input 
                    name = 'bill'
                    value={this.state.bill}
                    onChange={this.handleChange}
                    />

                    <p>Tip %</p>
                    <input 
                    name = 'percentage'
                    value={this.state.percentage}
                    onChange={this.handleChange}
                    />
            

                    <p>Number of people</p>
                    <input
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

