import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData){
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//pulls weather from state, this is saying 'state.weather' essentially
function mapStateToProps({weather}){
  //state.weather comes from the defined weather in the reducers
  return {weather} // identical to {weather: state.weather}
}

//we're exporting the connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);
