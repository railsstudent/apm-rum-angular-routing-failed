const endpoint = 'https://questionnaire-backend.diginex.app';

export const environment = {
    production: true,
    api: {
        endpoint,
    },
    elasticAPM: {
        serviceName: 'questionnaire-frontend',
        serverUrl: 'https://apm.dev.diginex.fun',
        distributedTracingOrigins: [endpoint],
        transactionName: 'Transaction-Name',
    },
    enableLogging: false,
};
