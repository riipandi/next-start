declare namespace NodeJS {
  export interface ProcessEnv {
    siteMeta: {
      url: string
      title: string
      description?: string
      imageUrl?: string
    }
  }
}
