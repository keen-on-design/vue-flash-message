# vue-flash-message

<p>Simple vue flash alert message component to display stack of messages. Component is based on <strong><a href="https://www.npmjs.com/package/vuex-flash">Vuex-flash</a></strong> and inspired by old goodies like jGrowl. Currently in active development</p>

<p>TODO: add a demo ;)</p>

## Install
```bash
  npm install --save vue-flash-message
```

## Configuration
```javascript
var Vue = require('vue');
var VueFlashMessage = require('vue-flash-message');
Vue.use(VueFlashMessage);
```
VueFlashMessage plugin adds flash method by default. You can rename it in options: 
```javascript
Vue.use(VueFlashMessage, {method: 'iPreferQuickSilver'});
```
## Usage

```javascript
flash('Hello World', 'success');
flash('Hello World', 'error');
flash('Hello World', 'warning');
flash('Hello World', 'info');
```

### Props
| Name       | Type    | Default        | Restrictions                  |
|------------|---------|----------------|-------------------------------|
| timeout    | Number  | 3000           |                               |

## License
<p>Vue-Flash-Message is open-sourced software licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
