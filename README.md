# vue-flash-message

<p>Simple vue flash alert message component. It is made to display a list of messages and give individual control over each message instance. Component is based on <strong><a href="https://www.npmjs.com/package/vuex-flash">Vuex-flash</a></strong> code and inspired by old goodies as jGrowl. Currently in active development.</p>

## Demo & Example
#### [Live demo](http://test.keen-design.ru/vue-flash-message/)

## Install
```bash
  npm install --save vue-flash-message
```

## Configuration
```javascript
import Vue from 'vue';
import VueFlashMessage from '../src';
Vue.use(VueFlashMessage);
```
You can rename default flash method via options: 
```javascript
Vue.use(VueFlashMessage, {method: 'iPreferQuickSilver'});
```

## Usage
Output flash message pool and configure transitions. 
```html
<flash-message transitionIn="animated swing" class="myCustomClass"></flash-message>
```

(Optional) Include flash messages basic css.
```javascript
require('vue-flash-message/dist/vue-flash-message.min.css');
```

Emit flash messages from any component with a flash (or custom named) method.
```javascript
this.flash('Data loaded', 'success');
this.flash('Validation failed', 'error');
this.flash('Spawning too much alerts is a bad UX', 'warning');
this.flash('It is a flash alert', 'info');
```

## Usage with options
```javascript
this.flash('Hello World', 'success', {
  timeout: 3000,
  beforeDestroy() {
    alert('oh no, not again!');
  }
});
```

### Options
| Name          | Type     | Desciption |
| ---:          |:---:     |:--- |
| timeout       | Number   | Number in milliseconds until message self destruct |
| beforeDestroy | Function | Fires bofore message is destroyed | 

### Props
|     Name       |   Type      |          Default          |              Desciption
|
|     ---:       |    :---:    |           :---:           |                :---    
| transitionName |   String    | custom-classes-transition | vue transitions `name` prop [More](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes)               |
| transitionIn   |   String    | 'animated fadeInDown'     | space separted string for vue transitions `enter-active-class` prop [More](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes) |
| transitionOut  |   String    | 'animated fadeOutUp'      | space separted string for vue transitions `leave-active-class` prop [More](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes) |

## License
<p>Vue-Flash-Message is open-sourced software licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
