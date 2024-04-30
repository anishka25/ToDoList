import uniqid from 'uniqid';


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const id= uniqid();
    await sql`insert into testtab values(${id},${Date.now()},${body.title},${false})`
    return{
        id:id,
        date:Date.now(),
        title:body.title,
        comp:false,
    }
})  