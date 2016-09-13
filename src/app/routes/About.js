import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Greetings from '../components/about/Greetings';
import Metromed from '../components/about/Metromed';

class About extends Component {
	render() {
		const {
			accent1Color, accent2Color,
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
							accentColor 		 = { accent2Color }
							imgSubtitleColor = { borderColor }
							primaryColor 		 = { primary2Color }
							textColor 			 = { textColor }
						/>
					</div>
				</div>
			</section>
		);
	}
}

About.contextTypes = {
	muiTheme: React.PropTypes.object,
};

export default About;