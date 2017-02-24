# custom-reporter

This is the **custom-reporter** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/nsoushi/testcafe-reporter-custom-reporter/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-custom-reporter
```

## Usage

When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('custom-reporter') // <-
    .run();
```

## Author
nsoushi
