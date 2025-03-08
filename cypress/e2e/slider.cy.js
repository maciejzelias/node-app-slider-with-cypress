describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:4216');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:4216');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper test', function () {
  it('Checks if next and previous navigation works properly', function () {
    cy.visit('http://localhost:4216');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London')
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome')
  });

  it('Checks if each slide has proper description', function () {
    cy.visit('http://localhost:4216');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({force: true});
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'France');
  });

  it('Checks if each slide has proper description', function () {
    cy.visit('http://localhost:4216');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({force: true});
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'France');
  });


  it('Checks if application can handle different formats', function () {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:4216');
    cy.get('div.swiper-slide').should('have.length', 3)
    cy.get('.swiper-button-prev').should('not.be.disabled');
    cy.get('.swiper-button-next').should('not.be.disabled')

    cy.viewport(768, 700);
    cy.get('div.swiper-slide').should('have.length', 3)
    cy.get('.swiper-button-prev').should('not.be.disabled');
    cy.get('.swiper-button-next').should('not.be.disabled')

    cy.viewport(380, 600);
    cy.get('div.swiper-slide').should('have.length', 3)
    cy.get('.swiper-button-prev').should('not.be.disabled');
    cy.get('.swiper-button-next').should('not.be.disabled')
  });
});