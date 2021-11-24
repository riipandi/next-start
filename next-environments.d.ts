/**
 * You can declare global variables with `process.env` on this file.
 */

declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    MAINTENANCE_MODE: boolean
    SPLITBEE_TOKEN: string
  }
}
