import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
// import ArticleToolbar from '../components/ui/ArticleToolbar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import { database } from '../data/firebase';
import FlatButton from 'material-ui/FlatButton';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import React from 'react';

class Article extends React.Component {
	constructor(props) {
		super(props);
		const { id } = this.props.params;
		this.state = {
			image: <h5>Loading image</h5>,
			title: '',
			date: '',
			href: '',
			text: 'Loading article text...',
		};
	}

	componentWillMount() {
		const { id } = this.props.params;
		var ref = firebase.database().ref("articles");
		ref.orderByChild("img/src").equalTo(id).once("child_added").then(snap => {
			const article = snap.val();
			const textMap = article.text.map((p, i) => (
				<p key={i} dangerouslySetInnerHTML={{ __html:p }} />
			));
			this.setState({
				title: article.title,
				date:  article.date,
				href:  article.img.href,
				text:  textMap,
			});
		});
	}

	render() {
		const {
			canvasColor, accent2Color, textColor, borderColor,
		} = this.context.muiTheme.palette;

		// const { title, date, href, text } = this.state;

		var articleImage = '';
		if (this.state.href == '') {
			// articleImage = <CircularProgress />;
			articleImage = <h5>Loading article image</h5>;
		} else {
			articleImage = <img src={this.state.href} />;
		}

		return (
			<section>
				<Helmet title={this.state.title + " - MetromedUC"} />

				<div style={{ textAlign:'left' }}>
					<FlatButton
						containerElement = { <Link to="/articles" /> }
						icon 			 = { <ArrowBack /> }
						label 			 = { "All Articles" }
						labelPosition 	 = { "after" }
						secondary 		 = { true }
					/>
				</div>

				<article>
					<Card style={{margin:0}}>
						<CardHeader
							title 	 = "Matthew Beckwith"
							subtitle = "Doctor of Medicine"
							avatar 	 = 'https://firebasestorage.googleapis.com/v0/b/metromeduc.appspot.com/o/images%2Fdoctors%2Fmatthew-100x100.jpg?alt=media&token=ca4e179f-1af4-4f30-88da-5b038d13c603'
						/>

						<CardMedia overlay={
							<CardTitle 
								title 	   = { this.state.title } 
								subtitle   = { this.state.date } 
								titleStyle = {{ color: accent2Color }}
							/>
						}>
							{articleImage}
						</CardMedia>

						<CardText style={{fontSize: 16, padding: '5%',}}>
							{this.state.text}
						</CardText>
					</Card>
				</article>
			</section>
		)
	}
}

Article.contextTypes = {
	muiTheme: React.PropTypes.object,
	store: React.PropTypes.object,
};

export default Article;