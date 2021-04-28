# Live Demo

<a title="Deployed on heroku" href="http://shopay-app.herokuapp.com/">
<img alt="Deployed on heroku" src="https://img.shields.io/badge/Deployed%20on%20heroku-%239E7CC1?style=plastic&logo=heroku&logoColor=white" width="200px" />
</a>

#### Logins

```
admin@admin.com
123123

jDoe@email.com
123123

dummy@email.com
12345
```

# Back-end

- [Node.js](https://nodejs.org/en/)
- [Axios](https://github.com/axios/axios)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Handler](https://github.com/Abazhenov/express-async-handler#readme)
- [JSONWebToken](https://jwt.io/)
- [Mercado Pago SDK](https://github.com/mercadopago/sdk-nodejs)
- [Multer](https://github.com/expressjs/multer)

## Folder Structure

In the back-end I chose to stick with the classic MVC (Model-View-Controller, without a View) with a few changes to make it more API friendly. Another thing also worth mentioning is that I'm using ES6/ESM imports.

```
├───config
│   └─ Configurations
├───controllers
│   └─ Business logic
├───data
│   └─ Data used by the seeder
├───middleware
│   └─ Middlewares (Auth and error handler)
├───models
│   └─ Database schemas
├───routes
│   └─ API Routes
├───uploads
│   └─ Images uploaded
└───utils
    └─ Utilitary functions
```
