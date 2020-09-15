import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class MapContainer extends React.Component {
  render () {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 51.5049375, lng: -0.0964509 }}
        >
          <Marker position={{ lat: 51.5049375, lng: -0.0964509 }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer)
