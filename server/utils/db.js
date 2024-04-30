import postgres from 'postgres'
const config = useRuntimeConfig()
export const sql = postgres(config.dbUrl,{
    ssl:{
      rejectUnauthorized: false // This line will fix new error
    }
}) 