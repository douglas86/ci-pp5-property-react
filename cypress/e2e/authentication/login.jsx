import { local, heroku } from "../credentials";

export const login = () =>
  it("should be able to login", () => {
    cy.visit(`${local}`);

    const username = "ju";
    const password = "IAMininGLOrN";

    cy.get(".btn")
      .contains("Login")
      .click()
      .then(() => {
        cy.get(".modal").should("be.visible");
        cy.get(".modal").within(() => {
          cy.get("input[name='username']").type(username);
          cy.get("input[name='password']").type(password);

          cy.get("button[type='button']")
            .contains("Login")
            .click({ force: true })
            .then(() => {
              cy.request("POST", `${heroku}/dj-rest-auth/login/`, {
                username,
                password,
              });
              // cy.request({
              //   method: "POST",
              //   url: `${heroku}dj-rest-auth/login/`,
              //   body: { username, password },
              //   failOnStatusCode: false,
              // }).then((resp) => {
              //   console.log("resp", resp);
              //   // const user = resp.body.user.username;
              //   // expect(user).to.equal(username);
              // });
            });
        });
      });
  });
