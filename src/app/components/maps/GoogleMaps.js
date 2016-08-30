import React from 'react';
import Paper from 'material-ui/Paper';
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = 'AIzaSyCevAQFOgvKGgw1Rz2xACa7zvsk7hs4W-Q';

const options = {
  center: {
    lat: 39.116852, 
    lng:-77.539673
  },
  zoom: 17
};

const scrHeight = window.screen.height;
// const height = scrHeight - (scrHeight / 3) - 170;
const height = 307;

export default React.createClass({
  componentDidMount() {
    GoogleMapsLoader.load((google) => {
      var map = new google.maps.Map(this.refs.map, options)
      var marker = new google.maps.Marker({
        map: map,
        position: options.center,
        title: 'Metromed Urgent Care',
        animation: google.maps.Animation.DROP
      });
      // add the double-click event listener
      // google.maps.event.addListener(marker, 'click', function(event) {
      //   map = marker.getMap();
      //   map.setCenter(overlay.getPosition()); // set map center to marker position
      //   this.smoothZoom(map, 12, map.getZoom()); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level
      // })
    });
  },
  // the smooth zoom function
  smoothZoom(map, max, cnt) {
    if (cnt >= max) {
        return;
      }
    else {
      z = google.maps.event.addListener(map, 'zoom_changed', function(event){
        google.maps.event.removeListener(z);
        smoothZoom(map, max, cnt + 1);
      });
      setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
  },
  render() {
    return (
      <Paper style={{width:'100%', height}}>
        <div ref="map" style={{height: "100%"}} />
      </Paper>
    );
  }
});