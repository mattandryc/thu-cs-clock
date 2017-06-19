import React, {Component} from 'react';
import './App.css';
import { Clockface } from './components/clock'
import { ThuCrest } from './components/crest/Thu-crest'

//todo look into flattening paths

class App extends Component {

    state = {
        time: new Date()
    };


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div className="app">
                <ThuCrest/>
                <Clockface dateObject={this.state.time}/>
            </div>
        );
    }
}

export default App;
