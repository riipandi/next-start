/**
 * You can declare modules and or declare global
 * variables with `process.env` on this file.
 */

declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    SPLITBEE_TOKEN: string
  }
}
