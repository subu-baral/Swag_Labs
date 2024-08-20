describe ('Login page', ()=>{
    it.skip('login page should be visible', ()=>{

        // visit the swag lab page
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.contains('Swag Labs');

        // placeholders should be visible and clickable
        cy.get('input[name="user-name"]').should('have.attr', 'placeholder', 'Username').click();
        cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Password').click();
        cy.get('input[name="login-button"]').should('have.value', 'Login').click();
     })

       //invalid login with incorrect username
    it.skip ('Invalid login with incorrect username',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("Tester");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
    })

        // Invalid login with incorrect username and password
    it.skip ('Invalid username and paswword',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("Tester");
        cy.get('#password').clear().type("TESTEETR");
        cy.get('#login-button').click();
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
    })

        // Login with locked_out_user
    it.skip ('Login with locked_out_user',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("locked_out_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
   })

         // Login with problem_user
    it.skip ('Login with locked_out_user',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("problem_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
    })

        // Login with performance_glitch_user
    it.skip ('Login with locked_out_user',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("performance_glitch_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
})   

        // Login with error_user
    it.skip ('Login with locked_out_user',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("error_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
    })

        // Login with error_user
    it.skip ('Login with locked_out_user',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("visual_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
    })
        // Valid login with standard user
    it('Valid login with standard user with valid password',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.get('#user-name').clear().type("standard_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();
        cy.url().should('include','/inventory.html');

        // Logout
        cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').should('be.visible');
        cy.get('#logout_sidebar_link').should('have.text','Logout').should('have.attr', 'href', '#').click();
        cy.url().should('include','saucedemo.com'); 
    })
})