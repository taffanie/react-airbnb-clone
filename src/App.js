import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) // AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        });
      })
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })
  }

  render() {
    // const flat = {
    //   "id": 145,
    //   "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
    //   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    //   "price": 164,
    //   "priceCurrency": "EUR",
    //   "lat": 48.884211,
    //   "lng": 2.346890
    // };

    // const flats = [ flat, flat, flat, flat ];

    const center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if (this.state.selectedFlat) {
      let center = { lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng }
    }


    return (
      <div className="app">
        <div className="main">
          <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch} />
        </div>
        <div className="flats" >
          {this.state.flats.map((flat) => {
            return <Flat
                    key={flat.name}
                    flat={flat}
                    selectFlat={this.selectFlat} />
            })}
        </div>
        </div>
         <div className="map">
         <GoogleMapReact
            center={center}
            zoom={11}
          >
          {this.state.flats.map((flat) => {
            return <Marker
                    key={flat.name}
                    lat={flat.lat}
                    lng={flat.lng}
                    text={flat.price}
                    selected={flat === this.state.selectedFlat}
                    />
          })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
