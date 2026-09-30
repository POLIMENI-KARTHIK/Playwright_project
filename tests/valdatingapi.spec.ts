import{test,expect} from "@playwright/test";
test("fetch and validate API response",async({request})=>{
const response= await request.get("https://restful-booker.herokuapp.com/booking/1");
const responseBody= await response.json();
console.log(responseBody);
expect(response.status()).toBe(200);
expect(response.headers()['content-type']).toContain("application/json; charset=utf-8");






});