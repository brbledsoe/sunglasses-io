// POST /api/login
// positive-tests
// - Test that a valid username and password successfuly logs a user in on the back end
// - Test that a valid username and password successfully logs a user in on the front end?

// negative-tests
// - Test that if a username or password is invalid we recieve an error
// - Test that if no username or password is given we recieve an error


// * * * * * * * * * * * * * * * * * * * * *
// GET /api/me/cart
// positive-tests
// - Test that the returned cart is an array of products
// - Test that the cart belongs to the session user

// negative-tests
// - Test that an error is returned if a user is not signed in
// - Test if the user is no longer signed in an error is returned



// * * * * * * * * * * * * * * * * * * * * *
// POST /api/me/cart
// positive-tests
// - Test that the product get's added to the user's cart successfully
// - Test that the cart get's returned 

// negative-tests
// - Test if the body is empty, an error is returned
// - Test if the user is no longer signed in an error is returned



// * * * * * * * * * * * * * * * * * * * * *
// DELETE /api/me/cart/:productId
// positive-tests
// - Test that given a valid productId the product is successfully deleted from the user's cart

// negative-tests
// - Test if passing an invalid or missing productId returns an error
// - If the product is not found in the user's cart an error is returned
// - Test if the user is no longer signed in an error is returned



// * * * * * * * * * * * * * * * * * * * * *
// POST /api/me/cart/:productId
// positive-tests
// - Test that given a valid productId the product is successfully added to the user's cart

// negative-tests
// - Test if passing an invalid or missing productId returns an error
// - Test if the user is no longer signed in an error is returned

