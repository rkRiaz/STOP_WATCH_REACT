import React, { Component } from 'react';

class Controller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }
    startHandler = () => {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        })
        this.props.start()
    }
    pausetHandler = () => {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true
        })
        this.props.pause()
    }
    lapHandler = () => {
        this.props.lap()
    }
    resetHandler = () => {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }
    gethandler = () => {
        let output = null
        if (this.state.start && !this.state.reset) {
            output = (
                <div>
                    <button
                        className='btn btn-success btn-lg px-5 ml-5'
                        onClick={(event) => this.startHandler(event)}
                    >Start
                    </button>
                </div>
            )
        } else if (this.state.pause && this.state.lap) {
            output = (
                <div>
                    <button
                        className='btn btn-primary btn-lg px-5 ml-5'
                        onClick={(event) => this.pausetHandler(event)}
                    >Pause
                    </button>
                    <button
                        className='btn btn-warning btn-lg px-5 ml-5'
                        onClick={(event) => this.lapHandler(event)}
                    >Lap
                    </button>
                </div>
            )
        } else if (this.state.start && this.state.reset) {
            output = (
                <div>
                    <button
                        className='btn btn-success btn-lg px-5 ml-5'
                        onClick={(event) => this.startHandler(event)}
                    >Start
                    </button>
                    <button
                        className='btn btn-danger btn-lg px-5 ml-5'
                        onClick={(event) => this.resetHandler(event)}
                    >Reset
                    </button>
                </div>
            )
        }
        return output
    }
    render() {
        return (
            <div>
                {this.gethandler()}
            </div>
        )
    }
}

export default Controller