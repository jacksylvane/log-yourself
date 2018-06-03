import { Selector } from 'testcafe'; // first import testcafe selectors

fixture`Getting Started`// declare the fixture
  .page`http://localhost:3000/`;  // specify the start page

//then create a test and place your code there
test('My first test', async t => {
  await t
    .click('#addLog')
    .typeText('#text', 'John Smith')
    .click('.submit-btn')
    .wait(300)
    .takeScreenshot('test-screenshot.png')
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('#alert').innerText).contains('Log has been added!');
});