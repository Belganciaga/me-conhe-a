var passwordData = [];

function generate() {
    var nameParts = document.getElementById('name').value.split(' '); // Divide o nome em partes
    var birthdate = document.getElementById('birthdate').value;
    var day = birthdate.slice(0, 2);

    var usernames = [];
    for (var i = 0; i < 6; i++) {
        // Embaralha as partes do nome
        for (let i = nameParts.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [nameParts[i], nameParts[j]] = [nameParts[j], nameParts[i]];
        }

        // Combina as partes do nome embaralhadas e o dia de nascimento para criar o nome de usuário
        var username = nameParts.join('') + day;
        usernames.push(username);
    }

    // ... Restante do código ...
}
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    var generateOption = document.getElementById('generateOptions').value;
    var infoList = document.getElementById('infoList');
    infoList.innerHTML = '';
    if (generateOption === 'both' || generateOption === 'username') {
        var usernameItem = document.createElement('li');
        usernameItem.innerText = "Nome de usuário: " + username;
        infoList.appendChild(usernameItem);
        passwordData.push({site: site, username: username});
    }
    if (generateOption === 'both' || generateOption === 'password') {
        var passwordItem = document.createElement('li');
        passwordItem.innerText = "Senha: " + result;
        infoList.appendChild(passwordItem);
        passwordData.push({site: site, password: result});
    }

    var site = prompt("Onde você planeja usar essa senha?");
}

function viewPasswords() {
    var list = document.getElementById('passwordList');
    list.innerHTML = '';
    for (var i = 0; i < passwordData.length; i++) {
        var item = document.createElement('li');
        item.innerText = passwordData[i].site + ": " + passwordData[i].username + ", " + passwordData[i].password;
        list.appendChild(item);
    }
}

