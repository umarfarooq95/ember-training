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
  QUnit.test('pods/employees/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/employees/route.js should pass ESLint\n\n21:7 - Unexpected console statement. (no-console)\n23:13 - \'firstName\' is assigned a value but never used. (no-unused-vars)\n24:13 - \'lastName\' is assigned a value but never used. (no-unused-vars)\n25:13 - \'age\' is assigned a value but never used. (no-unused-vars)\n34:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('pods/posts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/posts/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/scientists/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/scientists/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/training/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/training/controller.js should pass ESLint\n\n');
  });
  QUnit.test('pods/training/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/training/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/users/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/users/route.js should pass ESLint\n\n');
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
    assert.ok(false, 'emb-app/pods/components/post-list/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/post-list/template.hbs\n  4:0  error  Incorrect indentation for `<p>` beginning at L4:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('emb-app/pods/employees/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/employees/template.hbs should pass TemplateLint.\n\nemb-app/pods/employees/template.hbs\n  4:4  error  Incorrect indentation for `<thead>` beginning at L4:C4. Expected `<thead>` to be at an indentation of 2 but was found at 4.  block-indentation\n  15:4  error  Incorrect indentation for `<tbody>` beginning at L15:C4. Expected `<tbody>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `<tr>` beginning at L5:C8. Expected `<tr>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:12  error  Incorrect indentation for `<th>` beginning at L6:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:12  error  Incorrect indentation for `<th>` beginning at L7:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<th>` beginning at L8:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `<th>` beginning at L9:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:12  error  Incorrect indentation for `{{! <th>FirstName</th>\n            <th>LastName</th>\n            <th>Age</th> }}` beginning at L10:C12. Expected `{{! <th>FirstName</th>\n            <th>LastName</th>\n            <th>Age</th> }}` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:8  error  Incorrect indentation for `{{#each}}` beginning at L16:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:8  error  Incorrect indentation for `<tr>` beginning at L17:C8. Expected `<tr>` to be at an indentation of 10 but was found at 8.  block-indentation\n  18:12  error  Incorrect indentation for `<th>` beginning at L18:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<td>` beginning at L19:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  20:12  error  Incorrect indentation for `<td>` beginning at L20:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  21:12  error  Incorrect indentation for `<td>` beginning at L21:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('emb-app/pods/login/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/login/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/posts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/posts/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/scientists/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/scientists/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/training/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/training/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/users/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/users/template.hbs should pass TemplateLint.\n\nemb-app/pods/users/template.hbs\n  4:4  error  Incorrect indentation for `<thead>` beginning at L4:C4. Expected `<thead>` to be at an indentation of 2 but was found at 4.  block-indentation\n  11:4  error  Incorrect indentation for `<tbody>` beginning at L11:C4. Expected `<tbody>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `<tr>` beginning at L5:C8. Expected `<tr>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:12  error  Incorrect indentation for `<th>` beginning at L6:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:12  error  Incorrect indentation for `<th>` beginning at L7:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<th>` beginning at L8:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:8  error  Incorrect indentation for `{{#each}}` beginning at L12:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  13:8  error  Incorrect indentation for `<tr>` beginning at L13:C8. Expected `<tr>` to be at an indentation of 10 but was found at 8.  block-indentation\n  14:12  error  Incorrect indentation for `<td>` beginning at L14:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `<td>` beginning at L15:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<td>` beginning at L16:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/model-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/employees/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/employees/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/scientists/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/scientists/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/trainer/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/trainer/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/training/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/training/controller-test.js should pass ESLint\n\n');
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
define("emb-app/tests/unit/pods/employees/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | employees', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:employees');
      assert.ok(route);
    });
  });
});
define("emb-app/tests/unit/pods/scientists/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | scientists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:scientists');
      assert.ok(route);
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
define("emb-app/tests/unit/pods/training/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | training', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:training');
      assert.ok(controller);
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
