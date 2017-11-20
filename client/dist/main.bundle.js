webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: calc(100vh - 40px);\n}\n\n#convo-container {\n  height: 100%;\n  width: 30vw;\n  overflow: auto;\n  border-right: 1px solid #D8D9DE;\n  /*background-color: cadetblue;*/\n}\n\n#chat-container {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow: hidden;\n  background-color: #eef1f6;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\n  <div id=\"convo-container\">\n    <app-conversation-list></app-conversation-list>\n  </div>\n\n  <div id=\"chat-container\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_socket_service__ = __webpack_require__("../../../../../src/app/core/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // need to inject socket service here so sockets can open
    function AppComponent(socketService) {
        this.socketService = socketService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_socket_service__["a" /* SocketService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_socket_service__ = __webpack_require__("../../../../../src/app/core/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_conversation_service__ = __webpack_require__("../../../../../src/app/core/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/chat-box/chat-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_pipes_sort_by_latest_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/sort-by-latest.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__conversation_list_conversation_list_component__ = __webpack_require__("../../../../../src/app/conversation-list/conversation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'conversation/:id', component: __WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box_component__["a" /* ChatBoxComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chat_box_chat_box_component__["a" /* ChatBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_8__core_pipes_sort_by_latest_pipe__["a" /* SortByLatestPipe */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__conversation_list_conversation_list_component__["a" /* ConversationListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__message_message_component__["a" /* MessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_5__core_conversation_service__["a" /* ConversationService */],
                __WEBPACK_IMPORTED_MODULE_7__core_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chat-box {\n  height: calc(100% - 40px);\n  padding: 20px;\n  position: relative;\n  overflow: auto;\n}\n\ninput {\n  border-top: 1px solid #D8D9DE;\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  bottom: 0;\n  padding: 10px;\n}\n\ninput:disabled {\n  background-color: #f7f7f8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-box\">\n  <h2>{{conversation?.visitor.alias}}</h2>\n\n  <div *ngFor=\"let message of conversation?.log\">\n    <app-message [message]=\"message\"\n                 [visitor]=\"conversation.visitor\"></app-message>\n  </div>\n\n  <div *ngIf=\"!conversation?.open\">\n    <em>The user has disconnected.</em>\n  </div>\n</div>\n\n<input autofocus\n       (keydown)=\"send($event)\"\n       [disabled]=\"!conversation?.open\">\n"

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_conversation_service__ = __webpack_require__("../../../../../src/app/core/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_message_model__ = __webpack_require__("../../../../../src/app/core/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_socket_service__ = __webpack_require__("../../../../../src/app/core/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBoxComponent = (function () {
    function ChatBoxComponent(conversationService, userService, socketService, route, router) {
        this.conversationService = conversationService;
        this.userService = userService;
        this.socketService = socketService;
        this.route = route;
        this.router = router;
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.conversation = _this.conversationService.getConversation(params.id);
            // If url contains invalid user ID
            if (_this.conversation === null) {
                _this.router.navigateByUrl('/');
                return;
            }
        });
    };
    ChatBoxComponent.prototype.scrollToBottom = function () {
        var el = document.getElementById('chat-box');
        el.scrollTop = el.scrollHeight;
    };
    ChatBoxComponent.prototype.send = function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            var msg = new __WEBPACK_IMPORTED_MODULE_2__core_models_message_model__["a" /* Message */](this.userService.admin, e.target.value);
            // send new message to visitor
            this.socketService.sendMessage(this.conversation.visitor.id, msg);
            // add new message to the conversation log
            this.conversationService.addNewMessage(this.conversation.visitor.id, msg);
            e.target.value = '';
            // Scroll chat window to bottom
            this.scrollToBottom();
        }
    };
    ChatBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-box',
            template: __webpack_require__("../../../../../src/app/chat-box/chat-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-box/chat-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_conversation_service__["a" /* ConversationService */], __WEBPACK_IMPORTED_MODULE_5__core_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__core_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/conversation-list/conversation-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab {\n  display: block;\n  height: 70px;\n  width: auto;\n  border-bottom: 1px solid #D8D9DE;\n  padding: 10px;\n}\n\n.tab:hover {\n  background-color: #eef1f6;\n}\n\n.tab.is-active {\n  background-color: #e5eaf2;\n}\n\n.closed > * {\n  color: #D8D9DE;\n}\n\n.last-message {\n  font-style: italic;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conversation-list/conversation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"conversations.length === 0\" style=\"padding: 10px\">\n  <em>No active conversations.</em>\n</div>\n\n<div *ngFor=\"let convo of (conversations | sortByLatest)\">\n  <a class=\"tab\"\n     routerLink=\"/conversation/{{convo.visitor.id}}\"\n     routerLinkActive=\"is-active\"\n     [ngClass]=\"{'closed': !convo.open}\">\n\n    <h4>{{convo.visitor.alias}}</h4>\n\n    <p class=\"last-message\">{{convo.latestMessage.userAlias}}: {{convo.latestMessage.text}}</p>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/conversation-list/conversation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_conversation_service__ = __webpack_require__("../../../../../src/app/core/conversation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversationListComponent = (function () {
    function ConversationListComponent(conversationService) {
        this.conversationService = conversationService;
    }
    ConversationListComponent.prototype.ngOnInit = function () {
        this.conversations = this.conversationService.getAllConversations();
    };
    ConversationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversation-list',
            template: __webpack_require__("../../../../../src/app/conversation-list/conversation-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conversation-list/conversation-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_conversation_service__["a" /* ConversationService */]])
    ], ConversationListComponent);
    return ConversationListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/conversation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_conversation_model__ = __webpack_require__("../../../../../src/app/core/models/conversation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/core/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversationService = (function () {
    function ConversationService(userService) {
        this.userService = userService;
        this.conversations = [];
    }
    ConversationService.prototype.createConversation = function (id) {
        var newVisitor = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](id);
        var newConvo = new __WEBPACK_IMPORTED_MODULE_1__models_conversation_model__["a" /* Conversation */](newVisitor);
        this.conversations.push(newConvo);
        return newConvo;
    };
    ConversationService.prototype.getAllConversations = function () {
        return this.conversations;
    };
    ConversationService.prototype.getConversation = function (id) {
        var found = this.conversations.filter(function (c) {
            return c.id === id;
        });
        return found.length > 0 ? found[0] : null;
    };
    ConversationService.prototype.addNewMessage = function (id, message) {
        // Find the relevant conversation the message should belong to
        var conv = this.getConversation(id);
        if (conv === null) {
            conv = this.createConversation(id);
        }
        // Update the message with the relevant user alias
        message.userAlias = (message.userId === id) ? conv.visitor.alias : this.userService.admin.alias;
        // Add the message to the conversation
        conv.log.push(message);
        conv.latestMessage = message;
    };
    ConversationService.prototype.endConversation = function (id) {
        var conv = this.getConversation(id);
        if (conv) {
            conv.open = false;
        }
    };
    ConversationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/conversation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversation; });
var Conversation = (function () {
    function Conversation(visitor) {
        this.id = visitor.id;
        this.visitor = visitor;
        this.log = [];
        this.latestMessage = null;
        this.open = true;
    }
    return Conversation;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(user, text) {
        this.userId = user.id;
        this.userAlias = user.alias;
        this.text = text;
        this.timestamp = Date.now();
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/core/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* User can be either admin or visitor */
var User = (function () {
    function User(id, alias) {
        this.id = id;
        this.alias = alias || this.getRandomName();
        this.avatarColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
    User.prototype.getRandomName = function () {
        var adjectives = ['Bouncing', 'Exuberant', 'Formidable', 'Blue', 'Happy', 'Amazing', 'Opulent', 'Stylish', 'Squishy'];
        var nouns = ['Balloon', 'Hat', 'Giraffe', 'Leopard', 'Axe', 'Apricot', 'Oak', 'Gorilla'];
        var adjIdx = Math.floor(Math.random() * adjectives.length);
        var nounIdx = Math.floor(Math.random() * nouns.length);
        return adjectives[adjIdx] + " " + nouns[nounIdx];
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/core/pipes/sort-by-latest.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByLatestPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByLatestPipe = (function () {
    function SortByLatestPipe() {
    }
    // Sort conversations with the latest *from a visitor* on top
    SortByLatestPipe.prototype.transform = function (conversations) {
        return conversations.sort(function (a, b) {
            var aliasA = a.latestMessage.userAlias;
            var aliasB = b.latestMessage.userAlias;
            var timeA = a.latestMessage.timestamp;
            var timeB = b.latestMessage.timestamp;
            if (timeA > timeB) {
                return -1;
            }
            if (timeA < timeB) {
                return 1;
            }
            return 0;
        });
    };
    SortByLatestPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sortByLatest',
            pure: false
        })
    ], SortByLatestPipe);
    return SortByLatestPipe;
}());



/***/ }),

/***/ "../../../../../src/app/core/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation_service__ = __webpack_require__("../../../../../src/app/core/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/core/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = (function () {
    function SocketService(conversationService, userService) {
        var _this = this;
        this.conversationService = conversationService;
        this.userService = userService;
        this.socket = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socketUrl);
        // this tells the server which socket ID belongs to the admin
        this.socket.emit('admin-init', 'admin initialized');
        // set admin ID within the app
        this.socket.on('admin-id-set', function (id) {
            _this.userService.setAdmin(id);
        });
        // listens for messages from visitors
        this.socket.on('visitor-message', function (message) {
            _this.conversationService.addNewMessage(message.userId, message);
        });
        // listens for visitor disconnect
        this.socket.on('visitor-disconnected', function (id) {
            _this.conversationService.endConversation(id);
        });
    }
    SocketService.prototype.sendMessage = function (visitorId, msg) {
        var data = {
            userId: visitorId,
            text: msg.text
        };
        this.socket.emit('reply', data);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__conversation_service__["a" /* ConversationService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/core/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/core/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.setAdmin = function (id) {
        if (!this.admin) {
            this.admin = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */](id, 'You');
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px;\n}\n\n.admin {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.visitor {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.admin > .avatar {\n  margin-left: 15px;\n}\n\n.visitor > .avatar {\n  margin-right: 15px;\n}\n\n.avatar {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #D8D9DE;\n  border-radius: 5px;\n}\n\n.bubble {\n  width: auto;\n  border: 1px solid #D8D9DE;\n  padding: 10px;\n  background-color: white;\n  border-radius: 5px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message\"\n     [ngClass]=\"userType\">\n  <div class=\"avatar\"\n       [ngStyle]=\"{'background-color': avatarColor}\"></div>\n  <div class=\"bubble\">\n    {{message.text}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_message_model__ = __webpack_require__("../../../../../src/app/core/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_user_model__ = __webpack_require__("../../../../../src/app/core/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.userType = this.getUserType(this.message.userAlias);
        this.avatarColor = this.getAvatarColor();
    };
    MessageComponent.prototype.getUserType = function (alias) {
        return alias === 'You' ? 'admin' : 'visitor';
    };
    MessageComponent.prototype.getAvatarColor = function () {
        return this.userType === 'admin' ? '#584848' : this.visitor.avatarColor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_message_model__["a" /* Message */])
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_user_model__["a" /* User */])
    ], MessageComponent.prototype, "visitor", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  height: 40px;\n  background-color: #6E7889;\n  padding: 0 10px;\n}\n\nh1 {\n  color: #D8D9DE;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav><a routerLink=\"/\"><h1>💬</h1></a></nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    socketUrl: 'http://localhost:8888'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map