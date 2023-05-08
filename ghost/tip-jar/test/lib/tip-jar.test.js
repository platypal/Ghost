const assert = require('assert');
const {Tier} = require('@tryghost/tiers');
const TipJarAPI = require('../../lib/TipJarAPI');

describe('TipJarAPI', function () {
    describe('getTierForAmount', function () {
        it('Can return a found or newly created tier', async function () {
            const TierHelper = await Tier.create({name: 'Tier Helper', slug: 'tier-helper'});
            const service = new TipJarAPI({
                Product: TierHelper
            });

            const tier = await service.getTierForAmount(500);

            assert(tier);
        });
    });
});
