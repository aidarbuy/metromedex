import { Card, CardMedia,CardTitle,CardText } from 'material-ui/Card';
import Divider from '../components/ui/ListItemDivider';
import Helmet from 'react-helmet';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';
import services from '../data/services';

class Services extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { primary2Color, primary3Color, accent3Color, textColor } = this.context.muiTheme.palette;

		return (
			<section>
				<Helmet title="Services - Metromed UC"/>

				{/*<h3 style={{color:primary3Color}}>Services</h3>*/}

				<div className="flex-container">
					{services.map((service, i) => (
						<div key={i} className="services-item">
							<Card style={{textAlign:'center'}}>
								<CardTitle style={{fontSize:34, color:primary2Color}}>
									<span>{service.title}</span>
								</CardTitle>

								<CardMedia style={{margin:0, padding:0, fontSize:25}}>
									<span style={{fontSize:77, color:primary2Color}}>${service.price}</span>
								</CardMedia>

								<CardText>
									<List>
										{service.list.map((li, i, arr) => (
											<ListItem key={i} disabled>
												<span style={{fontSize:18, color:textColor}}>{li}</span>

												<Divider style={{marginLeft:20, marginRight:20, transform:'translateY(16px)'}} index={i} />
											</ListItem>
										))}
									</List>
								</CardText>
							</Card>
						</div>
					))}
				</div>
			</section>
		);
	}
}

Services.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default Services;