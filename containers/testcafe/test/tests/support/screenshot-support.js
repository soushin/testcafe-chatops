'use strict';

import {t} from 'testcafe';

export default class ScreenshotSupport {
    constructor () {
    }

    async take() {
        await t
            .takeScreenshot;
    }
}
