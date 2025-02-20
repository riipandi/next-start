/**
 * OpenNext adapter configuration for Cloudflare Workers.
 *
 * @see: https://opennext.js.org/cloudflare
 */

import incrementalCache from '@opennextjs/cloudflare/kv-cache'
import memoryQueue from '@opennextjs/cloudflare/memory-queue'

const config = {
  default: {
    override: {
      converter: 'edge',
      wrapper: 'cloudflare-node',
      incrementalCache: () => incrementalCache,
      queue: () => memoryQueue,
      tagCache: 'dummy',
    },
  },

  middleware: {
    external: true,
    override: {
      converter: 'edge',
      wrapper: 'cloudflare-edge',
      proxyExternalRequest: 'fetch',
    },
  },

  dangerous: {
    enableCacheInterception: false,
  },
}

export default config
