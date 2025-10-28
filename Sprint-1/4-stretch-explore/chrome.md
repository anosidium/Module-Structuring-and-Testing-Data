Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

It displays an alert saying:

chrome://new-tab-page says

Hello world!

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

It displays an alert with a textfield where you can enter some text, e.g. John.

What is the return value of `prompt`?

If the user has entered text, the return value is a string containing the entered text.
If the user leaves the text field blank and clicks the OK button, the return value is an empty string.
If the user enters a name or leaves the text field blank but clicks the Cancel button, the return value is null.
