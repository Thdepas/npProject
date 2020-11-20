# npProject

- Repository: `OOP`
- Type de challenge:  `Consolidation`
- Durée: `4 semaines`
- Deadline: `16/11/20 9 A.M.`
- Déploiement :
- Github page
- Heroku
- Heroku + remote DBA
- self-hosting
- Team challenge :  `solo`

## The Mission

### Full Stack Challenge

Labo BXL

Laboratory for processing and research around film.

Created in February 2006, LABO is a place thought as a space for image creation/production. We work there on film - mainly super 8 and 16mm. Shooting, development, processing, transfer, transformations, tests.

LABO is a toolbox, a place for research and experimentation, thanks to the sharing of knowledge and the exchange of know-how and practices.

In this laboratory is born a cinema of craftsmen, autonomous and out of the commercial logics.

<p align="center">
  <img src="LaboBXL/backend/src/public/images/lab.jpeg" alt="Labo BXL"/>
</p>

### ui/ux prototyping
 
- Figma
- Adobe Color 

<p align="center">
  <img src="LaboBXL/backend/src/public/ref/ref1.png" alt="Labo BXL"/>
</p>

<p align="center">
  <img src="LaboBXL//backend/src/public/ref/figma.png" alt="Labo BXL"/>
</p>

### Frontend 

- Htm5
- Css
- Javascript
- Bootstrap
- EJS

### Backend 

- Node.js 
- MongoDB
- Redis
- Express 

### Api

- Mailchimp
- Web scrapping with Axios 
- socket.io (pending)


### Schema

```ts
interface User {
  _id: ObjectId
  name: string
  email: string
  password: string
  verifiedAt: Date
  createdAt: Date
  updatedAt: Date
}
```
### Features

- [x] login/logout/register + session expiry
- [x] MailChimp newsletter
- [ ] email verification (`"Confirm your email"`)
- [ ] password reset (`"Forgot password"`)

### Versioning

- Git 

### Credits 

- Done by [Thomas Depas](https://github.com/Thdepas) October 2020 - BeCode Web Developer training
