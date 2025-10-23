import 'cypress-xpath';
import 'cypress-file-upload';

describe('Login to Extramarks CRM', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://qa-crm.extramarks.com');
        cy.viewport(1800, 720);

        // Find username and password fields and input credentials
        cy.get('input[name="username"]').type('E28726');
        cy.get('input[name="password"]').type('Crm@123');

        // Click the login button
        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        // 2. Go to "My CRM"
        cy.wait(4000);
        cy.contains('My CRM').click();

        // 3. Click on "Quotation List"
        cy.contains('Quotation List').click();
        cy.wait(5000);

        //Choose Quotation For PO
        cy.xpath("(//a[normalize-space()='QTSW0925RJ35513-UA56898'])[1]").click();
        cy.scrollTo('bottom');

        //Click PO
        cy.xpath("(//button[normalize-space()='Agreement/Upload PO'])[1]").click();

        //Click Browse to select file
        cy.xpath("(//label[normalize-space()='Browse'])[1]").click();
        cy.wait(15000);

        //Click Submit Button
        cy.xpath("(//button[normalize-space()='Save'])[1]").click();

        cy.xpath("(//button[normalize-space()='No'])[1]").click();

        //Select Agreement start date
        cy.xpath("(//div[@aria-label='Choose Thursday, September 18th, 2025'])[1]").click();

        //select payment terms
        cy.xpath("input[value='Monthly']").click();




    });

});