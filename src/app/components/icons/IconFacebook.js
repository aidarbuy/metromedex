import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Icon = (props) => (
  <SvgIcon {...props}>
    <rect 
      style={{fill:'#3B5999'}}
      height="258" 
      rx="28" 
      ry="28" 
      width="258"
    />
    <path 
      style={{fill:'white'}}
      d="M84 106l27 0 0 -5c0,-8 -1,-18 0,-26 1,-19 11,-31 37,-32l26 1 0 28c-11,0 -30,-4 -32,10l0 24 30 0 -3 31 -27 0 0 78 -31 0 0 -78 -27 -1 0 -30z"
    />
    <path 
      style={{fill:'#30487C'}}
      d="M258 128l-84 -84 0 28c-11,0 -30,-4 -32,10l0 24 30 0 -3 31 -27 0 0 78 -31 0 43 43 76 0 28 -28 0 -102z"
    />
  </SvgIcon>
);

module.exports = (props) => (
  <Icon 
    style={props.styles} 
    color={props.styles.color} 
    hoverColor={props.styles.hover} 
    viewBox="0 0 258 258" 
  />
);