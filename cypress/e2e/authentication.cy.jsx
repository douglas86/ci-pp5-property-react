import { login, refreshTokenFail, refreshTokenPass } from "./authentication";
import { local, reactHeroku, heroku, server } from "./credentials";

describe("Check if sites are active", () => {
  // refreshTokenFail();
  // login();
  // refreshTokenPass();
  it("Visits live site on heroku", async () => {
    cy.visit(`${reactHeroku}`);
  });

  it("Visits local site", async () => {
    cy.visit(`${local}`);
  });
});

describe("Login and Logout user", () => {
  it("Pass refresh token if user is logged in", async () => {
    cy.visit(`${local}`);

    const username = "test";
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
              cy.request("POST", `${heroku}dj-rest-auth/login/`, {
                username,
                password,
              }).then((response) => {
                expect(response.status).to.equal(200);
              });
            });
        });
      })
      .get(".btn")
      .contains("Logout");
  });
});
