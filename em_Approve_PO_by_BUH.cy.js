import 'cypress-file-upload';
import 'cypress-xpath';

describe('Login to Extramarks CRM', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://qa-crm.extramarks.com');
        cy.viewport(1800, 720);

        // Find username and password fields and input credentials
        cy.get('input[name="username"]').type('E1096');
        cy.get('input[name="password"]').type('Crm@123');

        // Click the login button
        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        // 2. Go to "My CRM"
        cy.wait(4000);
        cy.contains('My CRM').click();
        cy.wait(2000);

        // 3. Click on "Sales Approval"
        cy.contains('Sales Approvals').click();
        cy.wait(5000);

        //Select On 'PO-ESC PLUS'
        cy.xpath("(//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-1ax2zlz'])[1]").click();
        cy.xpath("(//li[normalize-space()='PO-ESC PLUS'])[1]").click();
        cy.wait(5000);

        cy.xpath('//tbody/tr[1]/td[1]/span[1]/input[1]').click();
        cy.wait(5000);

        //Click Approve button
        cy.xpath("(//button[normalize-space()='Approve'])[1]").click();

    });

});