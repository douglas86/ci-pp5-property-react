import { local, server } from "../credentials";

export const login = () =>
  it("should be able to login", () => {
    cy.visit(`${local}`);

    cy.get(".btn")
      .contains("Login")
      .click()
      .then(() => {
        const username = "douglas";
        const password = "IAMininGLOrN";

        cy.get(".modal").should("be.visible");
        cy.get(".modal").within(() => {
          cy.get("input[name='username']").type(username);
          cy.get("input[name='password']").type(password);
          cy.get("button[type='button']")
            .contains("Login")
            .click({ force: true })
            .then(() => {
              cy.request({
                method: "POST",
                url: `${server}/dj-rest-auth/login/`,
                body: {
                  username,
                  password,
                },
                failOnStatusCode: false,
              }).then((response) => {
                expect(response.status).to.equal(200);
              });
            });
        });
      });
  });
