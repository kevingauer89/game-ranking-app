import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css'
import React from 'react';
import Slider from 'rc-slider/lib'
import Tooltip from 'rc-tooltip'

const style = {
    width: '75%',
    margin: '2%',
    marginLeft: '12%'
}
const Handle = Slider.Handle

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class CustomizedSlider extends React.Component {

    state = {
            value: 0
        }

    onSliderChange = (value) => {
        this.setState({value: value})
    }

    onAfterChange = (value) => {
        this.props.setResults("rating", value)
    }

    render() {
        return (
            <div style={style}>
                <Slider onChange={this.onSliderChange} handle={handle} onAfterChange={this.onAfterChange}
                        trackStyle={{backgroundColor: 'black'}} handleStyle={{borderColor: 'black'}} railStyle={{backgroundColor: 'gray'}}/>
                <br/>
                <div style={{textAlign: 'center'}}> Rating: {this.state.value} </div>
            </div>
        )
    }
}
export default CustomizedSlider
