import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Icon = (props) => (
  <SvgIcon {...props}>
    <rect style={{fill:'#DE4C40'}} height="311" rx="34" ry="34" width="311"/>
    <path style={{fill:'white'}} d="M55 173c8,32 36,52 65,53 48,3 77,-41 71,-84l-66 0 0 25 38 2c0,10 -13,22 -23,26 -3,1 -7,2 -11,3 -23,2 -43,-14 -47,-37 -3,-21 10,-42 33,-47 21,-4 26,1 37,9l19 -19c-10,-15 -37,-20 -53,-20 -44,3 -74,48 -63,89zm171 2l0 -19 -20 0 0 -13 20 0 0 -19 13 0 0 19 19 0 0 13 -19 0 0 19 -13 0z"/>
    <line style={{fill:'none'}} x1="234" x2="311" y1="119" y2="196"/>
    <path style={{fill:'#B43D34'}} d="M226 175l0 -17 -3 -2 -17 0 0 -13 4 0 -39 -39 -19 19c-11,-8 -16,-13 -37,-9 -23,5 -36,26 -33,47 4,23 24,39 47,37 4,-1 8,-2 11,-3 10,-4 23,-16 23,-26l-38 -2 0 -25 66 0c6,43 -23,87 -71,84 -15,-1 -30,-6 -42,-16l101 101 98 0 34 -34 0 -34 -72 -72 0 4 -13 0z"/>
    <polygon style={{fill:'#B43D34'}} points="239,156 239,171 311,243 311,196 258,143 258,156 "/>
    <polygon style={{fill:'#B43D34'}} points="258,143 239,124 239,143 "/>
  </SvgIcon>
);

module.exports = (props) => (
  <Icon 
    style={props.styles} 
    color={props.styles.color} 
    hoverColor={props.styles.hover} 
    viewBox="0 0 311 311" 
  />
);