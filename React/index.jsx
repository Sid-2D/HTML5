function Welcome(props) {
	return <h3>Hello, {props.name}!</h3>;
}

class Welcome1 extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}!</h1>;
	}
}

function App() {
	return (
		<div>
			<Welcome name="Sara" />
			<Welcome name="Cahal" />
			<Welcome name="Edite" />
		</div>
	);
}

function formatDate(date) {
	return date.toLocaleDateString();
}

function Comment(props) {
	return (
		<div className="Comment">
			<div className="UserInfo">
				<img className="Avatar"
					src={props.author.avatarUrl}
					alt={props.author.name}
				/>
				<div className="UserInfo-name">
					{props.author.name}
				</div>
			</div>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

function Avatar(props) {
	return (
		<img className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
	);
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				{props.user.name}
			</div>
		</div>
	);
}

function CommentBroken(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64'
	}
};

function ClockNoClass(props) {
	return (<h3>It is {props.date.toLocaleTimeString()}.</h3>);
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<h3>It is {this.state.date.toLocaleTimeString()}.</h3>
		);
	}
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

class LoggingButton extends React.Component {
	// To avoid bind as in above, note onClick attribute
	handleClick() {
		console.log('This is:', this);
	}

	render() {
		return (
			<button onClick={(e) => this.handleClick(e)}>
				Click me
			</button>
		);
	}
}

class Greeting extends React.Component {
	render() {
		if (this.props.isLoggedIn) {
			return <h1>Welcome back!</h1>;
		}
		return <h1>Please signup.</h1>;
	}
}

ReactDOM.render(
	<div>
		<CommentBroken
			date={comment.date}
			text={comment.text}
			author={comment.author} />
		<App />
		<Welcome1 name="Sid" />
		<Clock date={new Date()} />
		<Toggle />
		<LoggingButton />
		<Greeting isLoggedIn={false} />
		<Greeting isLoggedIn={true} />
	</div>,
	document.getElementById('root')
);