// GET /api/brands
// positive-tests
// - Test that an array of brands is returned

// negative-tests
// - Test if the call does not return an array we get an error
// - Test if the returned array is not brands we get an error?


// * * * * * * * * * * * * * * * * * * * * *
// GET /api/brands/:brandId/products
// positive-tests
// - Test if a valid id returns an array of products
// - Test that the returned products are related to the given brand (look for brandId in products) 

// negative-tests
// - Test if passing an invalid or missing brandId returns an error
// - Test if the brand is not found returns an error