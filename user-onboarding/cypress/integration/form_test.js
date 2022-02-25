describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');

    it("sanity check to make sure that tests work", () => {
        expect(1 + 2).to.equal(3);
    })

    describe("Filling out inputs and submitting", () => {
        it("can navigate to this site", () => {
            cy.url().should("include", "localhost");
        })

        it("can type in the inputs", () => {
            nameInput()
                .should("have.value", "")
                .type("Jack Nunnink")
                .should("have.value", "Jack Nunnink");
            
            emailInput()
                .should("have.value", "")
                .type("asdf@asdf.com")
                .should("have.value", "asdf@asdf.com");
            
            passwordInput()
                .should("have.value", "")
                .type("asdf")
                .should("have.value", "asdf");
        })

        it("The tos can be checked and unchecked", () => {
            cy.get('[type="checkbox"]').check();
        })

        it("the submit button enables when both inputs are filled out", () => {
            cy.get('form').submit()
        })

        it("Everything resets after submitting", () => {
            nameInput()
                .should("have.value", "")
            
            emailInput()
                .should("have.value", "")
            
            passwordInput()
                .should("have.value", "")
            
            cy.get('[type="checkbox"]').should("not.be.checked");
        })
    })
})