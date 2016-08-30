import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Helmet from 'react-helmet';
import i18next from 'i18next';
import { default as React, Component, PropTypes } from 'react';

class TestLab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hw: '',
		};
	}

	componentWillMount() {
		i18next.init({
			lng: 'es',
			// "lng": "de-DE",
			debug: true,
			fallbackLng: 'en',
			backend: {
				loadPath: 'locales/{{lng}}/{{ns}}.json',
			},
			resources: {
				en: {
					translation: {
						key: "hello world",
					}
				},
				es: {
					translation: {
						key: "Holla!",
					}
				},
			}
		}, (err, t) => {
		  // initialized and ready to go!
		  const hw = i18next.t('key'); // hw = 'hello world'
		  this.setState({hw});
		});
	}

	render() {
		const { name, unreadCount } = this.state;

		return (
			<section>
				<Helmet title="Metromed Test Lab" />

				<h3>Test Lab</h3>

				<h4>{this.state.hw}</h4>
			</section>
		);
	}
}

export default TestLab;
