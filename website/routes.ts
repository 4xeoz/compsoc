
/**
 * Public routes are routes that are accessible to everyone, even if they are not logged in.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/members",
    "/events",
]

/**
 * Auth routes are routes that are only accessible to logged in users.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/signin",
]



/**
 * API routes are routes that are only accessible to logged in users.
 * @type {string}
 */
export const apiAuthRoute = [
    "/api/auth",
]


/**
 * Default login redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/"