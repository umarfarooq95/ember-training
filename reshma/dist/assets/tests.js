'use strict';

define("emb-app/tests/integration/components/postlist/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | postlist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vPsd5jpZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"postlist\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZAiO7/jW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"postlist\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/integration/pods/components/training-based/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | training-based', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JU9mk53l",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"training-based\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "h21TPYvt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"training-based\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });
  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/post-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/post-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/training-based/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/training-based/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/posts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/posts/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/table/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/table/controller.js should pass ESLint\n\n9:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('pods/table/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/table/route.js should pass ESLint\n\n16:34 - \'model\' is defined but never used. (no-unused-vars)\n23:13 - Unexpected console statement. (no-console)');
  });
  QUnit.test('pods/trainer/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/trainer/controller.js should pass ESLint\n\n');
  });
  QUnit.test('pods/trainer/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/trainer/route.js should pass ESLint\n\n5:28 - \'model\' is defined but never used. (no-unused-vars)\n12:9 - Unexpected console statement. (no-console)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb-app/pods/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/components/post-list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/post-list/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/post-list/template.hbs\n  4:0  error  Incorrect indentation for `{{! <p>{{post.title}}</p> }}` beginning at L4:C0. Expected `{{! <p>{{post.title}}</p> }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:25  error  \'post\' is defined but never used  no-unused-block-params\n');
  });
  QUnit.test('emb-app/pods/components/training-based/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/components/training-based/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/login/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/login/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/posts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/posts/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/table/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/table/template.hbs should pass TemplateLint.\n\nemb-app/pods/table/template.hbs\n  28:7  error  Incorrect indentation for `{{#each}}` beginning at L28:C7. Expected `{{#each}}` to be at an indentation of 4 but was found at 7.  block-indentation\n  35:13  error  Incorrect indentation for `each` beginning at L28:C7. Expected `{{/each}}` ending at L35:C13 to be at an indentation of 7 but was found at 4.  block-indentation\n  29:5  error  Incorrect indentation for `<tr>` beginning at L29:C5. Expected `<tr>` to be at an indentation of 9 but was found at 5.  block-indentation\n  34:9  error  Incorrect indentation for `tr` beginning at L29:C5. Expected `</tr>` ending at L34:C9 to be at an indentation of 5 but was found at 4.  block-indentation\n  30:5  error  Incorrect indentation for `<th>` beginning at L30:C5. Expected `<th>` to be at an indentation of 7 but was found at 5.  block-indentation\n  31:6  error  Incorrect indentation for `<td>` beginning at L31:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  32:6  error  Incorrect indentation for `<td>` beginning at L32:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  33:6  error  Incorrect indentation for `<td>` beginning at L33:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  41:46  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('emb-app/pods/trainer/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/trainer/template.hbs should pass TemplateLint.\n\nemb-app/pods/trainer/template.hbs\n  11:46  error  you must use double quotes in templates  quotes\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/pods/components/training-based/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/training-based/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/model-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/scientist/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/scientist/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/table/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/table/controller-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/trainer/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/trainer/controller-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/trainer/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/trainer/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/training/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/training/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/posts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/posts/route-test.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/test-helper", ["emb-app/app", "emb-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-app/tests/unit/models/model-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("emb-app/tests/unit/pods/scientist/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | scientist', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:scientist');
      assert.ok(route);
    });
  });
});
define("emb-app/tests/unit/pods/table/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | table', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:table');
      assert.ok(controller);
    });
  });
});
define("emb-app/tests/unit/pods/trainer/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | trainer', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:trainer');
      assert.ok(controller);
    });
  });
});
define("emb-app/tests/unit/pods/trainer/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | trainer', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:trainer');
      assert.ok(route);
    });
  });
});
define("emb-app/tests/unit/pods/training/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | training', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:training');
      assert.ok(route);
    });
  });
});
define("emb-app/tests/unit/posts/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts');
      assert.ok(route);
    });
  });
});
define('emb-app/config/environment', [], function() {
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

require('emb-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
