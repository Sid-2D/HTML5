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

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(CommentBroken, {
		date: comment.date,
		text: comment.text,
		author: comment.author }),
	React.createElement(App, null),
	React.createElement(Welcome1, { name: "Sid" }),
	React.createElement(Clock, { date: new Date() })
), document.getElementById('root'));