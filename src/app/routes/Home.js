import Advertising from '../components/home/Advertising';
import BlueBar from '../components/home/BlueBar';
import CallToAction from '../components/home/CallToAction';
import CustomServices from '../components/home/CustomServices';
import Dialog from 'material-ui/Dialog';
import Helmet from 'react-helmet';
import LatestArticles from '../components/home/LatestArticles';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Testimonials from '../components/home/Testimonials';

class Main extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleTouchTap = this.handleTouchTap.bind(this);
		this.state = {
			open: false,
		};
	}

	componentDidMount() {
		jQuery("#layerslider").layerSlider({
			showCircleTimer: false,
			showBarTimer: false,
			skin: 'noskin'
		});
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => {
			const { toggled } = store.getState().appFooter;
			if (toggled) BlueBar.updateColors();
		});
	}

	handleRequestClose() {
		this.setState({ open: false });
	}

	handleTouchTap() {
		this.setState({ open: true });
	}

	render() {
		const { 
			accent1Color, accent2Color, alternateTextColor,
			canvasColor, clockCycleColor,
			primary1Color, primary2Color, primary3Color,
			textColor,
		} = this.context.muiTheme.palette;

		const standardActions = (
			<RaisedButton
				label      = "Ok"
				secondary  = { true }
				onTouchTap = { this.handleRequestClose }
			/>
		);

		return (
			<div>
				<Helmet title="Metromed Urgent Care" />

				{/* Banner carousel with animated slides */}
				<Advertising />

				{/* Block with contact info and working hours */}
				<BlueBar
					titleColor = { alternateTextColor }
					textColor  = { alternateTextColor }
					colonColor = { alternateTextColor }
					bgColorA   = { primary1Color }
					bgColorB   = { primary1Color }
					bgColorC   = { primary1Color }
					bgColorD   = { primary1Color }
				/>

				{/* Call to action with call button */}
				<CallToAction
					textColor     = { alternateTextColor }
					paperBgColor  = { primary2Color }
				/>

				{/* Four cards with big icons */}
				<CustomServices
					hoverColor = { accent1Color }
					iconColor  = { primary1Color }
					titleColor = { primary2Color }
				/>

				{/* Acticles and Testimonials blocks */}
				<div className='flex-container'>
					<div className='flex-home-half'>
						<LatestArticles
							accentColor = { accent1Color }
							canvasColor = { canvasColor }
						/>
					</div>

					<div className='flex-home-half'>
						<Testimonials
							secondaryTextColor = { clockCycleColor }
						/>
					</div>
				</div>
			</div>
		);
	}
}

Main.contextTypes = {
	store: React.PropTypes.object,
	muiTheme: React.PropTypes.object,
};

export default Main;