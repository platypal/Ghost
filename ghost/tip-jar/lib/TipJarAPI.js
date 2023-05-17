const logging = require('@tryghost/logging');

module.exports = class TipJarAPI {
    /**
     * @param {object} deps
     * @param {import('../../core/core/server/models/product')} deps.ProductModel
     */
    constructor(deps) {
        /** @private */
        this.ProductModel = deps.ProductModel;
    }

    /**
     * @param {*} data 
     * @returns {Promise<Object>}
     */
    async add(data) {
        logging.info('Made it to the API module');
        const ProductModel = this.ProductModel;

        let oneTimeTier = ProductModel.where('name', `one-time-${data.amount}`);

        if (oneTimeTier === null) {
            oneTimeTier = await ProductModel.forge({
                name: `one-time-${data.amount}`,
                monthly_price: data.amount,
                yearly_price: data.amount
            });
            await oneTimeTier.save();
        }

        return oneTimeTier;
    }

    /**
     * @returns {Promise<Object>}
     */
    async browse() {
        logging.info('You called the browse function of the TipJarAPI');
    }
};