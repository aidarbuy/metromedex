import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const heading = "If You Feel Sick You Should Not Wait!";
const text = "We are passionate about caring for your health and providing exceptional urgent care";

export default ({ buttonBgColor, paperBgColor, textColor }) => (
  <Paper zDepth = { 2 } style = {{
    background: paperBgColor,
    margin: '20px 0',
    marginTop: 30,
    minHeight: 200,
    padding: 20,
    textAlign: 'center',
  }}>
    <h4 style={{
      margin: 0,
      color: textColor
    }}>{heading}</h4>

    <RaisedButton
      label = "Call Us Now"
      href = "tel:1-703-687-4158"
      secondary = { true }
      style = {{ margin:'20px 0', width:200 }}
      backgroundColor = { buttonBgColor }
    />

    <h5 style = {{
      color: textColor,
      lineHeight: 1.4,
    }}>{text}</h5>
  </Paper>
);