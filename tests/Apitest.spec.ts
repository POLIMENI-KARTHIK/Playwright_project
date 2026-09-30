import { test, expect } from "@playwright/test";
//const {test,expect} = require('@playwright/test');
  test.only("get request",async({request})=>{

    const response= await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
   // expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
   // expect(response.statusText()).toBe("OK");
    //expect(response.headers()['content-type']).toContain("application/json; charset=utf-8");

  })

  test("post request",async({request})=>{
    const response= await request.post("https://reqres.in/api/users",{
        data:{ name:"morpheus",job:"leader"},
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);
  })


  test("put request",async({request})=>{
    const response= await request.put("https://reqres.in/api/users/2",{
        data:{ name:"morpheus",job:"zion resident"},  
      headers:{
        "Content-Type":"application/json"
      }     

    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
  })


  test("delete request",async({request})=>{
      const response= await request.delete("https://reqres.in/api/users/2");
    console.log(await response.status());
    expect(response.status()).toBe(204);
  })