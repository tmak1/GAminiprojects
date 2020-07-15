import React from 'react'
import './Chicken.css'
class Chicken extends React.Component {
    state = {
        count: 0
    }

    handlePlus= evt => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleMinus= evt => {
        this.setState({
            count: this.state.count - 1
        })
    }

    handleReset= evt => {
        this.setState({
            count: 0
        })
    }

    render() {
        const count = this.state.count
        return (
            <div className="main">
                <span><input type="text"  placeholder="Chicken (or whatever)"/></span>
                <div className="control-box">
                    <button disabled={count == 0 ? true : false} className="btn" onClick={this.handleMinus}>-</button>
                    <input type="text" className="count" value={count}/>
                    <button className="btn" onClick={this.handlePlus}>+</button>
                    <button className="btn" onClick={this.handleReset}>reset</button>
                </div>
            </div>
        )
    }

}

export default Chicken