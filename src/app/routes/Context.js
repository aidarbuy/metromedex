import React from 'react';
import ListItem from 'material-ui/List/ListItem';

export default React.createClass({
	// ask for 'store' from context
	contextTypes: {
	  store: React.PropTypes.object
	},

	render() {
		return (
			<div>
				<h3>Context</h3>

				{Object.keys(this.context).map((k, i)=>(
					<ListItem key={i}>{k}</ListItem>
				))}
			</div>
		)
	}
});