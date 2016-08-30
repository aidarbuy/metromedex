import Helmet from 'react-helmet';
import React from 'react';

class Virtual extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scrHeight = window.screen.height;
    const height = 0.98 * scrHeight - (scrHeight / 2);
    const { primary2Color, primary3Color } = this.context.muiTheme.palette;

    return (
      <section>
        <Helmet title="Virtual Tour - MetromedUC"/>

        <h3 style={{color:primary3Color,marginBottom:0}}>Virtual Tour</h3>
        <p style={{color:primary2Color, textAlign:'center'}}>Walk through our clinic in 360° virtual tour:</p>

        <iframe 
          ref="iframe"
          src='https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1435317827152!6m8!1m7!1sDV3R4lZfUPwAAAQqg2kDFw!2m2!1d39.116755!2d-77.539826!3f328!4f0!5f0.7820865974627469'
          style={{width:'100%', height:height}}
          frameBorder="0"
          allowFullScreen
        />
      </section>
    );
  }
}

Virtual.contextTypes = {
  muiTheme: React.PropTypes.object,
};

export default Virtual;