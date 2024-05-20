describe("Authentication Testing", () => {
  it("Sign In", () => {
    cy.request(
      "POST",
      "https://ci-pp5-property-api-d3a66dbd3b1c.herokuapp.com/dj-rest-auth/login/",
      {
        username: "douglas",
        password: "IAMininGLOrN",
      },
    ).then((response) => {
      expect(response.status).equal(200);
    });
  });
});
