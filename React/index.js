"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Welcome(props) {
	return React.createElement(
		"h3",
		null,
		"Hello, ",
		props.name,
		"!"
	);
}

var Welcome1 = function (_React$Component) {
	_inherits(Welcome1, _React$Component);

	function Welcome1() {
		_classCallCheck(this, Welcome1);

		return _possibleConstructorReturn(this, (Welcome1.__proto__ || Object.getPrototypeOf(Welcome1)).apply(this, arguments));
	}

	_createClass(Welcome1, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"h1",
				null,
				"Hello, ",
				this.props.name,
				"!"
			);
		}
	}]);

	return Welcome1;
}(React.Component);

function App() {
	return React.createElement(
		"div",
		null,
		React.createElement(Welcome, { name: "Sara" }),
		React.createElement(Welcome, { name: "Cahal" }),
		React.createElement(Welcome, { name: "Edite" })
	);
}

function formatDate(date) {
	return date.toLocaleDateString();
}

function Comment(props) {
	return React.createElement(
		"div",
		{ className: "Comment" },
		React.createElement(
			"div",
			{ className: "UserInfo" },
			React.createElement("img", { className: "Avatar",
				src: props.author.avatarUrl,
				alt: props.author.name
			}),
			React.createElement(
				"div",
				{ className: "UserInfo-name" },
				props.author.name
			)
		),
		React.createElement(
			"div",
			{ className: "Comment-text" },
			props.text
		),
		React.createElement(
			"div",
			{ className: "Comment-date" },
			formatDate(props.date)
		)
	);
}

function Avatar(props) {
	return React.createElement("img", { className: "Avatar",
		src: props.user.avatarUrl,
		alt: props.user.name
	});
}

function UserInfo(props) {
	return React.createElement(
		"div",
		{ className: "UserInfo" },
		React.createElement(Avatar, { user: props.user }),
		React.createElement(
			"div",
			{ className: "UserInfo-name" },
			props.user.name
		)
	);
}

function CommentBroken(props) {
	return React.createElement(
		"div",
		{ className: "Comment" },
		React.createElement(UserInfo, { user: props.author }),
		React.createElement(
			"div",
			{ className: "Comment-text" },
			props.text
		),
		React.createElement(
			"div",
			{ className: "Comment-date" },
			formatDate(props.date)
		)
	);
}

var comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64'
	}
};

function ClockNoClass(props) {
	return React.createElement(
		"h3",
		null,
		"It is ",
		props.date.toLocaleTimeString(),
		"."
	);
}

var Clock = function (_React$Component2) {
	_inherits(Clock, _React$Component2);

	function Clock(props) {
		_classCallCheck(this, Clock);

		var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

		_this2.state = { date: new Date() };
		return _this2;
	}

	_createClass(Clock, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this3 = this;

			this.timerID = setInterval(function () {
				return _this3.tick();
			}, 1000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}
	}, {
		key: "tick",
		value: function tick() {
			this.setState({
				date: new Date()
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"h3",
				null,
				"It is ",
				this.state.date.toLocaleTimeString(),
				"."
			);
		}
	}]);

	return Clock;
}(React.Component);

var Toggle = function (_React$Component3) {
	_inherits(Toggle, _React$Component3);

	function Toggle(props) {
		_classCallCheck(this, Toggle);

		var _this4 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

		_this4.state = { isToggleOn: true };
		_this4.handleClick = _this4.handleClick.bind(_this4);
		return _this4;
	}

	_createClass(Toggle, [{
		key: "handleClick",
		value: function handleClick() {
			this.setState(function (prevState) {
				return {
					isToggleOn: !prevState.isToggleOn
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ onClick: this.handleClick },
				this.state.isToggleOn ? 'ON' : 'OFF'
			);
		}
	}]);

	return Toggle;
}(React.Component);

var LoggingButton = function (_React$Component4) {
	_inherits(LoggingButton, _React$Component4);

	function LoggingButton() {
		_classCallCheck(this, LoggingButton);

		return _possibleConstructorReturn(this, (LoggingButton.__proto__ || Object.getPrototypeOf(LoggingButton)).apply(this, arguments));
	}

	_createClass(LoggingButton, [{
		key: "handleClick",

		// To avoid bind as in above, note onClick attribute
		value: function handleClick() {
			console.log('This is:', this);
		}
	}, {
		key: "render",
		value: function render() {
			var _this6 = this;

			return React.createElement(
				"button",
				{ onClick: function onClick(e) {
						return _this6.handleClick(e);
					} },
				"Click me"
			);
		}
	}]);

	return LoggingButton;
}(React.Component);

var Greeting = function (_React$Component5) {
	_inherits(Greeting, _React$Component5);

	function Greeting() {
		_classCallCheck(this, Greeting);

		return _possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).apply(this, arguments));
	}

	_createClass(Greeting, [{
		key: "render",
		value: function render() {
			if (this.props.isLoggedIn) {
				return null;
			}
			return React.createElement(
				"h1",
				null,
				"Please signup."
			);
		}
	}]);

	return Greeting;
}(React.Component);

var LoginButton = function (_React$Component6) {
	_inherits(LoginButton, _React$Component6);

	function LoginButton() {
		_classCallCheck(this, LoginButton);

		return _possibleConstructorReturn(this, (LoginButton.__proto__ || Object.getPrototypeOf(LoginButton)).apply(this, arguments));
	}

	_createClass(LoginButton, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ onClick: this.props.onClick },
				"Login"
			);
		}
	}]);

	return LoginButton;
}(React.Component);

var LogoutButton = function (_React$Component7) {
	_inherits(LogoutButton, _React$Component7);

	function LogoutButton() {
		_classCallCheck(this, LogoutButton);

		return _possibleConstructorReturn(this, (LogoutButton.__proto__ || Object.getPrototypeOf(LogoutButton)).apply(this, arguments));
	}

	_createClass(LogoutButton, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ onClick: this.props.onClick },
				"Logout"
			);
		}
	}]);

	return LogoutButton;
}(React.Component);

var LoginControl = function (_React$Component8) {
	_inherits(LoginControl, _React$Component8);

	function LoginControl(props) {
		_classCallCheck(this, LoginControl);

		var _this10 = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

		_this10.state = { isLoggedIn: false };
		_this10.handleLoginClick = _this10.handleLoginClick.bind(_this10);
		_this10.handleLogoutClick = _this10.handleLogoutClick.bind(_this10);
		return _this10;
	}

	_createClass(LoginControl, [{
		key: "handleLoginClick",
		value: function handleLoginClick() {
			this.setState({ isLoggedIn: true });
		}
	}, {
		key: "handleLogoutClick",
		value: function handleLogoutClick() {
			this.setState({ isLoggedIn: false });
		}
	}, {
		key: "render",
		value: function render() {
			var isLoggedIn = this.state.isLoggedIn;
			var button = null;
			if (isLoggedIn) {
				button = React.createElement(LogoutButton, { onClick: this.handleLogoutClick });
			} else {
				button = React.createElement(LoginButton, { onClick: this.handleLoginClick });
			}
			return React.createElement(
				"div",
				null,
				React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
				button
			);
		}
	}]);

	return LoginControl;
}(React.Component);

var Mailbox = function (_React$Component9) {
	_inherits(Mailbox, _React$Component9);

	function Mailbox() {
		_classCallCheck(this, Mailbox);

		return _possibleConstructorReturn(this, (Mailbox.__proto__ || Object.getPrototypeOf(Mailbox)).apply(this, arguments));
	}

	_createClass(Mailbox, [{
		key: "render",
		value: function render() {
			var unreadMessages = this.props.unreadMessages;
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					"Hello!"
				),
				unreadMessages.length > 0 && React.createElement(
					"h2",
					null,
					"You have ",
					unreadMessages.length,
					" unread messages."
				)
			);
		}
	}]);

	return Mailbox;
}(React.Component);

var messages = ['React', 'Sid', 'Sid-2D'];
var noMessages = [];

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(CommentBroken, {
		date: comment.date,
		text: comment.text,
		author: comment.author }),
	React.createElement(App, null),
	React.createElement(Welcome1, { name: "Sid" }),
	React.createElement(Clock, { date: new Date() }),
	React.createElement(Toggle, null),
	React.createElement(LoggingButton, null),
	React.createElement(Greeting, { isLoggedIn: false }),
	React.createElement(Greeting, { isLoggedIn: true }),
	React.createElement(LoginControl, null),
	React.createElement(Mailbox, { unreadMessages: messages }),
	React.createElement(Mailbox, { unreadMessages: noMessages })
), document.getElementById('root'));
