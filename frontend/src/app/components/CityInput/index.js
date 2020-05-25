import React from "react";

class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: props.city}
    }

    componentDidMount() {
        this.handleGetWeather();
    }

    updateInput = input => {
        this.setState({input});
    };

    handleGetWeather = () => {
        this.props.fetchWeather(this.state.input);
    };


    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    type="text"
                    onChange={e => this.updateInput(e.target.value)}
                />
                <button
                    onClick={this.handleGetWeather}>
                    Найти
                </button>
            </div>
        )
    }
}

export default CityInput;