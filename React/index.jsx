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
			return null;
		}
		return <h1>Please signup.</h1>;
	}
}

class LoginButton extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}>
				Login
			</button>
		);
	}
}

class LogoutButton extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}>
				Logout
			</button>
		);
	}
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button = null;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

class Mailbox extends React.Component {
	render() {
		const unreadMessages = this.props.unreadMessages;
		return (
			<div>
				<h1>Hello!</h1>
				{unreadMessages.length > 0 &&
					<h2>
						You have {unreadMessages.length} unread messages.
					</h2>
				}
			</div>
		);
	}
}

class NumberList extends React.Component {
	render() {
		const numbers = this.props.numbers;
		return ( 
			<ul>
				{numbers.map(number => 
					<li key={number.toString()}>
						{number}
					</li>
				)}
			</ul>
		);
	}
}

const messages = ['React', 'Sid', 'Sid-2D'];
const noMessages = [];

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

class EssayForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write something.'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}

class FlavorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'coconut'};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Your favourite flavour is: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your flavour:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grape">Grape</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
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
		<LoginControl />
		<Mailbox unreadMessages={messages} />
		<Mailbox unreadMessages={noMessages} />
		<NumberList numbers={[1, 2, 3, 4, 5]} />
		<NameForm />
		<EssayForm />
		<FlavorForm />
	</div>,
	document.getElementById('root')
);