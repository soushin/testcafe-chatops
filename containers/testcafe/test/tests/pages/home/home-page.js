'use strict';

import { Selector } from 'testcafe';

export default class HomePage {
    constructor () {

        this.url = 'https://freshlive.tv/';

        this.header = Selector('header');
        this.accountMenu = Selector('div.AccountMenu').nth(0);
        this.accountMenuDropdown = this.accountMenu.find('div.AccountMenu__dropdown').nth(0);
        this.accountName = this.accountMenuDropdown.find('span.u-vaM').nth(0).find('span').nth(0);
    }
}
