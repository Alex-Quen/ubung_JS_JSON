class User {
    constructor(name, mail) {
        this.name = name;
        this.mail = mail;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        console.log(user.toString());
    }

    displayUsers() {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        this.users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `Name: ${user.name}, E-Mail: ${user.email}`;
            userList.appendChild(li);
        });
    }
}

const userManager = new UserManager();

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const newUser = new User(name, email);
    userManager.addUser(newUser);
    userManager.displayUsers();
    document.getElementById('userForm').reset();
});
