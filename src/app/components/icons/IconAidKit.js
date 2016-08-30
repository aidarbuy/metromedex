import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Icon = (props) => (
  <SvgIcon {...props}>
    <path d="M14 4 h-3 v-2 c 0 -0.55 -0.45 -1 -1 -1 h -4 c -0.55 0 -1 0.45 -1 1 v2 h-3 c -1.1 0 -2 0.9 -2 2 v8 c 0 1.1 0.9 2 2 2 h12 c 1.1 0 2 -0.9 2 -2 v-8 c 0 -1.1 -0.9 -2 -2 -2 z M 6 2 h4 v2 h-4 v-2 z M12 11 h-3 v3 h-2 v-3 h-3 v-2 h3 v-3 h2 v3 h3 v2 z"/>
  </SvgIcon>
);

module.exports = (props) => (
  <Icon style={props.styles} color={props.styles.color} hoverColor={props.styles.hover} viewBox="0 0 18 18" />
);