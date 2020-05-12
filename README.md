# Log Style
Customize the style of the logged messages just by adding all of your (CSS) styles in a plain object.
*Note: it just works in the browser*

### Installation
```
npm i log-style
```

### Example
```javascript
import 'log-style';

console.log('your message is here!'.styles({
  background: '#111',
  color: 'white',
  padding: '20px 30px',
  margin: '30px',
  border: '5px solid red',
  'border-radius': '50px 10px 50px 10px',
  'text-shadow': '0 0 15px blue',
  'box-shadow': '0 0 30px #00f',
//   'box-shadow': '0 0 20px yellow inset',
  'text-decoration': 'overline underline',
  'text-decoration-color': 'blue',
  'text-decoration-style': 'double',
  'line-height': '130px',
  'font-family': 'impact',
  'font-size': '30px',
  'font-style': 'italic',
  'text-transform': 'uppercase',
  'word-spacing': '5px',
//   'writing-mode': 'vertical-lr'
  /* etc. */
}));
```

### Sample output
![log-style npm package sample output](https://raw.githubusercontent.com/Babak-Gholamzadeh/log-style/master/sample-output.PNG)

