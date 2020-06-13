# vue2-split

- __Fast:__ No overhead or attached window event listeners, uses pure CSS for resizing.
- __Compatible:__ Works great in IE9, and _even loads in IE8_ with polyfills. Early Firefox/Chrome/Safari/Opera supported too.

## Installation

npm:

```
$ npm install --save vue2-split
```

## Getting Started

```js
// using ES6 modules
import Vue2Split from 'vue2-split'
Vue.use(Vue2Split)
```

## Usage Examples

A split with two elements, starting at 25% and 75% wide.

```html
<split style="height: 500px;">
    <split-area :size="25">
        panel left
    </split-area>
    <split-area>
        panel right
    </split-area>
</split>
```

A split with three elements, starting with even widths with 100px, 100px and 300px minimum widths, respectively.

```html
<split style="height: 500px;">
    <split-area :size="33" :minSize="100">
        panel left
    </split-area>
    <split-area :size="33" :minSize="100">
        panel center
    </split-area>
    <split-area :size="33" :minSize="300">
        panel right
    </split-area>
</split>
```

A vertical split with two elements.

```html
<split style="height: 500px;" :direction="vertical">
    <split-area>
        panel left
    </split-area>
    <split-area>
        panel center
    </split-area>
</split>
```

A Setting the gutter size to 20px.

```html
<split style="height: 500px;" :gutterSize="20">
    <split-area>
        panel left
    </split-area>
    <split-area>
        panel center
    </split-area>
</split>
```

Callbacks that can be added on drag (fired continously), drag start and drag end. If doing more than basic operations in `onDrag`, add a debounce function to rate limit the callback.

```html
<split style="height: 500px;" @onDragEnd="onDragEnd" @onDragStart="onDragStart" onDrag="onDrag">
    <split-area>
        panel left
    </split-area>
    <split-area>
        panel center
    </split-area>
</split>
```
```
methods: {
    onDragStart (size) {
        console.log('Drag Start', size) // callback existing size
    },
    onDrag (size) {
        console.log('on Drag', size) // callback new size
    },
    onDragEnd (size) {
        console.log('Drag End', size) // callback new size
    }
}
```
A Reset the panel and get new sizes

```html
<split style="height: 500px;" ref="mySplit">
    <split-area>
        panel left
    </split-area>
    <split-area>
        panel center
    </split-area>
</split>
```
```
methods: {
    Reset () {
        console.log(this.$refs.mySplit.reset())
    }
    getSizes () {
        console.log(this.$refs.mySplit.getSizes())
    }
}
```

## API

#### split props

| Property | Type | Default | Description |
|---|---|---|---|
| `gutterSize` | Number | 10 | Gutter size in pixels. |
| `direction` | String | 'horizontal' | Direction to split: horizontal or vertical. |

#### split events

| Event Name | Description | Return Value
|---|---|---|
| `onDrag` | Callback on drag. | current size |
| `onDragStart` | Callback on drag start. | new size |
| `onDragEnd` | Callback on drag end. | new size |

#### split methods

| Method Name | Description | Arguments
|---|---|---|
| `reset` | Reset panel. | none |

#### split-area props

| Property | Type | Default | Description |
|---|---|---|---|
| `sizes` | Array | | Initial sizes of each element in percents or CSS values. |
| `minSize` | Number or Array | 100 | Minimum size of each element. |


## Important Note

vue2-split does not set CSS beyond the minimum needed to manage the width or height of the elements.


## Browser Support

This library uses [split.js](https://github.com/nathancahill/split.js). These features are supported in the following browsers:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> | [<img src="http://i.imgur.com/70as3qf.png" height="48px" alt="BrowserStack logo">](http://browserstack.com/) |
|:---:|:---:|:---:|:---:|:---:|:----|
| 22+ ✔ | 6+ ✔ | 9+ ✔ | 15+ ✔ | 6.2+ ✔ | Sponsored ✔ |

## Built With

* [Webpack](https://webpack.js.org/) - The web framework used
* [gulp](http://gulpjs.com/) - Automated development toolkit

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/abhipanda/vue2-split/blob/master/LICENSE) file for details