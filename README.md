
## User Stories ##
- [X] I want to view a list of products.
- [X] I want to view a single product.
- [X] I want to comment on a product.
- [X] I want to view other comments when I view a product.
- [X] I want to create a product with a name, description, and price (assume USD).
- [X] Communicate with HTTP to a backend. (Note: can be mocked for this exercise - use ngMockE2E and $httpBackend)
- [X] Structure your code sanely. Use directives, services, controllers, etc. where appropriate.

## Architecture Decisions ##
- I went with yeoman and [angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) to scaffold out as much as possible. Given the time constraint, it made sense to avoid writing as much boilerplate as possible. I'm not a huge fan of the project structure that the angular-fullstack generator enforces ([this is better imo](https://github.com/johnpapa/angularjs-styleguide)) but it was a compromise I made for agility.


## Running the project ##
- Clone the repo locally
- `npm install`
- `grunt serve` (might need `--force` as I did)
