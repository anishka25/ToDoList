export default defineEventHandler(async(event)=>{
    const body= await readBody(event)
    const result = await sql`delete from testtab where id=${body.id}`
    return result
})