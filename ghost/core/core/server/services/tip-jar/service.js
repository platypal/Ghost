class TipJarAPIWrapper {
    async init() {
        if (this.api) {
            // Already done
            return;
        }
        const {TipJarAPI} = require('../../../../../tip-jar');
        const ProductModel = require('../../models/product');

        this.api = new TipJarAPI({ProductModel: ProductModel});
    }
}

module.exports = new TipJarAPIWrapper();
