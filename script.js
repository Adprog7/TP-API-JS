async function getUsers() {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        const list = document.getElementById("list");

        const search = document.getElementById("search").value.toLowerCase();

        const filtered = data.filter(personne =>
            personne.name.toLowerCase().includes(search)
        );

        

        list.innerHTML = "";

                    if (filtered.length === 0) {
            list.innerHTML = "<li>Aucun utilisateur trouvé</li>";
            return;
        }

        data.filter(personne => personne.name.toLowerCase().includes(search)).forEach(personne => {
            const li = document.createElement("li");
            li.textContent = personne.name+" - "+personne.email+" - "+personne.address.city;
            list.appendChild(li);
        });


        
        console.log(response.status);

    }
