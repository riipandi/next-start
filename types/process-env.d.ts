declare namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      siteMeta: {
        url: string
        title: string
        description?: string
        imageUrl?: string
      }
    }
  }
  