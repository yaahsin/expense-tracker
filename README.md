# Expense Tracker

  Writing down what you spend and sorting by category.

![home page](https://raw.githubusercontent.com/yaahsin/expense-tracker/main/views/A3_%E8%80%81%E7%88%B8%E7%9A%84%E7%A7%81%E6%88%BF%E9%8C%A2_%E4%B8%BB%E9%A0%81.png)

![enter image description here](https://raw.githubusercontent.com/yaahsin/expense-tracker/main/views/A3_%E8%80%81%E7%88%B8%E7%9A%84%E7%A7%81%E6%88%BF%E9%8C%A2_%E7%99%BB%E5%85%A5%E9%A0%81.png)
## Features

 - [ ] Create own tracker.
 - [ ] Filter records by category.
 - [ ] CRUD operations:  Add, read, edit or delete spending records.
 - [ ] Authentication: user need to register to acquire permission to enter the homepage (register, login, FB register and FB login)
 - [ ] Secure passwords with hash function
  
  

## Installing
1. Open terminal.
2. Cloning the repository

```shell
// HTTPS
git clone https://github.com/yaahsin/Restaurant_page.git
```
3. Move to the folder `cd expense-tracker`
4. Type in `npm install` in terminal to install all required packages.
5. Create FB login App at https://developers.facebook.com/
6. Please see .env.example  to create your own environment variable.
7. Command `npm run dev` to start the server 
8. Command `npm run seed` to run seeder 
9. If `server is running on port 3000`, visit http://localhost:3000.

**Built With**

- Node.js v16.14.2
- express v4.16.4
- express-handlebars v3.0.0
- handlebars-helpers v0.10.0
- express-session v1.17.1
- bcryptjs v2.4.3
- connect-flash v0.1.1
- method-override v3.0.0
- dotenv v8.2.0
- passport v0.4.1
- passport-facebook v3.0.0
- passport-local: v1.0.0
- mongoose v5.9.7
- MongoDB database
- Bootstrap v5.1.3
- font-awesome
