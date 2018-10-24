# vue-flash-message

<p>Simple yet flexible vue flash alert message component. It is made to display a list of messages and give individual control over each instance and global message storage. Component is inspired by old goodies as jGrowl.</p>

## Demo & Example
#### [Live demo](http://test.keen-design.ru/vue-flash-message/)

## Install
```bash
  npm install --save vue-flash-message
```

## Configuration
```javascript
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);
```
You can rename default flash method via options: 
```javascript
Vue.use(VueFlashMessage, { method: 'iPreferQuickSilver' });
```

## Usage
Output flash message pool and configure transitions. 
```html
<flash-message class="myCustomClass"></flash-message>
```

(Optional) Include pre defined basic css.
```javascript
require('vue-flash-message/dist/vue-flash-message.min.css');
```

Emit flash messages from any component with a flash (or custom named) method.
```javascript
this.flash('Data loaded', 'success');
this.flash('Validation failed', 'error');
this.flash('Spawning too much alerts is a bad UX', 'warning');
this.flash('Live long and prosper', 'info');
```

## Shortcut methods
You can also use shortcut methods to output common message types
```javascript
this.flashSuccess('Data loaded');
this.flashError('Validation failed');
this.flashWwarning('Spawning too much alerts is a bad UX');
this.flashIinfo('Live long and prosper');
```
You if you don't want to spoil your components with these methods,
you can switch them off by using createShortcuts config option.
```javascript
Vue.use(VueFlashMessage, {
  createShortcuts: false,
});
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
| Name               | Type     | Default | Desciption                                                                  |
| ---:               |:---:     |:---     |:---                                                                         |
| timeout            | Number   | 0       | Number in milliseconds until message self destruct                          |
| important          | Boolean  | false   | Defines if message has a close button.                                      |
| autoEmit           | Boolean  | true    | Defines if message should be emitted immediately after calling flash method |
| pauseOnInteract    | Boolean  | false   | Defines if message destruct timer should be paused on user interaction      |
| beforeDestroy      | Function | -       | Fires bofore message is destroyed                                           |
| onStartInteract    | Function | -       | Fires on user interact with message element                                 | 
| onCompleteInteract | Function | -       | Fires on user complete interaction with message element                     | 

### Props
|     Name       |   Type      |          Default          |              Desciption |
|     ---:       |    :---:    |           :---:           |                :---     |
| transitionName |   String    | custom-classes-transition | vue transitions `name`  |
| outerClass     |   String    | 'flash__wrapper'          | outer class name        |

## Passing global message options
```javascript
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 1000,
    important: true,
    autoEmit: false,
    pauseOnInteract: true
  }
});
```

## API
Flash method returns message object giving you full controll over it's contents, options and lifecycle.
```javascript
const myMessage = this.flash('My message', 'info');
```
| Method                   | Desciption |
| ---:                     |:--- |
| emit()                   | Adds message to global storage. Helpfull when message is created with autoEmit: false |
| destroy()                | Destroys message |
| getStorage()             | Returns global flash message storage object |
| setSelfDestructTimeout(timeout) | Sets message self destruct timer value (in milliseconds) |
| startSelfDestructTimer() | Starts self destruct timer |
| killSelfDestructTimer()  | Stops self destruct timer |

Calling flash method with no arguments will return flash storage object.
```javascript
const messageStorage = this.flash();
```
| Method                 | Desciption |
| ---:                   |:--- |
| flash(...)             | Same as this.flash method, except it does not return storage instance |
| push(id, message)      | Adds message object to storage with id key |
| destroy(id)            | Destroys message by given id |
| destroyAll()           | Destroys all messages |

## Vuex usage
You can access flash message storage object directly from Vue prototype:
```
Vue.prototype.$flashStorage.flash(...);
```

## License
<p>Vue-Flash-Message is open-sourced software licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
