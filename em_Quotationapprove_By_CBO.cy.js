import 'cypress-xpath';

describe('Login to Extramarks CRM', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://qa-crm.extramarks.com');
        cy.viewport(1800, 720);

        // Find username and password fields and input credentials
        cy.get('input[name="username"]').type('E028');
        cy.get('input[name="password"]').type('Qacrm@321');

        // Click the login button
        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        // 2. Go to "My CRM"
        cy.wait(4000);
        cy.contains('My CRM').click();

        // 3. Click on "Sales approval"
        cy.contains('Sales Approval').click();
        cy.wait(5000);

        //Select the Quotation type from dropdown
        cy.xpath("(//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-1ax2zlz'])[1]").click();
        cy.xpath("(//li[normalize-space()='Quotation Actual-Test Prep'])[1]").click();
        cy.wait(5000);
        //Select quotation
        cy.xpath('//tbody/tr[1]/td[1]/span[1]/input[1]').click();
        cy.wait(5000);

        //Click Approve button
        cy.xpath("(//button[normalize-space()='Approve'])[1]").click();

        //Enter remarks
        cy.xpath("(//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline css-9fu1l8'])[1]").type('Testing data');
        cy.wait(5000);
        //click Approve
        cy.xpath("(//span[normalize-space()='Approve'])[1]").click();
        cy.wait(5000);
    });

});