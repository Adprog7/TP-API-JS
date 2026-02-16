async function getUsers() {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        const list = document.getElementById("list");

        const search = document.getElementById("search").value.toLowerCase();

        list.innerHTML = "";


        const filtered = data.filter(personne =>
            personne.name.toLowerCase().includes(search)
        );


        if (filtered.length === 0) {
            list.innerHTML = "<li>Aucun utilisateur trouvé</li>";
            return;
        }

        const formatted = filtered.map(personne =>
            `${personne.name} - ${personne.email} - ${personne.address.city}`
        );


        formatted.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            list.appendChild(li);
        });
        
        console.log(response.status);

    }

    document.addEventListener("DOMContentLoaded", getUsers);
    document.getElementById("search").addEventListener("input", getUsers);
