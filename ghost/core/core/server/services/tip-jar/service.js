class TipJarServiceWrapper {
    async init() {
        if (this.api) {
            // Already done
            return;
        }
        const {TipJarService} = require('../../../../../tip-jar');

        // const models = require('../../models');

        this.api = new TipJarService({});
    }
}

module.exports = new TipJarServiceWrapper();
