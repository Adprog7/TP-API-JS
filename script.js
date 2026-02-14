    async function getUsers() {

            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            const data = await response.json();

            const list = document.getElementById("list");

            const search = document.getElementById("search").value.toLowerCase();

            list.innerHTML = "";

            data.filter(personne => personne.name.toLowerCase().includes(search)).forEach(personne => {
                const li = document.createElement("li");
                li.textContent = personne.name+" - "+personne.email+" - "+personne.phone;
                list.appendChild(li);
            });
            
            console.log(response.status);

        }
