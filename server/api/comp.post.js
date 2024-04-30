export default defineEventHandler(async(event)=>{
    const body= await readBody(event)
    await sql`update testtab set comp=${body.status} where id=${body.id} `
})