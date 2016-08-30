import ArticleCard from '../cards/ArticleCard';
import CircularProgress from 'material-ui/CircularProgress';
import { database } from '../../data/firebase';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class HomeArticles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: <CircularProgress style={{ marginLeft:'auto', marginRight:'auto' }} />,
		};
	}

	componentWillMount() {
		const articlesRef = database.ref('/articles').orderByKey().limitToLast(4);
		articlesRef.once('value').then((dataSnapshot) => {
			const articles = dataSnapshot.val();
			var content = [];
			Object.keys(articles).map((item, i) => {
				const article = articles[item];
				const articleCard = (
					<div className="home-articles-item" key={article.title}>
						<ArticleCard
							title    = { article.title }
							subtitle = { article.date }
							image 	 = { article.img.src }
							href 	 = { article.img.href }
							teaser   = { article.teaser }
						/>
					</div>
				);

				content.push(articleCard);
			});
			this.setState({content: content.reverse()});
		});
	}

	render() {
		const { accentColor, canvasColor } = this.props;
		const { primary3Color, accent3Color } = this.context.muiTheme.palette;

		return (
			<Paper style={{ marginTop:20 }}>
				<Toolbar>
					<ToolbarGroup style={{marginLeft:'auto', marginRight:'auto'}}>
						<ToolbarTitle text="Articles" />
					</ToolbarGroup>
				</Toolbar>

				<div className="flex-container" style={{ marginTop:0 }}>
					{this.state.content}
				</div>

				<Toolbar style={{width:'100%', background:canvasColor}}>
					<ToolbarGroup style={{width:'100%', textAlign:'center'}}>
						<RaisedButton 
							label="All Articles" href="/articles"
							fullWidth={true}
							secondary={true}
							style={{
								width: '100%',
								marginLeft: 'auto',
								marginRight: 'auto'
							}}
						/>
					</ToolbarGroup>
				</Toolbar>
			</Paper>
		);
	}
}

HomeArticles.contextTypes = {
	muiTheme: React.PropTypes.object,
};

export default HomeArticles;