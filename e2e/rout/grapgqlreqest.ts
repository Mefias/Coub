import { Page } from '@playwright/test';
import { getUserAddressResponses } from './grapgqlconst';

const getQueryOperationName = (query: string): string => {
    const operationNameRegex = /(?<=query\s).*(?=\s{)/
    const operationNameList: string[] | null = query.match(operationNameRegex)

    return operationNameList ? operationNameList[0] : ''
}

// const getMutationOperationName = (query: string): string => {
//     const operationNameRegex = /(?<=fragment\s).*(?=\s\( ) /
//     const operationNameList: string[] | null = query.match(operationNameRegex)

//     return operationNameList ? operationNameList[0] : ''
// }

const hasOperationName = (query: string, operationName: string) =>
getQueryOperationName(query) === operationName 
//getMutationOperationName(query) === operationName


export const  mockGraphqlRequest = async (page : Page) => {
await page.route('**/graphql', (route) => {
    const body: { query: string,variables: any } = route.request( ).postDataJSON( )
    const query = body.query
    const variables = body.variables
    //console.log('Intecepted graphQl  query,query = {}',query)
    if (hasOperationName(query, 'GetUser')) {
        console.log('Intecepted get user request,query = {}',query)
        console.log('variables.address',variables.address)
        console.log('getUserAddressResponses.hasOwnProperty(variables.address)',getUserAddressResponses.hasOwnProperty(variables.address))
        console.log('variables.address != null && getUserAddressResponses.hasOwnProperty(variables.address)',variables.address != null && getUserAddressResponses.hasOwnProperty(variables.address))
        if (variables.address != null && getUserAddressResponses.hasOwnProperty(variables.address)) {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: getUserAddressResponses[body.variables.address]
            });
        } else {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: '{"data":{"user":{"isFollowedBy":false,"isFollowing":false,"__typename":"User"}}}'
            });
        }
    }

    if (hasOperationName(query, 'GetLoggedUser')) {
        console.log('Intecepted GetLoggedUser',query)
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: '{"data":{"loggedUser":{"address":"0xf03d14911ff4cba9395208e4c220b237981a44e8","username":"kirill.nosov","bio":null,"avatar":"https://coub-attachments.akamaized.net/coub_storage/channel/cw_avatar/336f21c2831/f334e0f1fd6c35d215f56/profile_pic_new_2x_1666721471_filename.png","background":null,"twitter":null,"discord":null,"facebook":null,"instagram":null,"telegram":null,"consent":true,"likes":0,"views":15,"followers":{"totalCount":"0x0","__typename":"FollowConnection"},"following":{"totalCount":"0x0","__typename":"FollowConnection"},"__typename":"User"}}}',
        })
    }
})
}
