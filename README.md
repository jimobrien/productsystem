
## User Stories ##
- [X] I want to view a list of products.
- [X] I want to view a single product.
- [X] I want to comment on a product.
- [X] I want to view other comments when I view a product.
- [X] I want to create a product with a name, description, and price (assume USD).
- [X] Communicate with HTTP to a backend. (Note: can be mocked for this exercise - use ngMockE2E and $httpBackend)
- [X] Structure your code sanely. Use directives, services, controllers, etc. where appropriate.

Bonus
- [X] Build the backend using node.js - if you use loopback.io or another set of CRUD generators, it should be a breeze.
- [X] Persist the product/comment data to an actual database. (You could just store the data in memory for this exercise)
  - used angular-fullstack instead.

## Architecture Decisions ##
- I went with yeoman and [angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) to scaffold out as much as possible. Given the time constraint, it made sense to avoid writing as much boilerplate as possible. I'm not a huge fan of the project structure that the angular-fullstack generator enforces ([this is better imo](https://github.com/johnpapa/angularjs-styleguide)) but it was a compromise I made for agility.


## Running the project ##
- Clone the repo locally
- `npm install`
- `bower install`
- Start mongo (`mongod`)
- `grunt serve` (might need `--force` as I did)
