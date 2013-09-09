module.exports = {
    '/amazon' : {
        name : 'awssum-amazon',
        provider : 'amazon',
        title : 'Amazon',
        submenu : [
            { title : 'Installing', href : '/amazon/installing' },
        ],
        package : require('../node_modules/awssum-amazon/package.json'),
    },
};
