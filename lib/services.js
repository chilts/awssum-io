module.exports = {
    '/amazon/s3' : {
        name : 'awssum-amazon-s3',
        provider : 'Amazon',
        service : 'Simple Storage Service (S3)',
        submenu : [
            { title : 'Installing', href : '/amazon/s3/installing' },
            { title : 'Example',    href : '/amazon/s3/example'    },
            { title : 'Streaming',  href : '/amazon/s3/streaming'  },
        ],
        page : 'amazon/s3/index',
        operation : require('../node_modules/awssum-amazon-s3/config.js'),
        package : require('../node_modules/awssum-amazon-s3/package.json'),
    },

    '/amazon/ec2' : {
        name : 'awssum-amazon-ec2',
        provider : 'Amazon',
        service : 'Elastic Compute Cloud (EC2)',
        submenu : [
            { title : 'Installing', href : '/amazon/ec2/installing' },
            { title : 'Example',    href : '/amazon/ec2/example'    },
        ],
        page : 'amazon/ec2/index',
        operation : require('../node_modules/awssum-amazon-ec2/config.js'),
        package : require('../node_modules/awssum-amazon-ec2/package.json'),
    },

    '/amazon/cloudformation' : {
        name : 'awssum-amazon-cloudformation',
        provider : 'Amazon',
        service : 'CloudFormation',
        submenu : [
            { title : 'Installing', href : '/amazon/cloudformation/installing' },
            { title : 'Example',    href : '/amazon/cloudformation/example'    },
        ],
        page : 'amazon/cloudformation/index',
        operation : require('../node_modules/awssum-amazon-cloudformation/config.js'),
        package : require('../node_modules/awssum-amazon-cloudformation/package.json'),
    },

    '/amazon/dynamodb' : {
        name : 'awssum-amazon-dynamodb',
        provider : 'Amazon',
        service : 'CloudFormation',
        submenu : [
            { title : 'Installing', href : '/amazon/cloudformation/installing' },
            { title : 'Example',    href : '/amazon/cloudformation/example'    },
        ],
        page : 'amazon/cloudformation/index',
        operation : require('../node_modules/awssum-amazon-cloudformation/config.js'),
        package : require('../node_modules/awssum-amazon-cloudformation/package.json'),
    },

};
