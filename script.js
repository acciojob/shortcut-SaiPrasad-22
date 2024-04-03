cy.on("window:alert", str => {
  expect(str.toLowerCase()).to.equal("ai");
});