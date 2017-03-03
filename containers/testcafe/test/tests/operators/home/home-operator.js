'use strict';

import {t} from 'testcafe';
import HomePage from '../../pages/home/home-page.js';

export default class HomeOperator {
    constructor () {
        this.page = new HomePage();
    }

    async open(t) {
        await t
            .navigateTo(this.page.url)
    }
}
