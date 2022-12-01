const request= require('supertest');
const { response } = require('../../app');
const app=require('../../app');
describe('testine get launches api',()=>{
    test('status code check using supertests',()=>{
       
          request(app)
         .get('/launches')
         .expect(201) // this is not crct way to check the status code
         .expect('Application-Type',/json/)   

    })
    test('sttaus code using jest assertions',async()=>{
         //this is using jest assertions (toBe)
         const response=await request(app).get('/launches') ;
         expect(response.statusCode).toBe(200)
    })
    
})
describe('testing post requests hrre',()=>{
    const fullData={
        mission:'jaya',
        rocket:'jaya',
        target:'jaya',
        launchDate:'august 21,2022'

    }
    const fullDataWithError={
        mission:'jaya',
        rocket:'jaya',
        target:'jaya',
        launchDate:'august'

    }

    const dataWithoutDate={
        mission:'jaya',
        rocket:'jaya',
        target:'jaya'
    }
    test('status code check',()=>{
        request(app).post('/launches').expect(201)
    });
    test('cehck sent data ',async()=>{
        const response=await request(app).post('/launches').send(fullData);
        const resDate=new Date(response.body.launchDate).valueOf();
        const reqDate=new Date(fullData.launchDate).valueOf();
        expect(response.body).toMatchObject(dataWithoutDate);
        expect(resDate).toBe(reqDate);
    });
    test('missing one field',async()=>{
        const response=await request(app).post('/launches').send(dataWithoutDate);
        expect(response.body).toStrictEqual({error:"missing fields",});
        expect(400)
    });
    test('invalid date',async()=>{
        const response=await request(app).post('/launches').send(fullDataWithError);
        expect(response.body).toStrictEqual({ error:'Invalid launch Date',})
       
    });
    test('invalid date status',async()=>{
        const response=await request(app).post('/launches').send(fullDataWithError);
     
        expect(response.statusCode).toBe(400)
    })

})