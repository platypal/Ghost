const logging = require('@tryghost/logging');
const DomainEvents = require('@tryghost/domain-events');
const {MemberPageViewEvent} = require('@tryghost/member-events');

class TipJarService {
    /**
     * Skeleton test run
     */
    constructor() {
        /** @private */
        // this.StripeProductModel = deps.StripeProduct;
        /** @private */
        // this.StripePriceModel = deps.StripePrice;
        /** @private */
        // this.StripeCustomerModel = deps.StripeCustomer;
        /** @private */
        // this.stripeAPIService = deps.stripeAPIService;

        DomainEvents.subscribe(MemberPageViewEvent, async () => {
            logging.info('TipJarService responding to events!');
        });
    }
}

module.exports = TipJarService;
