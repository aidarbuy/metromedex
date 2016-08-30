import Greetings from '../components/about/Greetings';
import Helmet from 'react-helmet';
import Metromed from '../components/about/Metromed';
// import Paper from 'material-ui/Paper';
import React from 'react';

export default React.createClass({
	contextTypes: {
		muiTheme: React.PropTypes.object,
	},

	render() {
		const {
			accent1Color,
			borderColor,
			primary1Color, primary2Color,
			textColor,
		} = this.context.muiTheme.palette;

		return (
			<section>
				<Helmet title="About Us - Metromed UC"/>

				<div className="flex-container">
					<div className="flex-item-half">
						<Greetings
							accentColor 		 = { accent1Color }
							imgSubtitleColor = { borderColor }
							primaryColor 		 = { primary2Color }
							textColor 			 = { textColor }
						/>
					</div>

					<div className="flex-item-half">
						<Metromed
							accentColor 		 = { accent1Color }
							imgSubtitleColor = { borderColor }
							primaryColor 		 = { primary1Color }
							textColor 			 = { textColor }
						/>
					</div>
				</div>
			</section>
		);
	}
});