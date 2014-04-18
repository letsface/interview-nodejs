# Q promises

(https://github.com/kriskowal/q/wiki/API-Reference)

To aid in debugging, you can set this Q variable:

```
Q.longStackSupport = true;
````

```
Q.nfcall(func, ...args)

Calls a Node.js-style function with the given variadic arguments, returning a promise that is fulfilled if the Node.js function calls back with a result, or rejected if it calls back with an error (or throws one synchronously).
```

```
Q.denodeify(nodeFunc, ...args)

Alias: Q.nfbind

Creates a promise-returning function from a Node.js-style function, optionally binding it with the given variadic arguments. An example:

var readFile = Q.denodeify(FS.readFile);

readFile("foo.txt", "utf-8").done(function (text) {

});
```

# Regular expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

```
*
Matches the preceding character 0 or more times. Equivalent to {0,}.

For example, /bo*/ matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled", but nothing in "A goat grunted".

+
Matches the preceding character 1 or more times. Equivalent to {1,}.

For example, /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy".

x|y
Matches either 'x' or 'y'.

For example, /green|red/ matches 'green' in "green apple" and 'red' in "red apple."
```

# Array methods

Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.

Syntax
arr.reduce(callback,[initialValue])
Parameters

callback
Function to execute on each value in the array, taking four arguments:
previousValue
The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
currentValue
The current element being processed in the array.
index
The index of the current element being processed in the array.
array
The array reduce was called upon.
initialValue
Object to use as the first argument to the first call of the callback.
```

# Mocha

Mocha example: http://visionmedia.github.io/mocha/

```
$ npm install -g mocha
$ mkdir test
$ $EDITOR test/test.js

var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
```

increasing timeout for mocha tests, you can use this at the top of your test:

```
this.timeout(500);
```