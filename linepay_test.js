import { createLinePayClient } from 'line-pay-merchant'

const linePayClient = createLinePayClient({
  channelId: '1657216441', // channel ID
  channelSecretKey: '407efe35caedc7c572db5306540986bf', // channel secret key
  env: 'development' // env can be 'development' or 'production'
})

async function sendRequest() {
try {
    const res = await linePayClient.request.send({
    body: {
        amount: 1000,
        currency: 'TWD',
        orderId: '20211216003',
        packages: [
        {
            id: 'c99abc79-3b29-4f40-8851-bc618ca57856',
            amount: 1000,
            products: [
            {
                name: 'Product Name',
                quantity: 2,
                price: 500
            }
            ]
        }
        ],
        redirectUrls: {
        confirmUrl: 'https://myshop.com/confirmUrl',
        cancelUrl: 'https://myshop.com/cancelUrl'
        }
    }
    })

    console.log(res)
} catch (e) {
    console.log('error', e)
  }
}