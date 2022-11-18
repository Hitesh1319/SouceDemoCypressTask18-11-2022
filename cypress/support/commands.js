import LoginPage from "../PageObject/LoginPage"
import Logout from "../PageObject/Logout";
const loginpage = new LoginPage() 
const logout = new Logout()

Cypress.Commands.add("login", () => {

    const url = "https://www.saucedemo.com/"
    const username = "standard_user"
    const password ="secret_sauce"
    loginpage.navigate(url)
    loginpage.username(username)
    loginpage.password(password)
    loginpage.loginButton()
});

Cypress.Commands.add("logout", ()=>{
    logout.clickingOnMenuExpandButton()
    logout.clickingOnLogout()
})