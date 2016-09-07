import Helmet from 'react-helmet';
import { default as React, Component, PropTypes } from 'react';

class TestLab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fizzbuzz: [],
		};
	}

	fizzBuzz() {
		var arr = [];
		for (var i = 1; i <= 100; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				arr.push("Fizz-Buzz");
			} else if (i % 3 == 0) {
				arr.push("fizz");
			} else if (i % 5 == 0) {
				arr.push("buzz");
			} else {
				arr.push(i);
			}
		}
		this.setState({
			fizzbuzz: arr,
		});
	}

	componentDidMount() {
		// this.fizzBuzz();
	}

	render() {
		const { palette } = this.context.muiTheme;
		return (
			<section>
				<Helmet title="Metromed Test Lab" />

				<h3>FizzBuzz</h3>

				{Object.keys(palette).map((item, i) => (
					<div key={i}>{item}</div>
				))}
			</section>
		);
	}
}

TestLab.contextTypes = {
	muiTheme: PropTypes.object,
};

export default TestLab;
