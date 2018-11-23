/*
Activity: Contact manager
*/

function Contact (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Contact.prototype.describe = function () {
    return `Last name: ${this.lastname}, first name: ${this.firstname}`
};

//Adding an existing contact
const contact1 = new Contact("Kenneth", "Michael");
const contact2 = new Contact("Frank", "Nelson");

function listMenu() {
    const menu = `
    1 : List contacts
    2 : Add a contact
    0 : Quit
    `;
    console.log(menu);
}

//User Adding Contact
function addContact(firstname, lastname) {
    const newContact = new Contact(firstname, lastname);
    contacts.push(newContact);

    console.log("New Contact Added.");
}

function listContacts(contacts) {
    console.log("Here's the list of all your contacts:");
    contacts.forEach(function (contact) {
        console.log(`${contact.describe()}`);
    });
}

console.log("Welcome to your contacts manager!");

const contacts = [contact1, contact2];
let value = "";
while (value !== "0") {
    listMenu();
    value = prompt("Enter a valid number");

    switch (value) {
        case "0":
            console.log("Have a nice day!");
            break;
        case "1":
            listContacts(contacts)
            break;

        case "2":
            var firstname = prompt("Enter your Firstname : ");
            var lastname = prompt("Enter your last name : ");
            addContact(firstname, lastname);
            break;

        default:
            console.log("Enter a valid number between 0 to 2");
            break;
    }
};