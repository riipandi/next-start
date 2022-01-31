import splitbee from '@splitbee/web'

export function initSplitBee(): void {
  splitbee.init({
    token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN || '',
    disableCookie: false
    // scriptUrl: '/bee.js',
    // apiUrl: '/_hive'
  })
}
