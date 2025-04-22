/**
 * OpenNext adapter configuration for Cloudflare Workers.
 * @see: https://opennext.js.org/cloudflare
 * @see: https://opennext.js.org/cloudflare/caching
 */

import { defineCloudflareConfig } from '@opennextjs/cloudflare/config'
import incrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache'
import memoryQueue from '@opennextjs/cloudflare/overrides/queue/memory-queue'

export default defineCloudflareConfig({
  incrementalCache: incrementalCache,
  queue: () => memoryQueue,
})
