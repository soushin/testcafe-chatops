'use strict';

import { expect } from 'chai';

import HomePage from '../../pages/home/home-page.js';
import AuthOperator from '../../operators/auth/auth-operator.js';
import ScreenshotSupport from '../../support/screenshot-support.js';

const homePage = new HomePage();
const authOperator = new AuthOperator();
const screenshot = new ScreenshotSupport();

const userId = 'xxxxxx';
const password = 'xxxxxx';
const accountId = 'My Account';

fixture `auth fixtures`;

test('authorized at page then is appeared your account name on element of header.', async t => {

    // ログインする
    await authOperator.authorize(userId, password);

    // スクリーンショット撮る
    await screenshot.take();

    // ログイン後にHomeにリダイレクトをするのでURLが正しく切り替わっているか
    const docURI = await t.eval(() => document.documentURI);
    expect(docURI).eql(`${homePage.url}?&login_succeeded=true`);

    // ヘッダーメニューにログインしたアカウント名が表示されているか
    await t
        .expect(homePage.accountMenuDropdown.exists).eql(true)
        .expect(homePage.accountName.exists).eql(true)
        .expect(homePage.accountName.innerText).eql(accountId);
});
