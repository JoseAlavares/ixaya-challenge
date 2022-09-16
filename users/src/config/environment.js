const config = {
    environment: {
        jwtPassword: process.env.JWT_PASSWORD
    },
    microservicesNameSpaces: {
        users: {
            name: 'response_users',
            key: 'users',
            types: {
                getUsers: 'get-users',
                createUser: 'create-user',
                loginUser: 'login-user'
            }
        },
    }
}

module.exports = { config }