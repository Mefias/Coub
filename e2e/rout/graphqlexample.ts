import { getUserAddressResponses } from "./grapgqlconst";

function isGetUserQuery(query: string, operator: string) {
    return query === operator;
}

async function test(page) {
    await page.route('graphql', route => {
        const body: { query: string, variables: any } = page.body
        const query = body.query
        const variables = body.variables
        if (isGetUserQuery(query, 'GetUser')) {
            if (variables.address != null && getUserAddressResponses.hasOwnProperty(variables.address)) {
                route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: getUserAddressResponses[body.variables.address]
                });
            } else {
                route.fulfill({
                    status: 404,
                });
            }
        }
    });
}