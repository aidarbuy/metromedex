import ArticleCard from '../components/cards/ArticleCard';
import CircularProgress from 'material-ui/CircularProgress';
import { database } from '../data/firebase';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = { articles:[] };
	}

	componentWillMount() {
		database.ref('/articles').once('value').then((dataSnapshot) => {
			const articles = dataSnapshot.val().reverse();
			this.setState({articles});
		});
	}

	render() {
		const { primary3Color, accent3Color } = this.context.muiTheme.palette;

		const { articles } = this.state;

		var content;

		if (articles.length === 0) {
			content = <CircularProgress style={{marginLeft:'auto', marginRight:'auto'}} />
		} else {
			content = articles.map((article, i) => (
				<div className="articles-item" key={i}>
					<ArticleCard
						title    = { article.title }
						subtitle = { article.date }
						image 	 = { article.img.src }
						href 	 = { article.img.href }
						teaser   = { article.teaser }
					/>
				</div>
			))
		}

		return (
			<section>
				<Helmet title="Articles - MetromedUC" />

				<h3 style={{ color:primary3Color }}>Articles</h3>

				<div className="flex-container" style={{ marginTop:20 }}>
					{content}
				</div>
			</section>
		);
	}
}

Articles.contextTypes = {
	muiTheme: React.PropTypes.object,
	store: React.PropTypes.object,
};

export default Articles;