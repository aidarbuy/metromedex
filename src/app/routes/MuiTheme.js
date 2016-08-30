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
import Paper from 'material-ui/Paper';
import React from 'react';
import { 
  Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle,
} from 'material-ui/Toolbar';

const KeyCard = ({ headerColor, keyName, subheaderColor, text, type }) => (
  <div className="flex-item" key={keyName}>
    <Card style={{margin:10, minHeight:250}}>
      <CardHeader
        actAsExpander = { false }
        title         = { keyName }
        subtitle      = { type }
        titleStyle    = { {color:headerColor, fontSize:25} }
        subtitleStyle = { {color:subheaderColor, fontSize:16} }
      />

      <CardText style={{textAlign:'left'}} expandable={false}>
        {text}
      </CardText>
    </Card>
  </div>
);

const PaperWithToolbar = ({ headerColor, keyName, subheaderColor, text, type }) => (
  <div className="flex-item" key={keyName}>
    <Paper style={{margin:10, minHeight:250}}>
      <Toolbar>
        <ToolbarGroup style={{marginLeft:'auto', marginRight:'auto'}}>
          <ToolbarTitle
            text  = { keyName }
            style = { {color:headerColor, fontSize:25} }
          />
        </ToolbarGroup>
      </Toolbar>

      <List className="list">{text}</List>
    </Paper>
  </div>
);

class MuiTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  getKeys() {
    const { muiTheme } = this.context;
    const { accent3Color, alternateTextColor, primary2Color } = muiTheme.palette;
    const headerColor = alternateTextColor,
          subheaderColor = accent3Color;

    const keysMap = Object.keys(muiTheme).map((keyName, i, mui) => {
      const currentKey = muiTheme[keyName];
      const keyType = typeof currentKey;

      switch (keyType) {
        case "object":
          const props = this.getPropsFrom(currentKey);
          // const list = <List>{props}</List>;
          return <PaperWithToolbar key={keyName} type={keyType}
            keyName={keyName} text={props}
            headerColor={alternateTextColor}
            subheaderColor={primary2Color}
          />;

        case "string":
          return <PaperWithToolbar key={keyName} type={keyType}
            keyName={keyName} text={currentKey}
            headerColor={headerColor}
            subheaderColor={subheaderColor}
          />;

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
          <ListItem>
            {propName + ": " + object[propName]}
          </ListItem>
        </div>
      );
    });
    return props;
  }

  render() {
    const { palette } = this.context.muiTheme;
    const { primary1Color, alternateTextColor } = palette;
    const keys = this.getKeys();

    return (
      <section className="flex-container">
        {keys}
      </section>
    );
  }
}

MuiTheme.contextTypes = {
  muiTheme: React.PropTypes.object,
};

export default MuiTheme;
