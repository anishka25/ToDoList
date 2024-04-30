export default defineEventHandler(async()=>{
    const result = await sql`select * from testtab order by date desc`
    return result
})