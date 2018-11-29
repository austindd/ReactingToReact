import React, { Component, Fragment } from 'react';
import rick from './images/rick.jpg'

// let App = (props) => {
//     if (props.pizza) {
//         return <h1>{props.pizza}</h1>
//     } else return <h1>Hello Globe!!!</h1>;
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: " I like to use the word 'stateful' in casual conversation.",
            placeholder: "Type something here!",
            loadBtnText: "Load",
            hasLoaded: false,
            loadingStyle: { display: 'none' },
            loadingText: "Loading",
            rickStyle: { display: 'none' }

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoadBtnClick = this.handleLoadBtnClick.bind(this);
    }

    handleInputChange(value) {
        this.setState({ inputVal: value });
    }

    handleLoadBtnClick() {

        if (this.state.hasLoaded === false) {

            this.setState({ loadingStyle: { display: 'block', fontSize: '2em', fontFamily: 'Orbitron, sans-serif' } });
            setTimeout(() => {
                this.setState({ loadingText: "Loading ." });
                setTimeout(() => {
                    this.setState({ loadingText: "Loading . ." });
                    setTimeout(() => {
                        this.setState({ loadingText: "Loading . . ." });
                        setTimeout(() => {
                            this.setState({ hasLoaded: true, loadingStyle: { display: 'none' }, loadBtnText: "Make it go away!", rickStyle: { display: 'block', margin: 'auto', width: '80%' } });
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);

        } else if (this.state.hasLoaded === true) {
            this.setState({ hasLoaded: false, loadBtnText: "Load", rickStyle: { display: 'none' } });
        }
    }

    render() {
        if (this.props.pizza) {
            return (
                // Not using <Fragment> here because I want a styled <div> element instead :)
                <div id='container' style={{ textAlign: "center" }}>
                    <h1>{this.props.pizza}</h1>
                    <h2 style={{ marginBottom: '2em' }}>{this.state.text}</h2>
                    <div>
                        <input
                            style={{ width: '50%' }}
                            placeholder={this.state.placeholder}
                            onChange={(event) => { this.handleInputChange(event.target.value) }}
                        />
                    </div>
                    <button
                        style={{ margin: '1em', borderRadius: '0.25em', fontSize: '1em', backgroundColor: '#343a40', borderColor: '#868e96', color: '#f8f9fa' }}
                        onClick={(event) => { this.handleLoadBtnClick(event.target) }}
                    >{this.state.loadBtnText}</button>
                    <div style={this.state.loadingStyle}>{this.state.loadingText}</div>
                    <img src={rick} alt={'Rick'} style={this.state.rickStyle} />
                    <p style={{ fontFamily: 'Righteous, cursive', fontSize: '3em' }}>{this.state.inputVal}</p>
                </div>
            )


        } else return <h1>Hello Globe!!!</h1>;
    }
}

export default App;