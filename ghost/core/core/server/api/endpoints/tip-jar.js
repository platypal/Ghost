const tipJarService = require('../../services/tip-jar');

module.exports = {
    docName: 'tip-jar',

    browse: {
        statusCode: 201,
        headers: {
            cacheInvalidate: true
        },
        permissions: true,
        async query(frame) {
            return await tipJarService.api.browse(frame.data);
        }
    }
};