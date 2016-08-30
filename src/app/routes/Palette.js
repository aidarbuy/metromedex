import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import CardText from 'material-ui/Card/CardText';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemDivider from '../components/ui/ListItemDivider';
import React from 'react';

const KeyCard = ({ keyName, text }) => (
  <div className="flex-item" key={keyName}>
    <Card style={{margin:10, minHeight:250}}>
      <CardHeader title={keyName} subtitle="object" titleStyle={{
        color: 'red',
        fontSize: 18,
      }}/>
      <CardText style={{textAlign:'left'}}>{text}</CardText>
    </Card>
  </div>
);

class MuiTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  getKeys() {
    const { muiTheme } = this.context;
    const keysMap = Object.keys(muiTheme).map((keyName, i, mui) => {
      const currentKey = muiTheme[keyName];
      const keyType = typeof currentKey;
      var props;

      switch (keyType) {
        case "object":
          props = this.getPropsFrom(currentKey);
          const list = <List>{props}</List>;
          return <KeyCard key={keyName} keyName={keyName} text={list} />;
          break;

        case "string":
          return <KeyCard key={keyName} keyName={keyName} text={currentKey} />;
          break;

        default:
          // consol.debug("key type is unknown");
      }
    });

    return keysMap;
  }
  
  getPropsFrom(object) {
    var props = Object.keys(object).map((propName, i, arr) => {
      return (
        <div key={propName}>
          <ListItem disabled>
            {propName + ": " + object[propName]}
          </ListItem>
        </div>
      );
    });
    return props;
  }

  render() {
    const keys = this.getKeys();
    const { palette } = this.context.muiTheme;
    const { primary1Color, alternateTextColor } = this.context.muiTheme.palette;

    const colors = Object.keys(palette).map((key, i) => (
      <div key={key} style={{margin:10}}>
      <Card style={{
        width: i < 6 ? 220 : 339,
        height: 60,
        background: palette[key],
      }}>
        <CardHeader
          subtitle = {key}
          subtitleColor = {
            i >= 7 && i <= 9 || i == 12 ?
              primary1Color : alternateTextColor
          }
        />
      </Card>
      </div>
    ));

    return (
      <section className="flex-container">
        {colors}
      </section>
    );
  }
}

MuiTheme.contextTypes = {
  muiTheme: React.PropTypes.object,
};

export default MuiTheme;