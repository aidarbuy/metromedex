import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class TestLab extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section>
				<Helmet title="Metromed Test Lab" />

				<h3>TestLab</h3>

			</section>
		);
	}
}