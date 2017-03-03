'use strict';

import {t} from 'testcafe';
import AuthPage from '../../pages/auth/auth-page.js';

export default class AuthOperator {
    constructor () {
        this.page = new AuthPage();
    }

    async open() {
        await t
            .navigateTo(this.page.url)
    }

    async authorize(id, password) {
        await this.open();

        await t
            .typeText(this.page.idInput, id)
            .typeText(this.page.pwInput, password)
            .click(this.page.submitBtn)
    }
}
