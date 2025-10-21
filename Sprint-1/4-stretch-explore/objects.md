## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert: ƒ assert()
clear: ƒ clear()
context: ƒ context()
count: ƒ count()
countReset: ƒ countReset()
createTask: ƒ createTask()
debug: ƒ debug()
dir: ƒ dir()
dirxml: ƒ dirxml()
error: ƒ error()
group: ƒ group()
groupCollapsed: ƒ groupCollapsed()
groupEnd: ƒ groupEnd()
info: ƒ info()
log: ƒ log()
memory: MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 3760000000}
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
Symbol(Symbol.toStringTag): "console"
[[Prototype]]: Object

Try also entering `typeof console`

Answer the following questions:

What does `console` store?

It's an object type.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The console is an object and log and assert are method. The dot (.) notation means that you are accessing an instance property or method that belongs to the object
