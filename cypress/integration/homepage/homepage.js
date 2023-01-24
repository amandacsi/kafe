
///////////////////////HOME PAGE/////////////////////////////////////
const SELECTORS = {
    title:':nth-child(37) > [data-testid="heading-h2"]',
    text:':nth-child(12) > p',
    container:':nth-child(13) > .bg-white > .grid > [data-nosnippet="true"] > ul > :nth-child(1)',
    link1: 'a[href*="#methodes-de-paiement"]',
    link2: 'a[href*="#gamme-de-jeux"]',
    link3: 'a[href*="#mobile"]',
    Bttn:'.commercialBanner-module--banner-01--j95vA > .flex > [data-testid="button"]',
    loc:'[data-testid="nav-item-0"]'
    
}



/////////////////////////API/////////////////////////////////////
var page
var singleuser
var pagefail 
const new_id = Cypress._.random(0, 100);
const id = new_id;
const email = 'mail@gmail';
const password = 'secret';
const firstName = 'Joca';
const lastName = 'Name';

const NEW_USER = {
    id,
    email,
    firstName,
    lastName,
  };
const ERROR_MESSAGES = {
    MISSING_EMAIL: 'Note: Only defined users succeed registration',
    
  };

const ENDPOINTS = {
    user: 'https://reqres.in/api/users/2',
    users: 'https://reqres.in/api/users?page=1',
    register: 'https://reqres.in/api/register',
    
  };



//////////////////////////////END SETTINGS/////////////////////////////////


export function firstPage() {

    cy.visit('/',
        {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'KFR-Automation'
            }
        })
    
}
export function elementDoesnotexist() {
    cy.contains('welcome')
        .should('not.exist')
       
}



export function scrollPage() {
    cy.get(SELECTORS.title).scrollTo('bottom', { ensureScrollable: false })
        .should('be.visible')
}

export function validateElement(){
    cy.get(SELECTORS.text).should('exist')
    .contains('est tout de même une très belle opportunité qui vous permet de')
    
}

export function validateLinks() {
    cy.get(SELECTORS.container).each((item) => {
        expect(item.text()).to.contain('Bonus')
        cy.get(SELECTORS.link1)
        cy.get(SELECTORS.link2)
        cy.get(SELECTORS.link3).click()
        .should('be.visible')
        cy.contains('service')
        
    })
}

export function basicResult() {
    cy.get(SELECTORS.Bttn).click()
    cy.get('.cf-error-description').should('be.visible')

}
//Second scenario

export function validateLocation() {
    cy.location().should((loc) => {
        expect(loc.hash).to.eq('')
        expect(loc.host).to.eq('casinoscanada.com')
        expect(loc.hostname).to.eq('casinoscanada.com')
        expect(loc.href).to.eq(
            'https://casinoscanada.com/'
        )
        expect(loc.origin).to.eq('https://casinoscanada.com')
        expect(loc.pathname).to.eq('/')
        expect(loc.port).to.eq('')
        expect(loc.protocol).to.eq('https:')
        expect(loc.search).to.eq('')
        
    })

}
export function showLocation(){
    cy.get(SELECTORS.loc).should('be.visible');
    cy.window().then((win) => {
        console.log(win.location)
    })

}
///////////////////////////////APIScenarios///////////////////////////////////////////////////////////////

export function getEndpoint(){
    cy.request(ENDPOINTS.users).as('page')
    
}      
export function getUser(table) {
    cy.get('@page').should((response) => {
        expect(response.status).to.eq(200);
        assert.equal(response.body.page,'1')
        assert.equal(response.body.per_page,'6')
        assert.equal(response.body.total,'12')
        assert.equal(response.body.total_pages,'2')   
            table.hashes().forEach((element) => {
       
            assert.equal(response.body.data[0].email,element.email)
            assert.equal(response.body.data[0].first_name,element.firstname)
            assert.equal(response.body.data[0].last_name, element.lastname)
            assert.equal(response.body.data[0].avatar, element.avatar)
        }) 
    })
}


export function getEndpointfail(){
        cy.request({
        method: 'GET',
        url: 'https://reqres.in/api85',
        failOnStatusCode: false,
      }).should(({ status, body }) => {
        expect(status).to.equal(404)
    
})
    
}
export function getjson() {
            cy.request(ENDPOINTS.user).as('singleuser')
            
}

export function validateJson() {           
    cy.fixture('/users/userdata')
    .then((userdata) => {
            cy.get('@singleuser').should((response) => {
            expect(response.status).to.eq(200)
            assert.equal(response.body.data.first_name,userdata.first_name)
            assert.equal(response.body.data.last_name,userdata.last_name)
            assert.equal(response.body.data.email,userdata.email)
            });
        });
}
   
export function missingEmail(){
        cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
            "username": "Carolina",
            "password": "test"
          },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body).to.have.property(
          'error',
          ERROR_MESSAGES.MISSING_EMAIL
        );
      });
    
    }


export function replaceObject(){
    cy.request('PUT', ENDPOINTS.user, {}).then((res) => {
        expect(res.body).to.not.have.keys([
          'page',
          'per_page',
          'total',
          'total_pages',
          'data',
          'support',
        ]);
      });
}

export function replaceUser(){
    cy.request('PUT', ENDPOINTS.user, NEW_USER).then((res) => {
    expect(res.status).to.eq(200);
    expect(Object.keys(res.body)).to.have.length(5);
    expect(res.body.id).to.eq(NEW_USER.id);
    expect(res.body.email).to.eq(NEW_USER.email);
    expect(res.body.firstName).to.eq(NEW_USER.firstName);
    expect(res.body.lastName).to.eq(NEW_USER.lastName);
    expect(res.body.data).to.not.exist;
    expect(res.body.notExistingKeyPair).to.be.undefined;
  });
}







