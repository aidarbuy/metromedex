import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Icon = (props) => (
  <SvgIcon {...props}>
    <path id="Head" 
      d="M28,0H4C1.8,0,0,1.8,0,4v8h32V4C32,1.8,30.2,0,28,0z" 
      style={{fill:'#895A4D'}}
    />
    <path id="Red_x5F_Stripes" 
      d="M2,0.6V12h2V0C3.3,0,2.6,0.2,2,0.6z" 
      style={{fill:'#FF3939'}}
    />
    <rect id="Yellow_x5F_Stripes" 
      height="12" 
      style={{fill:'#FED049'}} 
      width="2" 
      x="4"
    />
    <rect id="Green_x5F_Stripes"
      height="12" 
      style={{fill:'#10DD76'}} 
      width="2" 
      x="6"
    />
    <rect id="Blue_x5F_Stripes" 
      height="12" 
      style={{fill:'#5FCCFF'}} 
      width="2" 
      x="8"
    />
    <circle id="Lens_1_" 
      cx="26" 
      cy="6" 
      r="3" 
      style={{fill:'#162838'}}
    />
    <circle id="Lens_x5F_Outer" 
      cx="26" 
      cy="6" 
      r="1.5" 
      style={{fill:'#2C4356'}}
    />
    <circle id="Lens_x5F_Inside" 
      cx="26" cy="6" 
      r="0.5" style={{fill:'#47637A'}}/>
    <path d="M0,12v16c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12H0z" id="Body" style={{fill:'#E5E0DC'}}/>
    <g id="Shadow">
      <polygon points="24.7,12 22.4,9.6 22.4,12 " style={{fill:'#75483D'}}/>
      <path d="M20,12L9.6,22.4l9.6,9.6H28c2.2,0,4-1.8,4-4v-8.7L24.7,12H20z" 
        style={{fill:'#D0CBC5'}}
      />
    </g>
    <circle id="Lens" 
      cx="16" 
      cy="16" 
      r="9" 
      style={{fill:'#DCD7D3'}}
    />
    <circle id="Inside_x5F_Lens" 
      cx="16" 
      cy="16" 
      r="7" 
      style={{fill:'#162838'}}
    />
    <circle id="_x32_nd_Inner_Circle" 
      cx="16" 
      cy="16" 
      r="4" 
      style={{fill:'#2C4356'}}
    />
    <circle id="Middle_Circle" 
      cx="16" 
      cy="16" 
      r="2" 
      style={{fill:'#162838'}}
    />
    <circle id="Reflection" 
      cx="18.5" 
      cy="13.5" 
      r="1.5" 
      style={{fill:'#47637A'}}
    />
  </SvgIcon>
);

module.exports = (props) => (
  <Icon 
    style={props.styles} 
    color={props.styles.color} 
    hoverColor={props.styles.hover} 
    viewBox="0 0 32 32" 
  />
);