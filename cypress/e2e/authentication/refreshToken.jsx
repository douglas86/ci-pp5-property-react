import { local, server } from "../credentials";

export const refreshTokenFail = () =>
  it("refresh token fails when not logged in", async () => {
    cy.visit(`${local}`);

    cy.request({
      method: "POST",
      url: `${server}/dj-rest-auth/token/refresh/`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });

export const refreshTokenPass = () => {
  it("refresh token passes when you are logged in", async () => {
    cy.visit(`${local}`);

    cy.request({
      method: "POST",
      url: `${server}/dj-rest-auth/token/refresh/`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
};
