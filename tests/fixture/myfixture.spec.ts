import{test as myTest} from "@playwright/test";

type karthik=
{
    age:number;
    name:string;
}

const myFixturetests = myTest.extend<karthik>({
    age: 20,
    name: "karthik"
});
export const test = myFixturetests;
