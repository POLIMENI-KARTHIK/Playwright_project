import{test,expect} from '@playwright/test';
import path from 'path';
 test("File Upload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles("./tests/files/text1.txt");
    //await page.setInputFiles("tests/files/test.txt");           
    await page.locator("#file-submit").click();
   // await expect(page.locator("#file-submit")).toHaveText("text1.txt");
   // await page.waitForTimeout(2000);
 });

 test("multiple file upload",async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(["./tests/files/text1.txt","./tests/files/text2.txt"]);
    await page.waitForTimeout(2000);
 });
  test("File Download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download");
    const [download]=await Promise.all([                                                

        page.waitForEvent("download"),
        page.locator("text=some-file.txt").click()
    ]);

});
test.only("Download file handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.getByText("Generate and Download Text File").first().click()
    const downloadResult = page.waitForEvent('download')
    await page.getByText("Download PDF File").click();
   /* const download = await downloadResult

    const downloadDir = await path.join('__dirname', 'downloads');
    // suggestedFilename() - Returns suggested filename for this download
        const fileName= await download.suggestedFilename()

    const filePath = await path.join(downloadDir, fileName)
    console.log(filePath);

    await download.saveAs(filePath)
  await expect(filePath).toContain(fileName) ;
  */

});