import 'cypress-xpath';
import "cypress-real-events/support";

describe('Login to Extramarks CRM', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://staging-crm.extramarks.com');
    cy.viewport(1800, 720);


    // Find username and password fields and input credentials
    cy.get('input[name="username"]').type('E27701');
    cy.get('input[name="password"]').type('Qacrm@321');

    // Click the login button
    cy.get('button[type="submit"]').click();
    cy.wait(2000);

    // 2. Go to "My CRM"
    cy.wait(4000);
    cy.contains('My CRM').click();

    cy.wait(5000);

    // 3. Click on "My School"
    cy.contains('My School').click();

    cy.wait(4000);

    // 4. Select the School "St Norberts" from the data table
    // You need to find the correct selector for the table row containing the school name
    cy.get('a.crm-anchor.crm-anchor-small') // You might need a more specific selector
        .contains('a.crm-anchor.crm-anchor-small', 'St Norberts') // finds the cell with the school name
        .click(); // click on the row or a specific action button if needed

    // 5. Click on "Generate Quote"
    cy.wait(4000);
    cy.contains('Generate Quote').click();

    // 6. Select option "Assessment Centre" in popup (radio button)
    // Find the radio button with label or value "Assessment Centre"
    cy.get('input[type="radio"][value="Assessment Centre"]') // adjust selector as per actual page
        .check(); // select/check the radio button

    // 7. Click "Submit" button
    cy.contains('Submit').click();
    cy.wait(4000);
    //8. Select option "ESC Plus Basic" in Popup (dropdown)
    cy.xpath("(//label[normalize-space()='Offline SIP'])[1]").click();

    cy.wait(4000);

    // 9. Click "Next" button
    cy.contains('Next').click();

    // Select 'ESC PlusPro' from options
    cy.xpath("(//div[@role='combobox'])[1]").click();
    cy.wait(4000);
    cy.xpath("(//li[normalize-space()='Offline SIP'])[1]").click()

    // Find the input for ESC Unit and type '2'
    cy.xpath("(//input[@name='name'])[1]").type('2');

    // Same approach, find the input or dropdown
    cy.xpath("(//input[@name='name'])[2]").clear();
    cy.xpath("(//input[@name='name'])[2]").type('4');

    //Mode of ESC
    //cy.xpath("(//div[@role='combobox'])[2]").click();
    //cy.xpath("(//span[normalize-space()='Online'])[1]").click();


    cy.wait(4000);
    // Assuming dropdown
    cy.xpath("(//div[@role='combobox'])[3]").click();
    cy.xpath("(//li[normalize-space()='Monthly'])[1]").click();

    cy.xpath("(//div[@role='combobox'])[4]").click();
    cy.xpath("(//li[normalize-space()='CBSE'])[1]").click();

    cy.xpath("(//div[@role='combobox'])[2]").click();
    cy.xpath("(//li[normalize-space()='2024 - 2025'])[1]").click();

    cy.xpath("(//input[@name='name'])[3]").clear();
    cy.xpath("(//input[@name='name'])[3]").type('3');


    cy.xpath("(//div[@role='combobox'])[5]").click();
    cy.xpath("(//li[normalize-space()='IX'])[1]").click();

    cy.xpath("(//input[@name='name'])[4]").clear();
    cy.xpath("(//input[@name='name'])[4]").type('300');

    cy.xpath("(//input[@name='name'])[5]").clear();
    cy.xpath("(//input[@name='name'])[5]").type('500');

    cy.xpath("(//input[@name='name'])[6]").clear();
    cy.xpath("(//input[@name='name'])[6]").type('1000');

    cy.xpath("(//input[@name='name'])[7]").clear();
    cy.xpath("(//input[@name='name'])[7]").type('5000');

    cy.wait(4000);

    cy.xpath('//input[@name=\'amount\']').type('1');
    cy.xpath("(//input[@name='amount'])[1]").click();

    // Select EDC for 16/09/2025
    cy.wait(5000);
    // Click on the SVG element to open the date picker
    cy.xpath("(//*[name()='svg'][@id='Group_75840'])[1]").click();
    // Click on the button with text '16' to select the 16th day
    cy.xpath("//button[normalize-space()='17']").click();

    // Assuming the month and year are already correct or handled by previous actions
    // If you need to navigate months/years, you'll need additional clicks on navigation arrows.

    //Send for approval
    cy.contains('Send for approval').click();
    cy.contains('Submit').click();

    //Select

  });

})



