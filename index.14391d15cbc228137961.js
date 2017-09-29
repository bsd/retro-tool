webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var ReactDOM = __webpack_require__(159);
var react_redux_1 = __webpack_require__(17);
var state_1 = __webpack_require__(121);
var Application_1 = __webpack_require__(115);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: state_1.default }, React.createElement(Application_1.default, null)), document.getElementById('root'));

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var Input_1 = __webpack_require__(20);
__webpack_require__(123);

var AccountManager = function (_React$PureComponent) {
    _inherits(AccountManager, _React$PureComponent);

    function AccountManager() {
        _classCallCheck(this, AccountManager);

        var _this = _possibleConstructorReturn(this, (AccountManager.__proto__ || Object.getPrototypeOf(AccountManager)).apply(this, arguments));

        _this.state = {
            email: '',
            password: '',
            displayName: '',
            photoURL: ''
        };
        return _this;
    }

    _createClass(AccountManager, [{
        key: "updateAccount",
        value: function updateAccount() {
            var _props = this.props,
                user = _props.user,
                updateAccount = _props.updateAccount;

            if (user) {
                var oldEmail = user.email,
                    oldName = user.displayName,
                    oldPhoto = user.photoURL;
                var _state = this.state,
                    email = _state.email,
                    password = _state.password,
                    displayName = _state.displayName,
                    photoURL = _state.photoURL;

                var update = {};
                if (email !== oldEmail) {
                    update.email = email;
                }
                if (displayName !== oldName) {
                    update.displayName = displayName;
                }
                if (photoURL !== oldPhoto) {
                    update.photoURL = photoURL;
                }
                if (password !== '') {
                    update.password = password;
                }
                updateAccount(update);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var user = this.props.user;

            if (user) {
                this.setState({
                    email: user.email || '',
                    displayName: user.displayName || '',
                    photoURL: user.photoURL || ''
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                email = _state2.email,
                password = _state2.password,
                displayName = _state2.displayName,
                photoURL = _state2.photoURL;
            var _props2 = this.props,
                error = _props2.error,
                logOut = _props2.logOut,
                deleteAccount = _props2.deleteAccount;

            return React.createElement("div", { className: "AccountManager" }, React.createElement(Input_1.TextInput, { label: "email", value: email, onChange: function onChange(email) {
                    return _this2.setState({ email: email });
                } }), React.createElement(Input_1.TextInput, { label: "password", value: password, onChange: function onChange(password) {
                    return _this2.setState({ password: password });
                }, type: 'password' }), React.createElement(Input_1.TextInput, { label: "Username", value: displayName, onChange: function onChange(displayName) {
                    return _this2.setState({ displayName: displayName });
                } }), React.createElement(Input_1.TextInput, { label: "Profile Pic", value: photoURL, onChange: function onChange(photoURL) {
                    return _this2.setState({ photoURL: photoURL });
                } }), error && React.createElement("i", null, error.message), React.createElement(Input_1.Button, { label: "Log Out", onClick: function onClick() {
                    return logOut();
                } }), React.createElement(Input_1.Button, { label: "Update Account", onClick: function onClick() {
                    return _this2.updateAccount();
                } }), React.createElement(Input_1.Button, { className: "--delete", label: "Delete Account", onClick: function onClick() {
                    return deleteAccount();
                } }));
        }
    }]);

    return AccountManager;
}(React.PureComponent);

exports.default = AccountManager;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var LogIn_1 = __webpack_require__(118);
var Loading_1 = __webpack_require__(60);
var Menu_1 = __webpack_require__(119);
var AccountManager_1 = __webpack_require__(114);
var Room_1 = __webpack_require__(120);
__webpack_require__(124);

var Application = function (_React$PureComponent) {
    _inherits(Application, _React$PureComponent);

    function Application() {
        _classCallCheck(this, Application);

        var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).apply(this, arguments));

        _this.state = {
            AccountManager: React.createElement(AccountManager_1.default, null),
            Menu: React.createElement(Menu_1.default, null),
            LoadingIcon: React.createElement(Loading_1.LoadingIcon, { key: "LoadingIcon", success: false, hidden: false, error: false, background: false })
        };
        return _this;
    }

    _createClass(Application, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                loggedIn = _props.loggedIn,
                editAccount = _props.editAccount,
                room = _props.room;
            var _state = this.state,
                AccountManager = _state.AccountManager,
                Menu = _state.Menu;

            var content = React.createElement("div", null);
            if (!loggedIn) {
                content = React.createElement(LogIn_1.default, null);
            } else if (loggedIn && editAccount) {
                content = AccountManager;
            } else if (!!room) {
                content = React.createElement(Room_1.default, { room: room });
            }
            return React.createElement("main", { className: "Application " + (!!editAccount || !!room ? '--side-menu' : '') }, loggedIn && Menu, content);
        }
    }]);

    return Application;
}(React.PureComponent);

exports.default = Application;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var array_1 = __webpack_require__(11);
var Input_1 = __webpack_require__(20);
var Card_1 = __webpack_require__(117);
__webpack_require__(125);
var Board = function Board(_ref) {
    var cards = _ref.cards,
        board = _ref.board,
        room = _ref.room,
        user = _ref.user,
        editBoard = _ref.editBoard,
        canEdit = _ref.canEdit,
        updateEditBoard = _ref.updateEditBoard,
        updateBoard = _ref.updateBoard,
        deleteBoard = _ref.deleteBoard,
        createCard = _ref.createCard;
    return React.createElement("div", { className: "Board" }, React.createElement("div", { className: "Board-Header" }, React.createElement("h3", null, board.name), canEdit && (!editBoard || editBoard.id !== board.id) && React.createElement(Input_1.Button, { label: "Edit", onClick: function onClick() {
            return updateEditBoard(Object.assign({}, board));
        } })), editBoard && editBoard.id === board.id ? React.createElement("div", { className: "Board-Editor" }, React.createElement("select", { value: editBoard.alignment, onChange: function onChange(e) {
            return updateEditBoard(Object.assign({}, editBoard, { alignment: e.target.value }));
        } }, React.createElement("option", { value: "LEFT" /* LEFT */ }, "Align Text Left"), React.createElement("option", { value: "CENTER" /* CENTER */ }, "Align Text Center"), React.createElement("option", { value: "RIGHT" /* RIGHT */ }, "Align Text Right")), React.createElement(Input_1.TextInput, { label: "Name", value: editBoard.name, onChange: function onChange(name) {
            return updateEditBoard(Object.assign({}, editBoard, { name: name }));
        } }), React.createElement(Input_1.NumberInput, { label: "Font Size", value: editBoard.fontSize, onChange: function onChange(fontSize) {
            return updateEditBoard(Object.assign({}, editBoard, { fontSize: fontSize }));
        } }), React.createElement(Input_1.Button, { label: "Update Board", onClick: function onClick() {
            return updateBoard(editBoard);
        } }), React.createElement(Input_1.Button, { label: "Delete Board", onClick: function onClick() {
            return deleteBoard(board, room);
        } })) : React.createElement("div", { className: "Board-Cards" }, array_1.map(cards, function (card) {
        return React.createElement(Card_1.default, { key: card.id, card: card, board: board, room: room });
    }), user && React.createElement(Input_1.Button, { label: "Add Card", onClick: function onClick() {
            return createCard(user, board);
        } })));
};
exports.default = Board;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var Input_1 = __webpack_require__(20);
__webpack_require__(126);
var Card = function Card(_ref) {
    var card = _ref.card,
        board = _ref.board,
        style = _ref.style,
        editCard = _ref.editCard,
        canEdit = _ref.canEdit,
        user = _ref.user,
        showFavorite = _ref.showFavorite,
        canFavorite = _ref.canFavorite,
        showLike = _ref.showLike,
        canLike = _ref.canLike,
        updateEditCard = _ref.updateEditCard,
        updateCard = _ref.updateCard,
        deleteCard = _ref.deleteCard;
    return React.createElement("div", { className: "Card " + (editCard && editCard.id === card.id ? '--flipped' : ''), style: style }, React.createElement("div", { className: "Card-Front" }, React.createElement("p", null, card.content), React.createElement("div", { className: "Card-Menu" }, showFavorite && user && React.createElement("div", { onClick: canFavorite ? function () {
            var index = card.favorites.indexOf(user.uid);
            var favorites = [].concat(_toConsumableArray(card.favorites));
            if (index === -1) {
                favorites.push(user.uid);
            } else {
                favorites.splice(index, 1);
            }
            updateCard(Object.assign({}, card, { favorites: favorites }));
        } : undefined, className: "Card-Favorite " + (canFavorite ? '--can-favorite' : '') }, card.favorites.length), canEdit && React.createElement(Input_1.Button, { label: "Edit", className: "Card-Edit", onClick: function onClick() {
            return updateEditCard(Object.assign({}, card));
        } }), showLike && user && React.createElement("div", { onClick: canLike ? function () {
            var index = card.likes.indexOf(user.uid);
            var likes = [].concat(_toConsumableArray(card.likes));
            if (index === -1) {
                likes.push(user.uid);
            } else {
                likes.splice(index, 1);
            }
            updateCard(Object.assign({}, card, { likes: likes }));
        } : undefined, className: "Card-Like " + (canLike ? '--can-like' : '') }, card.likes.length))), React.createElement("div", { className: "Card-Back" }, editCard && card.id === editCard.id && [React.createElement("textarea", { key: "Editor", onChange: function onChange(e) {
            return updateEditCard(Object.assign({}, editCard, { content: e.target.value }));
        }, value: editCard.content }), React.createElement("div", { key: "Card-Menu", className: "Card-Menu" }, React.createElement(Input_1.Button, { label: "Publish", className: "Card-Publish", onClick: function onClick() {
            return updateCard(editCard);
        } }), React.createElement(Input_1.Button, { label: "Delete", className: "Card-Delete", onClick: function onClick() {
            return deleteCard(card, board);
        } }))]));
};
exports.default = Card;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var Input_1 = __webpack_require__(20);
var Loading_1 = __webpack_require__(60);
__webpack_require__(129);

var LogIn = function (_React$Component) {
    _inherits(LogIn, _React$Component);

    function LogIn() {
        _classCallCheck(this, LogIn);

        var _this = _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).apply(this, arguments));

        _this.state = {
            email: '',
            password: '',
            displayName: '',
            photoURL: '',
            hasAccount: true,
            rememberMe: false
        };
        return _this;
    }

    _createClass(LogIn, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var email = sessionStorage.getItem('email') || '';
            var password = sessionStorage.getItem('password') || '';
            this.setState({ email: email, password: password });
        }
    }, {
        key: "authRequest",
        value: function authRequest() {
            var _state = this.state,
                email = _state.email,
                password = _state.password,
                displayName = _state.displayName,
                photoURL = _state.photoURL,
                hasAccount = _state.hasAccount;
            var _props = this.props,
                logIn = _props.logIn,
                createAccount = _props.createAccount;

            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
            return hasAccount ? logIn(email, password) : createAccount(email, password, displayName, photoURL);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                email = _state2.email,
                password = _state2.password,
                displayName = _state2.displayName,
                photoURL = _state2.photoURL,
                hasAccount = _state2.hasAccount,
                rememberMe = _state2.rememberMe;
            var _props2 = this.props,
                error = _props2.error,
                loading = _props2.loading;

            return React.createElement("div", { className: "LogIn" }, React.createElement(Input_1.TextInput, { label: "email", value: email, onChange: function onChange(value) {
                    return _this2.setState({ email: value });
                } }), React.createElement(Input_1.TextInput, { label: "password", value: password, onChange: function onChange(value) {
                    return _this2.setState({ password: value });
                }, type: 'password' }), !hasAccount && React.createElement(Input_1.TextInput, { label: "Username", value: displayName, onChange: function onChange(value) {
                    return _this2.setState({ displayName: value });
                } }), !hasAccount && React.createElement(Input_1.TextInput, { label: "Profile Pic", value: photoURL, onChange: function onChange(value) {
                    return _this2.setState({ photoURL: value });
                } }), error && React.createElement("i", null, error.message), React.createElement(Input_1.CheckBox, { label: "Have Account:", checked: hasAccount, onChange: function onChange(value) {
                    return _this2.setState({ hasAccount: value });
                } }), React.createElement(Input_1.CheckBox, { label: "Remember Me:", checked: rememberMe, onChange: function onChange(value) {
                    return _this2.setState({ rememberMe: value });
                } }), React.createElement(Input_1.Button, { label: hasAccount ? 'Log In' : 'Create Account', onClick: function onClick() {
                    return _this2.authRequest();
                } }), React.createElement(Loading_1.LoadingIcon, { error: !!error, background: true, hidden: !loading, success: !loading && !error }));
        }
    }]);

    return LogIn;
}(React.Component);

exports.default = LogIn;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var array_1 = __webpack_require__(11);
var Input_1 = __webpack_require__(20);
__webpack_require__(130);
var Menu = function Menu(_ref) {
    var user = _ref.user,
        rooms = _ref.rooms,
        visitInput = _ref.visitInput,
        visitingRooms = _ref.visitingRooms,
        visible = _ref.visible,
        editAccount = _ref.editAccount,
        selectRoom = _ref.selectRoom,
        selectVisitRoom = _ref.selectVisitRoom,
        createRoom = _ref.createRoom,
        updateVisitInput = _ref.updateVisitInput;
    return React.createElement("menu", { className: "Menu " + (visible ? '--visible' : '--hidden') }, user && React.createElement("div", { className: "Menu-User" }, React.createElement("div", { className: "Menu-User-pic" }, React.createElement("img", { src: user.photoURL || undefined })), React.createElement("h1", null, user.displayName || ''), React.createElement(Input_1.Button, { label: "Edit Account", onClick: function onClick() {
            return editAccount(true);
        } })), user && React.createElement("ul", { className: "Menu-RoomList" }, React.createElement("h3", null, "Room List"), array_1.map(Object.keys(rooms), function (id) {
        return React.createElement("li", { key: id, onClick: function onClick() {
                editAccount(false);
                selectRoom(id);
            } }, rooms[id]);
    }), React.createElement(Input_1.Button, { label: "Create Room", onClick: function onClick() {
            return createRoom(user);
        } })), user && Object.keys(visitingRooms).length && React.createElement("ul", { className: "Menu-RoomList" }, React.createElement("h3", null, "Visting rooms"), array_1.map(Object.keys(visitingRooms), function (id) {
        return React.createElement("li", { key: id, onClick: function onClick() {
                editAccount(false);
                selectRoom(id);
            } }, visitingRooms[id]);
    })), React.createElement(Input_1.TextInput, { label: "Room Id", className: "Menu-VisitInput", value: visitInput, onChange: function onChange(value) {
            return updateVisitInput(value);
        } }), React.createElement(Input_1.Button, { label: "Join Room", onClick: function onClick() {
            return user && selectVisitRoom(visitInput, user);
        } }));
};
exports.default = Menu;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var array_1 = __webpack_require__(11);
var Board_1 = __webpack_require__(116);
var Input_1 = __webpack_require__(20);
__webpack_require__(131);
var Room = function Room(_ref) {
    var room = _ref.room,
        editRoom = _ref.editRoom,
        canEdit = _ref.canEdit,
        boards = _ref.boards,
        user = _ref.user,
        canAddBoard = _ref.canAddBoard,
        createBoard = _ref.createBoard,
        updateRoom = _ref.updateRoom,
        deleteRoom = _ref.deleteRoom,
        updateEditRoom = _ref.updateEditRoom;
    return React.createElement("div", { className: "Room" }, React.createElement("header", null, React.createElement("h2", null, room.name), canEdit && (!editRoom || editRoom.id !== room.id) && React.createElement(Input_1.Button, { label: "Edit Room", onClick: function onClick() {
            return updateEditRoom(Object.assign({}, room));
        } })), !editRoom || editRoom.id !== room.id ? React.createElement("div", { className: "Room-Boards" }, array_1.map(boards, function (board) {
        return React.createElement(Board_1.default, { key: board.id, board: board, room: room });
    }), canAddBoard && user && React.createElement(Input_1.Button, { label: "Add Board", onClick: function onClick() {
            return createBoard(user, room, { name: 'New Board' });
        } })) : React.createElement("div", { className: "Room-Editor" }, React.createElement(Input_1.TextInput, { label: "Room Name", value: editRoom.name, onChange: function onChange(name) {
            return updateEditRoom(Object.assign({}, editRoom, { name: name }));
        } }), React.createElement("i", null, "Room Id: ", React.createElement("span", null, room.id)), React.createElement("i", null, "Use this to share you room"), React.createElement("h3", null, "Favorites"), React.createElement(Input_1.CheckBox, { label: "Enabled", onChange: function onChange(favoritesEnabled) {
            return updateEditRoom(Object.assign({}, editRoom, { favoritesEnabled: favoritesEnabled }));
        }, checked: editRoom.favoritesEnabled }), React.createElement(Input_1.CheckBox, { label: "Admin only", onChange: function onChange(favoritesAdminOnly) {
            return updateEditRoom(Object.assign({}, editRoom, { favoritesAdminOnly: favoritesAdminOnly }));
        }, checked: editRoom.favoritesAdminOnly }), React.createElement("h3", null, "Likes"), React.createElement(Input_1.CheckBox, { label: "Enabled", onChange: function onChange(likesEnabled) {
            return updateEditRoom(Object.assign({}, editRoom, { likesEnabled: likesEnabled }));
        }, checked: editRoom.likesEnabled }), React.createElement(Input_1.NumberInput, { label: "Number of Likes", onChange: function onChange(likesCount) {
            return updateEditRoom(Object.assign({}, editRoom, { likesCount: likesCount }));
        }, value: editRoom.likesCount }), React.createElement("select", { value: editRoom.likesPer, onChange: function onChange(e) {
            return updateEditRoom(Object.assign({}, editRoom, { likesPer: e.target.value }));
        } }, React.createElement("option", { value: "CARD" /* CARD */ }, "Likes Per Card"), React.createElement("option", { value: "BOARD" /* BOARD */ }, "Likes Per Board"), React.createElement("option", { value: "ROOM" /* ROOM */ }, "Likes Per Room")), React.createElement("h3", null, "Boards"), React.createElement(Input_1.CheckBox, { label: "Admin only", onChange: function onChange(boardsAdminOnly) {
            return updateEditRoom(Object.assign({}, editRoom, { boardsAdminOnly: boardsAdminOnly }));
        }, checked: editRoom.boardsAdminOnly }), React.createElement("h3", null, "Cards"), React.createElement(Input_1.CheckBox, { label: "Admin only", onChange: function onChange(cardsAdminOnly) {
            return updateEditRoom(Object.assign({}, editRoom, { cardsAdminOnly: cardsAdminOnly }));
        }, checked: editRoom.cardsAdminOnly }), React.createElement(Input_1.Button, { label: "Update Room", onClick: function onClick() {
            return user && updateRoom(editRoom, user);
        } }), React.createElement(Input_1.Button, { label: "Delete Room", onClick: function onClick() {
            return user && deleteRoom(editRoom, user);
        } })));
};
exports.default = Room;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var AccountManager_1 = __webpack_require__(107);
var auth_1 = __webpack_require__(14);
var mapStateToProps = function mapStateToProps(state) {
    return {
        user: auth_1.$user(state),
        error: auth_1.$authError(state)
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateAccount: auth_1.updateAccount(dispatch),
        logOut: auth_1.logOut(dispatch),
        deleteAccount: auth_1.deleteAccount(dispatch)
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AccountManager_1.default);

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var Application_1 = __webpack_require__(108);
var ui_1 = __webpack_require__(22);
var auth_1 = __webpack_require__(14);
var data_1 = __webpack_require__(21);
exports.default = react_redux_1.connect(function (state) {
    return {
        editAccount: ui_1.$editAccount(state),
        loggedIn: !!auth_1.$user(state),
        room: data_1.$room(state)(ui_1.$selectRoom(state) || '')
    };
}, function () {
    return {};
})(Application_1.default);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var array_1 = __webpack_require__(11);
var Board_1 = __webpack_require__(109);
var auth_1 = __webpack_require__(14);
var ui_1 = __webpack_require__(22);
var data_1 = __webpack_require__(21);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var board = ownProps.board,
        room = ownProps.room;

    var user = auth_1.$user(state);
    return {
        board: board,
        room: room,
        user: user,
        canEdit: !!user && room.admin === user.uid,
        editBoard: ui_1.$editBoard(state),
        cards: array_1.filter(array_1.map(board.cards || [], data_1.$card(state)))
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateBoard: function updateBoard(board) {
            return data_1.updateBoard(dispatch)(board).then(function () {
                return ui_1.editBoard(dispatch)(null);
            });
        },
        deleteBoard: data_1.deleteBoard(dispatch),
        updateEditBoard: ui_1.editBoard(dispatch),
        createCard: function createCard(user, board) {
            return data_1.createCard(dispatch)(user, board).then(function (card) {
                return ui_1.editCard(dispatch)(card);
            });
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Board_1.default);

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var array_1 = __webpack_require__(11);
var Card_1 = __webpack_require__(110);
var auth_1 = __webpack_require__(14);
var ui_1 = __webpack_require__(22);
var data_1 = __webpack_require__(21);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var card = ownProps.card,
        board = ownProps.board,
        room = ownProps.room;

    var user = auth_1.$user(state);
    var canFavorite = false;
    var canLike = false;
    if (user) {
        switch (room.likesPer) {
            case "CARD" /* CARD */:
                canLike = true;
                break;
            case "BOARD" /* BOARD */:
                canLike = card.likes.indexOf(user.uid) !== -1 || array_1.filter(array_1.map(board.cards || [], function (id) {
                    var card = data_1.$card(state)(id);
                    return card && card.likes.indexOf(user.uid) !== -1;
                })).length < room.likesCount;
                break;
            case "ROOM" /* ROOM */:
                canLike = card.likes.indexOf(user.uid) !== -1 || array_1.reduce(room.boards || [], function (total, boardId) {
                    var board = data_1.$board(state)(boardId);
                    return board ? total + array_1.filter(array_1.map(board.cards || [], function (id) {
                        var card = data_1.$card(state)(id);
                        return card && card.likes.indexOf(user.uid) !== -1;
                    })).length : total;
                }, 0) < room.likesCount;
                break;
        }
        canFavorite = card.favorites.indexOf(user.uid) !== -1 || !array_1.find(board.cards || [], function (id) {
            var card = data_1.$card(state)(id);
            return !!card && card.favorites.indexOf(user.uid) === -1;
        });
    }
    return {
        card: card,
        user: user,
        canEdit: !!user && (card.author === user.uid || room.admin === user.uid),
        canFavorite: canFavorite,
        canLike: canLike,
        style: {
            fontSize: board.fontSize,
            textAlign: board.alignment.toLowerCase()
        },
        editCard: ui_1.$editCard(state),
        showFavorite: room.favoritesEnabled,
        showLike: room.likesEnabled
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateCard: function updateCard(card) {
            return data_1.updateCard(dispatch)(card).then(function () {
                return ui_1.editCard(dispatch)(null);
            });
        },
        deleteCard: data_1.deleteCard(dispatch),
        updateEditCard: ui_1.editCard(dispatch)
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Card_1.default);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var LogIn_1 = __webpack_require__(111);
var auth_1 = __webpack_require__(14);
var mapStateToProps = function mapStateToProps(state) {
    return {
        error: auth_1.$authError(state),
        loading: auth_1.$authLoading(state)
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        logIn: function logIn(email, password) {
            return auth_1.logIn(dispatch)({ email: email, password: password });
        },
        createAccount: function createAccount(email, password, displayName, photoURL) {
            return auth_1.createAccount(dispatch)({ email: email, password: password }).then(function () {
                return auth_1.updateAccount(dispatch)({ displayName: displayName, photoURL: photoURL });
            });
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LogIn_1.default);

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var Menu_1 = __webpack_require__(112);
var ui_1 = __webpack_require__(22);
var auth_1 = __webpack_require__(14);
var data_1 = __webpack_require__(21);
var mapStateToProps = function mapStateToProps(state) {
    var user = auth_1.$user(state);
    return {
        user: user,
        rooms: !user ? {} : user.rooms,
        visitingRooms: !user ? {} : user.visitingRooms || {},
        visitInput: ui_1.$visitInput(state),
        visible: true
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        editAccount: ui_1.editAccount(dispatch),
        updateVisitInput: ui_1.updateVisitInput(dispatch),
        selectRoom: function selectRoom(roomId) {
            return data_1.fetchCompleteRoom(dispatch)(roomId).then(function () {
                return ui_1.selectRoom(dispatch)(roomId);
            });
        },
        createRoom: function createRoom(user) {
            return data_1.createRoom(dispatch)(user, { name: 'New Room' }).then(function (key) {
                return ui_1.selectRoom(dispatch)(key);
            });
        },
        selectVisitRoom: function selectVisitRoom(roomId, user) {
            return data_1.selectVisitRoom(dispatch)(roomId, user).then(function () {
                return ui_1.selectRoom(dispatch)(roomId);
            });
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Menu_1.default);

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(17);
var array_1 = __webpack_require__(11);
var Room_1 = __webpack_require__(113);
var auth_1 = __webpack_require__(14);
var ui_1 = __webpack_require__(22);
var data_1 = __webpack_require__(21);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var room = ownProps.room;

    var user = auth_1.$user(state);
    return {
        room: room,
        user: user,
        canAddBoard: !room.boardsAdminOnly || !!user && user.uid === room.admin,
        canEdit: !!user && room.admin === user.uid,
        editRoom: ui_1.$editRoom(state),
        boards: array_1.filter(array_1.map(room.boards || [], data_1.$board(state)))
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        createBoard: data_1.createBoard(dispatch),
        updateRoom: function updateRoom(room, user) {
            return data_1.updateRoom(dispatch)(room, user).then(function () {
                return ui_1.editRoom(dispatch)(null);
            });
        },
        deleteRoom: data_1.deleteRoom(dispatch),
        updateEditRoom: ui_1.editRoom(dispatch)
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Room_1.default);

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(102);
var auth_1 = __webpack_require__(14);
var ui_1 = __webpack_require__(22);
var data_1 = __webpack_require__(21);
var defaultState = {
    ui: ui_1.defaultState(),
    auth: auth_1.defaultState(),
    data: data_1.defaultState()
};
var state = redux_1.createStore(redux_1.combineReducers({
    auth: auth_1.reducer,
    ui: ui_1.reducer,
    data: data_1.reducer
}), defaultState);
exports.default = state;

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(42);
var api_1 = __webpack_require__(61);
/* Action Creator */
var authRequest = { type: "AUTH_REQUEST" /* AUTH_REQUEST */ };
var logInSuccess = function logInSuccess(_ref) {
    var user = _ref.user;
    return {
        type: "LOG_IN_SUCCESS" /* LOG_IN_SUCCESS */
        , user: user
    };
};
var logInError = function logInError(_ref2) {
    var message = _ref2.message;
    return {
        type: "LOG_IN_ERROR" /* LOG_IN_ERROR */
        , message: message
    };
};
var logOutSuccess = function logOutSuccess() {
    return {
        type: "LOG_OUT_SUCCESS" /* LOG_OUT_SUCCESS */
        , user: null
    };
};
var logOutError = function logOutError(_ref3) {
    var message = _ref3.message;
    return {
        type: "LOG_OUT_ERROR" /* LOG_OUT_ERROR */
        , message: message
    };
};
var createAccountSuccess = function createAccountSuccess(_ref4) {
    var user = _ref4.user;
    return {
        type: "CREATE_ACCOUNT_SUCCESS" /* CREATE_ACCOUNT_SUCCESS */
        , user: user
    };
};
var createAccountError = function createAccountError(_ref5) {
    var message = _ref5.message;
    return {
        type: "CREATE_ACCOUNT_ERROR" /* CREATE_ACCOUNT_ERROR */
        , message: message
    };
};
var updateAccountSuccess = function updateAccountSuccess(_ref6) {
    var user = _ref6.user;
    return {
        type: "UPDATE_ACCOUNT_SUCCESS" /* UPDATE_ACCOUNT_SUCCESS */
        , user: user
    };
};
var updateAccountError = function updateAccountError(_ref7) {
    var message = _ref7.message;
    return {
        type: "UPDATE_ACCOUNT_ERROR" /* UPDATE_ACCOUNT_ERROR */
        , message: message
    };
};
var deleteAccountSuccess = function deleteAccountSuccess() {
    return {
        type: "DELETE_ACCOUNT_SUCCESS" /* DELETE_ACCOUNT_SUCCESS */
        , user: null
    };
};
var deleteAccountError = function deleteAccountError(_ref8) {
    var message = _ref8.message;
    return {
        type: "DELETE_ACCOUNT_ERROR" /* DELETE_ACCOUNT_ERROR */
        , message: message
    };
};
var updateAccountDataSuccess = function updateAccountDataSuccess(_ref9) {
    var rooms = _ref9.rooms,
        visitingRooms = _ref9.visitingRooms;
    return {
        type: "UPDATE_ACCOUNT_DATA_SUCCESS" /* UPDATE_ACCOUNT_DATA_SUCCESS */
        , rooms: rooms, visitingRooms: visitingRooms
    };
};
var updateAccountDataError = function updateAccountDataError(_ref10) {
    var message = _ref10.message;
    return {
        type: "UPDATE_ACCOUNT_DATA_ERROR" /* UPDATE_ACCOUNT_DATA_ERROR */
        , message: message
    };
};
/* Requests */
exports.logIn = function (dispatch) {
    return function (_ref11) {
        var email = _ref11.email,
            password = _ref11.password;
        return dispatch(authRequest), firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            return api_1.fetchData("users/" + user.uid).then(function (userData) {
                return dispatch(logInSuccess({ user: Object.assign(user, userData || { rooms: [] }) }));
            }).catch(function (error) {
                console.error(error);
                dispatch(logInError(error));
            });
        }).catch(function (error) {
            console.error(error);
            dispatch(logInError(error));
        });
    };
};
exports.logOut = function (dispatch) {
    return function () {
        return dispatch(authRequest), firebase.auth().signOut().then(function () {
            return dispatch(logOutSuccess({ user: null }));
        }).catch(function (error) {
            console.error(error);
            dispatch(logOutError(error));
        });
    };
};
exports.createAccount = function (dispatch) {
    return function (_ref12) {
        var email = _ref12.email,
            password = _ref12.password;
        return dispatch(authRequest), firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
            return api_1.fetchData("users/" + user.uid).then(function (userData) {
                return dispatch(createAccountSuccess({ user: Object.assign(user, userData || { rooms: [] }) }));
            });
        }).catch(function (error) {
            console.error(error);
            dispatch(createAccountError(error));
        });
    };
};
exports.updateAccount = function (dispatch) {
    return function (update) {
        dispatch(authRequest);
        var user = firebase.auth().currentUser;
        if (user) {
            var _object_1$merge = object_1.merge(user, update),
                displayName = _object_1$merge.displayName,
                photoURL = _object_1$merge.photoURL;

            return Promise.all([update.email ? user.updateEmail(update.email) : null, update.password ? user.updatePassword(update.password) : null, user.updateProfile({ displayName: displayName, photoURL: photoURL })]).then(function () {
                return dispatch(updateAccountSuccess({
                    user: firebase.auth().currentUser
                }));
            }).catch(function (error) {
                console.error(error);
                dispatch(updateAccountError(error));
            });
        } else {
            dispatch(updateAccountError({ message: 'Not Logged In' }));
            return Promise.resolve(undefined);
        }
    };
};
exports.deleteAccount = function (dispatch) {
    return function () {
        dispatch(authRequest);
        var user = firebase.auth().currentUser;
        if (user) {
            return user.delete().then(function () {
                return dispatch(deleteAccountSuccess({ user: null }));
            }).catch(function (error) {
                console.error(error);
                dispatch(deleteAccountError(error));
            });
        } else {
            return Promise.resolve(dispatch(logOutError({ message: 'Must be logged in to delete an Account' })));
        }
    };
};
exports.fetchAccountData = function (dispatch) {
    return function (_ref13) {
        var uid = _ref13.uid;
        return dispatch(authRequest), api_1.fetchData("users/" + uid).then(function (userData) {
            return dispatch(updateAccountDataSuccess(userData));
        }).catch(function (error) {
            console.error(error);
            dispatch(updateAccountDataError(error));
        });
    };
};
/* Reducer */
exports.defaultState = function () {
    return {
        requests: 0,
        currentUser: null,
        users: {},
        error: null
    };
};
exports.reducer = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.defaultState();
    var action = arguments[1];

    var currentUser = void 0;
    switch (action.type) {
        case "AUTH_REQUEST" /* AUTH_REQUEST */:
            return Object.assign({}, state, { requests: ++state.requests });
        case "LOG_IN_SUCCESS" /* LOG_IN_SUCCESS */:
        case "CREATE_ACCOUNT_SUCCESS" /* CREATE_ACCOUNT_SUCCESS */:
            return Object.assign({}, state, {
                requests: --state.requests,
                currentUser: action.user.uid,
                users: _defineProperty({}, action.user.uid, action.user),
                error: null
            });
        case "UPDATE_ACCOUNT_SUCCESS" /* UPDATE_ACCOUNT_SUCCESS */:
            return Object.assign({}, state, {
                requests: --state.requests,
                users: _defineProperty({}, state.currentUser || '', action.user),
                error: null
            });
        case "LOG_OUT_SUCCESS" /* LOG_OUT_SUCCESS */:
        case "DELETE_ACCOUNT_SUCCESS" /* DELETE_ACCOUNT_SUCCESS */:
            return Object.assign({}, state, {
                requests: --state.requests,
                currentUser: null,
                users: {},
                error: null
            });
        case "UPDATE_ACCOUNT_DATA_SUCCESS" /* UPDATE_ACCOUNT_DATA_SUCCESS */:
            currentUser = state.users[state.currentUser || ''];
            return Object.assign({}, state, {
                requests: --state.requests,
                users: Object.assign({}, state.users, _defineProperty({}, state.currentUser || '', Object.assign(currentUser, { rooms: action.rooms })))
            });
        case "LOG_IN_ERROR" /* LOG_IN_ERROR */:
        case "LOG_OUT_ERROR" /* LOG_OUT_ERROR */:
        case "CREATE_ACCOUNT_ERROR" /* CREATE_ACCOUNT_ERROR */:
        case "UPDATE_ACCOUNT_ERROR" /* UPDATE_ACCOUNT_ERROR */:
        case "DELETE_ACCOUNT_ERROR" /* DELETE_ACCOUNT_ERROR */:
        case "UPDATE_ACCOUNT_DATA_ERROR" /* UPDATE_ACCOUNT_DATA_ERROR */:
            return Object.assign({}, state, {
                requests: --state.requests,
                error: action
            });
    }
    return state;
};
/* Selectors */
exports.$user = function (state) {
    return object_1.get(state, "auth.users." + object_1.get(state, 'auth.currentUser', null), null);
};
exports.$authError = function (state) {
    return object_1.get(state, 'auth.error', null);
};
exports.$authLoading = function (state) {
    return state.auth.requests > 0;
};

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var array_1 = __webpack_require__(11);
var string_1 = __webpack_require__(158);
__webpack_require__(127);
exports.TextInput = function (_ref) {
    var label = _ref.label,
        value = _ref.value,
        _onChange = _ref.onChange,
        placeholder = _ref.placeholder,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'text' : _ref$type;
    return React.createElement("div", { className: "fieldset text " + className }, React.createElement("label", null, label), React.createElement("input", { required: true, value: value, onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            return _onChange(value);
        }, placeholder: placeholder, type: type }));
};
exports.TextAreaInput = function (_ref3) {
    var label = _ref3.label,
        value = _ref3.value,
        _onChange2 = _ref3.onChange,
        _ref3$placeholder = _ref3.placeholder,
        placeholder = _ref3$placeholder === undefined ? '' : _ref3$placeholder,
        _ref3$className = _ref3.className,
        className = _ref3$className === undefined ? '' : _ref3$className;
    return React.createElement("div", { className: "fieldset textarea " + className }, React.createElement("label", null, label), React.createElement("textarea", { required: true, value: value, onChange: function onChange(_ref4) {
            var value = _ref4.target.value;
            return _onChange2(value);
        }, placeholder: placeholder }));
};
exports.SearchInput = function (_ref5) {
    var label = _ref5.label,
        value = _ref5.value,
        _onChange3 = _ref5.onChange,
        placeholder = _ref5.placeholder,
        _ref5$className = _ref5.className,
        className = _ref5$className === undefined ? '' : _ref5$className,
        options = _ref5.options;
    return React.createElement("div", { className: "fieldset text " + className }, React.createElement("label", null, label), React.createElement("input", { required: true, value: value, onChange: function onChange(_ref6) {
            var value = _ref6.target.value;
            return _onChange3(value);
        }, list: string_1.snakeCase(label), placeholder: placeholder, type: "Search", size: Math.max.apply(Math, _toConsumableArray(array_1.map(options, function (option) {
            return option.length;
        }))) }), React.createElement("datalist", { id: string_1.snakeCase(label) }, array_1.map(options, function (option) {
        return React.createElement("option", { key: option }, option);
    })));
};
exports.NumberInput = function (_ref7) {
    var label = _ref7.label,
        value = _ref7.value,
        _onChange4 = _ref7.onChange,
        min = _ref7.min,
        max = _ref7.max,
        placeholder = _ref7.placeholder,
        className = _ref7.className;
    return React.createElement("div", { className: "fieldset number " + className }, React.createElement("label", null, label), React.createElement("input", { required: true, value: value, min: min, max: max, onChange: function onChange(_ref8) {
            var value = _ref8.target.value;
            return _onChange4(Number(value));
        }, placeholder: placeholder, type: "number" }));
};

var DropDown = function (_React$PureComponent) {
    _inherits(DropDown, _React$PureComponent);

    function DropDown(props) {
        _classCallCheck(this, DropDown);

        var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

        _this.state = {
            interaction: new Map()
        };
        var _this$props = _this.props,
            options = _this$props.options,
            toString = _this$props.toString;

        _this.setState({
            interaction: new Map(array_1.map(options, function (data) {
                return [toString(data), data];
            }))
        });
        return _this;
    }

    _createClass(DropDown, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            var options = newProps.options,
                toString = newProps.toString;

            if (options !== this.props.options) {
                this.setState({
                    interaction: new Map(array_1.map(options, function (data) {
                        return [toString(data), data];
                    }))
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                label = _props.label,
                value = _props.value,
                _onChange5 = _props.onChange,
                toString = _props.toString,
                className = _props.className,
                reselectNone = _props.reselectNone;
            var interaction = this.state.interaction;

            return React.createElement("div", { className: "fieldset dropdown " + className }, React.createElement("label", null, label), React.createElement("select", { value: value ? toString(value) : '----', onChange: function onChange(e) {
                    var selection = interaction.get(e.target.value);
                    if (selection) {
                        _onChange5(selection);
                    }
                } }, React.createElement("option", { disabled: !reselectNone, value: "none" }, "----"), array_1.map([].concat(_toConsumableArray(interaction.keys())), function (name) {
                return React.createElement("option", { value: name }, name);
            })));
        }
    }]);

    return DropDown;
}(React.PureComponent);

exports.DropDown = DropDown;
exports.Button = function (_ref9) {
    var label = _ref9.label,
        disabled = _ref9.disabled,
        _ref9$className = _ref9.className,
        className = _ref9$className === undefined ? '' : _ref9$className,
        _onClick = _ref9.onClick;
    return React.createElement("button", { className: className, onClick: function onClick() {
            return _onClick();
        }, disabled: disabled }, label);
};
exports.CheckBox = function (_ref10) {
    var label = _ref10.label,
        checked = _ref10.checked,
        _ref10$className = _ref10.className,
        className = _ref10$className === undefined ? '' : _ref10$className,
        _onChange6 = _ref10.onChange;
    return React.createElement("div", { className: "fieldset checkbox " + className }, React.createElement("label", { htmlFor: string_1.snakeCase(label) }, label), React.createElement("input", { id: string_1.snakeCase(label), name: label, type: "checkbox", checked: checked, onChange: function onChange() {
            return _onChange6(!checked);
        } }));
};
exports.FileInput = function (_ref11) {
    var label = _ref11.label,
        onUpload = _ref11.onUpload;
    return React.createElement("div", { className: "fieldset file" }, React.createElement("label", { htmlFor: string_1.snakeCase(label) }, label), React.createElement("input", { type: "file", id: string_1.snakeCase(label), multiple: true, accept: "image/*", onChange: function onChange(evt) {
            return evt.target.files && onUpload(evt.target.files);
        } }));
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __webpack_require__(11);
var object_1 = __webpack_require__(42);
var api_1 = __webpack_require__(61);
var auth_1 = __webpack_require__(14);
/* Action Creator */
var dataRequest = { type: "DATA_REQUEST" /* DATA_REQUEST */ };
// create
var createRoomSuccess = function createRoomSuccess(_ref) {
    var rooms = _ref.rooms;
    return {
        type: "CREATE_ROOM_SUCCESS" /* CREATE_ROOM_SUCCESS */
        , rooms: rooms
    };
};
var createRoomError = function createRoomError(_ref2) {
    var message = _ref2.message;
    return {
        type: "CREATE_ROOM_ERROR" /* CREATE_ROOM_ERROR */
        , message: message
    };
};
var createBoardSuccess = function createBoardSuccess(_ref3) {
    var boards = _ref3.boards;
    return {
        type: "CREATE_BOARD_SUCCESS" /* CREATE_BOARD_SUCCESS */
        , boards: boards
    };
};
var createBoardError = function createBoardError(_ref4) {
    var message = _ref4.message;
    return {
        type: "CREATE_BOARD_ERROR" /* CREATE_BOARD_ERROR */
        , message: message
    };
};
var createCardSuccess = function createCardSuccess(_ref5) {
    var cards = _ref5.cards;
    return {
        type: "CREATE_CARD_SUCCESS" /* CREATE_CARD_SUCCESS */
        , cards: cards
    };
};
var createCardError = function createCardError(_ref6) {
    var message = _ref6.message;
    return {
        type: "CREATE_CARD_ERROR" /* CREATE_CARD_ERROR */
        , message: message
    };
};
// fetch
var fetchRoomSuccess = function fetchRoomSuccess(_ref7) {
    var rooms = _ref7.rooms;
    return {
        type: "FETCH_ROOM_SUCCESS" /* FETCH_ROOM_SUCCESS */
        , rooms: rooms
    };
};
var fetchRoomError = function fetchRoomError(_ref8) {
    var message = _ref8.message;
    return {
        type: "FETCH_ROOM_ERROR" /* FETCH_ROOM_ERROR */
        , message: message
    };
};
var fetchRoomsSuccess = function fetchRoomsSuccess(_ref9) {
    var rooms = _ref9.rooms;
    return {
        type: "FETCH_ROOMS_SUCCESS" /* FETCH_ROOMS_SUCCESS */
        , rooms: rooms
    };
};
var fetchRoomsError = function fetchRoomsError(_ref10) {
    var message = _ref10.message;
    return {
        type: "FETCH_ROOMS_ERROR" /* FETCH_ROOMS_ERROR */
        , message: message
    };
};
var fetchBoardSuccess = function fetchBoardSuccess(_ref11) {
    var boards = _ref11.boards;
    return {
        type: "FETCH_BOARD_SUCCESS" /* FETCH_BOARD_SUCCESS */
        , boards: boards
    };
};
var fetchBoardError = function fetchBoardError(_ref12) {
    var message = _ref12.message;
    return {
        type: "FETCH_BOARD_ERROR" /* FETCH_BOARD_ERROR */
        , message: message
    };
};
var fetchBoardsSuccess = function fetchBoardsSuccess(_ref13) {
    var boards = _ref13.boards;
    return {
        type: "FETCH_BOARDS_SUCCESS" /* FETCH_BOARDS_SUCCESS */
        , boards: boards
    };
};
var fetchBoardsError = function fetchBoardsError(_ref14) {
    var message = _ref14.message;
    return {
        type: "FETCH_BOARDS_ERROR" /* FETCH_BOARDS_ERROR */
        , message: message
    };
};
var fetchCardSuccess = function fetchCardSuccess(_ref15) {
    var cards = _ref15.cards;
    return {
        type: "FETCH_CARD_SUCCESS" /* FETCH_CARD_SUCCESS */
        , cards: cards
    };
};
var fetchCardError = function fetchCardError(_ref16) {
    var message = _ref16.message;
    return {
        type: "FETCH_CARD_ERROR" /* FETCH_CARD_ERROR */
        , message: message
    };
};
var fetchCardsSuccess = function fetchCardsSuccess(_ref17) {
    var cards = _ref17.cards;
    return {
        type: "FETCH_CARDS_SUCCESS" /* FETCH_CARDS_SUCCESS */
        , cards: cards
    };
};
var fetchCardsError = function fetchCardsError(_ref18) {
    var message = _ref18.message;
    return {
        type: "FETCH_CARDS_ERROR" /* FETCH_CARDS_ERROR */
        , message: message
    };
};
// UPDATE
var updateRoomSuccess = function updateRoomSuccess(_ref19) {
    var rooms = _ref19.rooms;
    return {
        type: "UPDATE_ROOM_SUCCESS" /* UPDATE_ROOM_SUCCESS */
        , rooms: rooms
    };
};
var updateRoomError = function updateRoomError(_ref20) {
    var message = _ref20.message;
    return {
        type: "UPDATE_ROOM_ERROR" /* UPDATE_ROOM_ERROR */
        , message: message
    };
};
var updateBoardSuccess = function updateBoardSuccess(_ref21) {
    var boards = _ref21.boards;
    return {
        type: "UPDATE_BOARD_SUCCESS" /* UPDATE_BOARD_SUCCESS */
        , boards: boards
    };
};
var updateBoardError = function updateBoardError(_ref22) {
    var message = _ref22.message;
    return {
        type: "UPDATE_BOARD_ERROR" /* UPDATE_BOARD_ERROR */
        , message: message
    };
};
var updateCardSuccess = function updateCardSuccess(_ref23) {
    var cards = _ref23.cards;
    return {
        type: "UPDATE_CARD_SUCCESS" /* UPDATE_CARD_SUCCESS */
        , cards: cards
    };
};
var updateCardError = function updateCardError(_ref24) {
    var message = _ref24.message;
    return {
        type: "UPDATE_CARD_ERROR" /* UPDATE_CARD_ERROR */
        , message: message
    };
};
// DELETE
var deleteRoomSuccess = function deleteRoomSuccess(_ref25) {
    var id = _ref25.id;
    return {
        type: "DELETE_ROOM_SUCCESS" /* DELETE_ROOM_SUCCESS */
        , id: id
    };
};
var deleteRoomError = function deleteRoomError(_ref26) {
    var message = _ref26.message;
    return {
        type: "DELETE_ROOM_ERROR" /* DELETE_ROOM_ERROR */
        , message: message
    };
};
var deleteBoardSuccess = function deleteBoardSuccess(_ref27) {
    var id = _ref27.id;
    return {
        type: "DELETE_BOARD_SUCCESS" /* DELETE_BOARD_SUCCESS */
        , id: id
    };
};
var deleteBoardError = function deleteBoardError(_ref28) {
    var message = _ref28.message;
    return {
        type: "DELETE_BOARD_ERROR" /* DELETE_BOARD_ERROR */
        , message: message
    };
};
var deleteCardSuccess = function deleteCardSuccess(_ref29) {
    var id = _ref29.id;
    return {
        type: "DELETE_CARD_SUCCESS" /* DELETE_CARD_SUCCESS */
        , id: id
    };
};
var deleteCardError = function deleteCardError(_ref30) {
    var message = _ref30.message;
    return {
        type: "DELETE_CARD_ERROR" /* DELETE_CARD_ERROR */
        , message: message
    };
};
/* Requests */
exports.createRoom = function (dispatch) {
    return function (user, settings) {
        dispatch(dataRequest);
        var ref = firebase.database().ref('rooms').push();
        var key = ref.key;
        if (key && user) {
            var room = Object.assign({
                id: key,
                name: '',
                boards: [],
                admin: user.uid,
                favoritesAdminOnly: false,
                favoritesEnabled: true,
                likesEnabled: true,
                likesCount: 1,
                likesPer: "CARD" /* CARD */
                , boardsAdminOnly: true,
                cardsAdminOnly: false
            }, settings);
            return api_1.setData("users/" + user.uid + "/rooms/" + key, room.name).then(function () {
                return api_1.setData("rooms/" + key, room);
            }).then(function () {
                return exports.fetchCompleteRoom(dispatch)(key);
            }).then(function () {
                return auth_1.fetchAccountData(dispatch)(user);
            }).then(function () {
                dispatch(createRoomSuccess({ rooms: _defineProperty({}, room.id, room) }));
                return room;
            }).catch(function (error) {
                return dispatch(createRoomError(error));
            });
        } else if (!key) {
            return Promise.resolve(dispatch(createRoomError({ message: 'Unable to create unique key.' })));
        } else if (!user) {
            return Promise.resolve(dispatch(createRoomError({ message: 'Not logged in.' })));
        } else {
            return Promise.resolve(dispatch(createRoomError({ message: 'unknown error in createRoom' })));
        }
    };
};
exports.createBoard = function (dispatch) {
    return function (user, room, settings) {
        dispatch(dataRequest);
        var ref = firebase.database().ref('boards').push();
        var key = ref.key;
        if (key && user) {
            var board = Object.assign({
                id: key,
                name: '',
                fontSize: 16,
                alignment: "LEFT" /* LEFT */
                , cards: []
            }, settings);
            return api_1.setData("boards/" + key, board).then(function () {
                return api_1.setData("rooms/" + room.id + "/boards", [].concat(_toConsumableArray(room.boards || []), [key]));
            }).then(function () {
                return exports.fetchCompleteRoom(dispatch)(room.id);
            }).then(function () {
                dispatch(createBoardSuccess({ boards: _defineProperty({}, board.id, board) }));
                return board;
            }).catch(function (error) {
                return dispatch(createBoardError(error));
            });
        } else if (!key) {
            return Promise.resolve(dispatch(createBoardError({ message: 'Unable to create unique key.' })));
        } else if (!user) {
            return Promise.resolve(dispatch(createBoardError({ message: 'Not logged in.' })));
        } else {
            return Promise.resolve(dispatch(createBoardError({ message: 'unknown error in createBoard' })));
        }
    };
};
exports.createCard = function (dispatch) {
    return function (user, board) {
        dispatch(dataRequest);
        var ref = firebase.database().ref('cards').push();
        var key = ref.key;
        if (key && user) {
            var card = Object.assign({
                id: key,
                author: user.uid,
                content: '',
                likes: [],
                favorites: []
            });
            return api_1.setData("cards/" + key, card).then(function () {
                return api_1.setData("boards/" + board.id + "/cards", [].concat(_toConsumableArray(board.cards || []), [key]));
            }).then(function () {
                return exports.fetchBoard(dispatch)(board.id);
            }).then(function () {
                dispatch(createCardSuccess({ cards: _defineProperty({}, card.id, card) }));
                return card;
            }).catch(function (error) {
                return dispatch(createCardError(error));
            });
        } else if (!key) {
            return Promise.resolve(dispatch(createCardError({ message: 'Unable to create unique key.' })));
        } else if (!user) {
            return Promise.resolve(dispatch(createCardError({ message: 'Not logged in.' })));
        } else {
            return Promise.resolve(dispatch(createCardError({ message: 'unknown error in createCard' })));
        }
    };
};
exports.fetchRoom = function (dispatch) {
    return function (id) {
        return dispatch(dataRequest), api_1.fetchData("rooms/" + id).then(function (room) {
            dispatch(fetchRoomSuccess({ rooms: _defineProperty({}, room.id, room) }));
            return room;
        }).catch(function (error) {
            console.error(error);
            dispatch(fetchRoomError(error));
            return {};
        });
    };
};
exports.fetchRooms = function (dispatch) {
    return function (ids) {
        return dispatch(dataRequest), Promise.all(array_1.map(ids, function (id) {
            return api_1.fetchData("rooms/" + id);
        })).then(function (roomsData) {
            var rooms = {};
            array_1.forEach(roomsData, function (room) {
                return rooms[room.id] = room;
            });
            dispatch(fetchRoomsSuccess({ rooms: rooms }));
            return rooms;
        }).catch(function (error) {
            console.error(error);
            dispatch(fetchRoomsError(error));
            return {};
        });
    };
};
exports.fetchBoard = function (dispatch) {
    return function (id) {
        return dispatch(dataRequest), api_1.fetchData("boards/" + id).then(function (board) {
            dispatch(fetchBoardSuccess({ boards: _defineProperty({}, board.id, board) }));
            return board;
        }).catch(function (error) {
            console.error(error);
            dispatch(fetchBoardError(error));
            return {};
        });
    };
};
exports.fetchBoards = function (dispatch) {
    return function (ids) {
        return dispatch(dataRequest), Promise.all(array_1.map(ids, function (id) {
            return api_1.fetchData("boards/" + id);
        })).then(function (boardsData) {
            var boards = {};
            array_1.forEach(array_1.filter(boardsData), function (board) {
                return boards[board.id] = board;
            });
            dispatch(fetchBoardsSuccess({ boards: boards }));
            return boards;
        }).catch(function (error) {
            console.error(error);
            dispatch(fetchBoardsError(error));
            return {};
        });
    };
};
exports.fetchCard = function (dispatch) {
    return function (id) {
        return dispatch(dataRequest), api_1.fetchData("cards/" + id).then(function (card) {
            dispatch(fetchCardSuccess({
                cards: _defineProperty({}, card.id, Object.assign({
                    favorites: [],
                    likes: []
                }, card))
            }));
            return card;
        }).catch(function (error) {
            console.error(error);
            dispatch(fetchCardError(error));
            return {};
        });
    };
};
exports.fetchCards = function (dispatch) {
    return function (ids) {
        return dispatch(dataRequest), Promise.all(array_1.map(ids, function (id) {
            return api_1.fetchData("cards/" + id);
        })).then(function (cardsData) {
            var cards = {};
            array_1.forEach(array_1.filter(cardsData), function (card) {
                return cards[card.id] = Object.assign({ favorites: [], likes: [] }, card);
            });
            dispatch(fetchCardsSuccess({ cards: cards }));
            return cards;
        }).catch(function (error) {
            console.error(error);
            dispatch(fetchCardsError(error));
            return {};
        });
    };
};
exports.fetchCompleteRoom = function (dispatch) {
    return function (id) {
        return dispatch(dataRequest), exports.fetchRoom(dispatch)(id).then(function (_ref31) {
            var boards = _ref31.boards;
            return exports.fetchBoards(dispatch)(boards || []);
        }).then(function (boards) {
            var _ref32;

            var cardIds = (_ref32 = []).concat.apply(_ref32, _toConsumableArray(Object.values(boards).map(function (_ref33) {
                var cards = _ref33.cards;
                return cards;
            })));
            return exports.fetchCards(dispatch)(cardIds);
        });
    };
};
exports.updateRoom = function (dispatch) {
    return function (room, user) {
        return dispatch(dataRequest), api_1.setData("users/" + user.uid + "/rooms/" + room.id, room.name).then(function () {
            return api_1.setData("rooms/" + room.id, room);
        }).then(function () {
            return api_1.fetchData("rooms/" + room.id);
        }).then(function (room) {
            return dispatch(updateRoomSuccess({ rooms: _defineProperty({}, room.id, room) }));
        }).then(function () {
            return exports.fetchCompleteRoom(dispatch)(room.id);
        }).then(function () {
            return auth_1.fetchAccountData(dispatch)(user);
        }).then(function () {
            return room;
        }).catch(function (error) {
            console.error(error);
            dispatch(updateRoomError(error));
            return {};
        });
    };
};
exports.updateBoard = function (dispatch) {
    return function (board) {
        return dispatch(dataRequest), api_1.setData("boards/" + board.id, board).then(function () {
            return api_1.fetchData("boards/" + board.id);
        }).then(function (board) {
            dispatch(updateBoardSuccess({ boards: _defineProperty({}, board.id, board) }));
            return board;
        }).catch(function (error) {
            console.error(error);
            dispatch(updateBoardError(error));
            return {};
        });
    };
};
exports.updateCard = function (dispatch) {
    return function (card) {
        return dispatch(dataRequest), api_1.setData("cards/" + card.id, card).then(function () {
            return api_1.fetchData("cards/" + card.id);
        }).then(function (card) {
            dispatch(updateCardSuccess({ cards: _defineProperty({}, card.id, Object.assign({ favorites: [], likes: [] }, card)) }));
            return card;
        }).catch(function (error) {
            console.error(error);
            dispatch(updateCardError(error));
            return {};
        });
    };
};
exports.deleteRoom = function (dispatch) {
    return function (room, user) {
        return dispatch(dataRequest), api_1.removeData("rooms/" + room.id).then(function () {
            return api_1.removeData("users/" + user.uid + "/rooms/" + room.id);
        }).then(function () {
            return dispatch(deleteRoomSuccess({ id: room.id }));
        }).catch(function (error) {
            console.error(error);
            dispatch(deleteRoomError(error));
            return {};
        });
    };
};
exports.deleteBoard = function (dispatch) {
    return function (board, room) {
        return dispatch(dataRequest), api_1.removeData("boards/" + board.id).then(function () {
            return dispatch(deleteBoardSuccess({ id: board.id }));
        }).then(function () {
            return api_1.setData("rooms/" + room.id + "/boards", array_1.filter(room.boards || [], function (id) {
                return board.id !== id;
            }));
        }).then(function () {
            return exports.fetchCompleteRoom(dispatch)(room.id);
        }).catch(function (error) {
            console.error(error);
            dispatch(deleteBoardError(error));
            return {};
        });
    };
};
exports.deleteCard = function (dispatch) {
    return function (card, board) {
        return dispatch(dataRequest), api_1.removeData("cards/" + card.id).then(function () {
            return dispatch(deleteCardSuccess({ id: card.id }));
        }).then(function () {
            return api_1.setData("boards/" + board.id + "/cards", array_1.filter(board.cards || [], function (id) {
                return card.id === id;
            }));
        }).catch(function (error) {
            console.error(error);
            dispatch(deleteCardError(error));
            return {};
        });
    };
};
exports.selectVisitRoom = function (dispatch) {
    return function (roomId, user) {
        return dispatch(dataRequest), api_1.fetchData("rooms/" + roomId).then(function (room) {
            return api_1.setData("users/" + user.uid + "/visitingRooms/" + room.id, room.name);
        }).then(function () {
            return exports.fetchCompleteRoom(dispatch)(roomId);
        }).then(function () {
            return auth_1.fetchAccountData(dispatch)(user);
        }).catch(function (error) {
            console.error(error);
            dispatch(updateRoomError(error));
            return {};
        });
    };
};
exports.defaultState = function () {
    return {
        rooms: {},
        boards: {},
        cards: {},
        requests: 0,
        error: null
    };
};
/* Reducer */
exports.reducer = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.defaultState();
    var action = arguments[1];

    switch (action.type) {
        case "DATA_REQUEST" /* DATA_REQUEST */:
            return Object.assign({}, state, { requests: state.requests + 1 });
        case "CREATE_ROOM_SUCCESS" /* CREATE_ROOM_SUCCESS */:
        case "FETCH_ROOM_SUCCESS" /* FETCH_ROOM_SUCCESS */:
        case "FETCH_ROOMS_SUCCESS" /* FETCH_ROOMS_SUCCESS */:
        case "UPDATE_ROOM_SUCCESS" /* UPDATE_ROOM_SUCCESS */:
            return Object.assign({}, state, {
                error: null,
                requests: state.requests - 1,
                rooms: Object.assign(state.rooms, action.rooms)
            });
        case "CREATE_BOARD_SUCCESS" /* CREATE_BOARD_SUCCESS */:
        case "FETCH_BOARD_SUCCESS" /* FETCH_BOARD_SUCCESS */:
        case "FETCH_BOARDS_SUCCESS" /* FETCH_BOARDS_SUCCESS */:
        case "UPDATE_BOARD_SUCCESS" /* UPDATE_BOARD_SUCCESS */:
            return Object.assign({}, state, {
                error: null,
                requests: state.requests - 1,
                boards: Object.assign(state.boards, action.boards)
            });
        case "CREATE_CARD_SUCCESS" /* CREATE_CARD_SUCCESS */:
        case "FETCH_CARD_SUCCESS" /* FETCH_CARD_SUCCESS */:
        case "FETCH_CARDS_SUCCESS" /* FETCH_CARDS_SUCCESS */:
        case "UPDATE_CARD_SUCCESS" /* UPDATE_CARD_SUCCESS */:
            return Object.assign({}, state, {
                error: null,
                requests: state.requests - 1,
                cards: Object.assign(state.cards, action.cards)
            });
        case "DELETE_ROOM_SUCCESS" /* DELETE_ROOM_SUCCESS */:
            delete state.rooms[action.id];
            return Object.assign({}, state, {
                error: null,
                requests: state.requests - 1,
                rooms: state.rooms
            });
        case "DELETE_BOARD_SUCCESS" /* DELETE_BOARD_SUCCESS */:
            delete state.boards[action.id];
            return Object.assign({}, state, {
                error: null,
                requests: state.requests - 1,
                boards: state.boards
            });
        case "DELETE_CARD_SUCCESS" /* DELETE_CARD_SUCCESS */:
            delete state.cards[action.id];
            return Object.assign({}, state, {
                error: null,
                requests: state.requests - 1,
                cards: state.cards
            });
        case "CREATE_ROOM_ERROR" /* CREATE_ROOM_ERROR */:
        case "CREATE_BOARD_ERROR" /* CREATE_BOARD_ERROR */:
        case "CREATE_CARD_ERROR" /* CREATE_CARD_ERROR */:
        case "FETCH_ROOM_ERROR" /* FETCH_ROOM_ERROR */:
        case "FETCH_ROOMS_ERROR" /* FETCH_ROOMS_ERROR */:
        case "FETCH_BOARD_ERROR" /* FETCH_BOARD_ERROR */:
        case "FETCH_BOARDS_ERROR" /* FETCH_BOARDS_ERROR */:
        case "FETCH_CARD_ERROR" /* FETCH_CARD_ERROR */:
        case "FETCH_CARDS_ERROR" /* FETCH_CARDS_ERROR */:
        case "UPDATE_ROOM_ERROR" /* UPDATE_ROOM_ERROR */:
        case "UPDATE_BOARD_ERROR" /* UPDATE_BOARD_ERROR */:
        case "UPDATE_CARD_ERROR" /* UPDATE_CARD_ERROR */:
        case "DELETE_ROOM_ERROR" /* DELETE_ROOM_ERROR */:
        case "DELETE_BOARD_ERROR" /* DELETE_BOARD_ERROR */:
        case "DELETE_CARD_ERROR" /* DELETE_CARD_ERROR */:
            return Object.assign({}, state, {
                requests: state.requests - 1,
                error: action
            });
    }
    return state;
};
/* Selectors */
exports.$room = function (state) {
    return function (id) {
        return object_1.get(state, "data.rooms." + id, null);
    };
};
exports.$board = function (state) {
    return function (id) {
        return object_1.get(state, "data.boards." + id, null);
    };
};
exports.$card = function (state) {
    return function (id) {
        return object_1.get(state, "data.cards." + id, null);
    };
};
exports.$dataError = function (state) {
    return function () {
        return object_1.get(state, "data.error", null);
    };
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(42);
/* Action Creator */
var editAccountAC = function editAccountAC(_ref) {
    var show = _ref.show;
    return {
        type: "EDIT_ACCOUNT" /* EDIT_ACCOUNT */
        , show: show
    };
};
var selectRoomAC = function selectRoomAC(_ref2) {
    var id = _ref2.id;
    return {
        type: "SELECT_ROOM" /* SELECT_ROOM */
        , id: id
    };
};
var editRoomAC = function editRoomAC(_ref3) {
    var room = _ref3.room;
    return {
        type: "EDIT_ROOM" /* EDIT_ROOM */
        , room: room
    };
};
var editBoardAC = function editBoardAC(_ref4) {
    var board = _ref4.board;
    return {
        type: "EDIT_BOARD" /* EDIT_BOARD */
        , board: board
    };
};
var editCardAC = function editCardAC(_ref5) {
    var card = _ref5.card;
    return {
        type: "EDIT_CARD" /* EDIT_CARD */
        , card: card
    };
};
var updateVisitInputAC = function updateVisitInputAC(_ref6) {
    var visitInput = _ref6.visitInput;
    return {
        type: "UPDATE_VISIT_INPUT" /* UPDATE_VISIT_INPUT */
        , visitInput: visitInput
    };
};
/* Requests */
exports.editAccount = function (dispatch) {
    return function (show) {
        return Promise.resolve(dispatch(editAccountAC({ show: show })));
    };
};
exports.selectRoom = function (dispatch) {
    return function (id) {
        return Promise.resolve(dispatch(selectRoomAC({ id: id })));
    };
};
exports.editRoom = function (dispatch) {
    return function (room) {
        return Promise.resolve(dispatch(editRoomAC({ room: room })));
    };
};
exports.editBoard = function (dispatch) {
    return function (board) {
        return Promise.resolve(dispatch(editBoardAC({ board: board })));
    };
};
exports.editCard = function (dispatch) {
    return function (card) {
        return Promise.resolve(dispatch(editCardAC({ card: card })));
    };
};
exports.updateVisitInput = function (dispatch) {
    return function (visitInput) {
        return Promise.resolve(dispatch(updateVisitInputAC({ visitInput: visitInput })));
    };
};
exports.defaultState = function () {
    return {
        editAccount: false,
        selectedRoom: null,
        card: null,
        board: null,
        room: null,
        visitInput: ''
    };
};
/* Reducer */
exports.reducer = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.defaultState();
    var action = arguments[1];

    switch (action.type) {
        case "EDIT_ACCOUNT" /* EDIT_ACCOUNT */:
            return Object.assign({}, state, { editAccount: action.show });
        case "EDIT_ROOM" /* EDIT_ROOM */:
            return Object.assign({}, state, { room: Object.assign(Object.create(null), action.room) });
        case "EDIT_BOARD" /* EDIT_BOARD */:
            return Object.assign({}, state, { board: Object.assign(Object.create(null), action.board) });
        case "EDIT_CARD" /* EDIT_CARD */:
            return Object.assign({}, state, { card: Object.assign(Object.create(null), action.card) });
        case "SELECT_ROOM" /* SELECT_ROOM */:
            return Object.assign({}, state, { selectedRoom: action.id });
        case "UPDATE_VISIT_INPUT" /* UPDATE_VISIT_INPUT */:
            return Object.assign({}, state, { visitInput: action.visitInput });
    }
    return state;
};
/* Selectors */
exports.$editAccount = function (state) {
    return object_1.get(state, 'ui.editAccount', false);
};
exports.$selectRoom = function (state) {
    return object_1.get(state, 'ui.selectedRoom', null);
};
exports.$editRoom = function (state) {
    return object_1.get(state, 'ui.room', null);
};
exports.$editBoard = function (state) {
    return object_1.get(state, 'ui.board', null);
};
exports.$editCard = function (state) {
    return object_1.get(state, 'ui.card', null);
};
exports.$visitInput = function (state) {
    return object_1.get(state, 'ui.visitInput', '');
};

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_tsx__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_tsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_tsx__);


__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__["install"]();




/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
__webpack_require__(128);
exports.LoadingBar = function (_ref) {
    var error = _ref.error,
        hidden = _ref.hidden,
        success = _ref.success;
    return React.createElement("div", { className: "LoadingBar" + (error ? ' --error' : '') + (hidden ? ' --hidden' : '') + (success ? ' --success' : '') }, React.createElement("div", { className: "LoadingBar-Bar" }));
};
exports.LoadingIcon = function (_ref2) {
    var error = _ref2.error,
        background = _ref2.background,
        hidden = _ref2.hidden,
        success = _ref2.success;
    return React.createElement("div", { className: "LoadingIcon " + (error ? '--error' : '') + " " + (background ? '--background' : '') + (hidden ? ' --hidden' : '') + (success ? ' --success' : '') }, React.createElement("div", { className: "LoadingIcon-Icon" }));
};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = function (path) {
    return firebase.database().ref(path).once('value').then(function (snapshot) {
        return snapshot.val();
    });
};
exports.setData = function (path, value) {
    return firebase.database().ref(path).set(value);
};
exports.updateData = function (updates) {
    return firebase.database().ref().update(updates);
};
exports.postData = function (path, value) {
    var ref = firebase.database().ref(path).push();
    var key = ref.key;
    return ref.set(value).then(function () {
        return key;
    });
};
exports.removeData = function (path) {
    return firebase.database().ref(path).remove();
};
exports.subscribeData = function (path, subscription) {
    var ref = firebase.database().ref(path);
    ref.on('value', function (snapshot) {
        return snapshot && subscription(snapshot.val());
    });
    return function () {
        return ref.off();
    };
};

/***/ })

},[260]);