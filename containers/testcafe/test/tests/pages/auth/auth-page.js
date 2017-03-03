'use strict';

import { Selector } from 'testcafe';

export default class AuthPage {
    constructor () {

        this.url = 'https://freshlive.tv/auth/fresh_id';

        this.idInput = Selector('#user_id');
        this.pwInput = Selector('#password');

        this.submitBtn = Selector('button[type=submit]');
    }
}
