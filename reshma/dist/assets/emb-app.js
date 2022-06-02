'use strict';



;define("emb-app/adapters/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com'
  });

  _exports.default = _default;
});
;define("emb-app/app", ["exports", "emb-app/resolver", "ember-load-initializers", "emb-app/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("emb-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("emb-app/helpers/app-version", ["exports", "emb-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("emb-app/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("emb-app/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("emb-app/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("emb-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("emb-app/helpers/route-action", ["exports", "ember-route-action-helper/helpers/route-action"], function (_exports, _routeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
;define("emb-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("emb-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "emb-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("emb-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("emb-app/initializers/ember-data", ["exports", "ember-data/setup-container"], function (_exports, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("emb-app/initializers/export-application-global", ["exports", "emb-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("emb-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("emb-app/models/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr
  } = _emberData.default;

  var _default = Model.extend({
    title: attr('string', {
      defaultValue: ''
    }),
    body: attr('string', {
      defaultValue: ''
    })
  });

  _exports.default = _default;
});
;define("emb-app/pods/application/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    init() {
      this._super(...arguments);
    }

  });

  _exports.default = _default;
});
;define("emb-app/pods/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lB/YM0yp",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/application/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/post-list/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    store: Ember.inject.service(),

    async init() {
      this._super(...arguments); // api call  GET baseurl/posts


      const posts = await this.store.findAll('post');
      this.set('posts', posts);
    }

  });

  _exports.default = _default;
});
;define("emb-app/pods/components/post-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rTs6OwR2",
    "block": "{\"symbols\":[\"post\"],\"statements\":[[7,\"h1\"],[9],[0,\"i am postlist\"],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"posts\"]]],null,{\"statements\":[],\"parameters\":[1]},null],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/post-list/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/training-based/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/components/training-based/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8P5iIaZL",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/training-based/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/login/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HoBHIs4o",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"i am login\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/login/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/posts/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/posts/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TSEnrYIT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"post route\"],[10],[0,\"\\n\"],[1,[21,\"post-list\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/posts/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/table/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    employees: [{
      id: 1,
      firstName: 'Marie',
      lastName: 'Curie',
      age: 30
    }, {
      id: 2,
      firstName: 'Mae',
      lastName: 'Jemison',
      age: 25
    }, {
      id: 3,
      firstName: 'Albert',
      lastName: 'Hofmann',
      age: 20
    }] //const employee =[{name: 'umar', age: 55}, {name: 'vinoth', age: 10}]
    // name: '',
    // age: '',
    // employees: [],
    // actions: {
    //     note() {
    //         //console.log("umar");
    //         const name = this.get('name');
    //         const age = this.get('age');
    //         const dynamic = this.get('employees');
    //         console.log(name);
    //         console.log(age);
    //         const details = {
    //             name,
    //             age
    //         }
    //         dynamic.pushObject(details);
    //         console.log(dynamic)
    //         this.set('employees', dynamic);
    //     },
    // },

  });

  _exports.default = _default;
});
;define("emb-app/pods/table/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    // model() {
    //     return ['resh', 'rosh', 'sabi']
    // },
    // setupController(controller,model){
    //     controller.set('res.name', 'Reshma')
    //     controller.set('res.age', 'Begum')
    // },
    // model() {
    //     return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    //   },
    setupController(controller, model) {
      controller.set('name', 'Reshma');
      controller.set('age', 'Begum');
    },

    actions: {
      add() {
        console.log("added");
        this.controller.set('firstName', 'sabira');
      }

    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RRMkqvoe",
    "block": "{\"symbols\":[\"emp\"],\"statements\":[[7,\"h1\"],[11,\"class\",\"table\"],[9],[0,\" TABLE \"],[10],[0,\"\\n\\n\\n\"],[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"table\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"#\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"FirstName\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"LastName\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"Age\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"employees\"]]],null,{\"statements\":[[0,\"     \"],[7,\"tr\"],[9],[0,\"\\n     \"],[7,\"th\"],[11,\"scope\",\"row\"],[9],[1,[22,1,[\"id\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"firstName\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"lastName\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"age\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[0,\"\\n\"],[7,\"button\"],[12,\"onclick\",[27,\"route-action\",[\"add\"],null]],[11,\"type\",\"button\"],[9],[0,\"Add\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/table/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/trainer/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    fullName: Ember.computed('firstName', 'lastName', function () {
      const firstName = this.firstName;
      const lastName = this.lastName;
      return `${firstName}- ${lastName}`;
    })
  });

  _exports.default = _default;
});
;define("emb-app/pods/trainer/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    setupController(controller, model) {
      controller.set('firstName', 'Reshma');
      controller.set('lastName', 'Begum');
    },

    actions: {
      addButton() {
        console.log("added");
        this.controller.set('firstName', 'sabira');
      }

    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/trainer/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0t95UWgT",
    "block": "{\"symbols\":[],\"statements\":[[0,\"TRAINING\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"one\"],[9],[0,\" hai \"],[1,[21,\"firstName\"],false],[0,\"-\"],[1,[21,\"lastName\"],false],[10],[0,\"\\n\"],[7,\"div\"],[9],[1,[21,\"fullName\"],false],[10],[0,\"\\n\\n\\n\\n\\n\\n\"],[7,\"button\"],[12,\"onclick\",[27,\"route-action\",[\"addButton\"],null]],[11,\"type\",\"button\"],[9],[0,\"Add\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/trainer/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("emb-app/router", ["exports", "emb-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('posts');
    this.route('login');
    this.route('table');
    this.route('trainer');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("emb-app/serializers/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend({
    normalizeFindAllResponse(store, primaryModelClass, payload) {
      payload = {
        posts: payload
      };
      return this._super(store, primaryModelClass, payload);
    }

  });

  _exports.default = _default;
});
;define("emb-app/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("emb-app/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("emb-app/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("emb-app/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;

;define('emb-app/config/environment', [], function() {
  var prefix = 'emb-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("emb-app/app")["default"].create({"name":"emb-app","version":"0.0.0+4cfccbf0"});
          }
        
//# sourceMappingURL=emb-app.map
