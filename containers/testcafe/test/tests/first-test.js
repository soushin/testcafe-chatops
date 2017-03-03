fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    const location = await t.eval(() => window.location);
    await t.expect(location.pathname).eql('/testcafe/example/');
});