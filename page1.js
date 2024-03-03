document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const resultsDiv = document.getElementById("results");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();


        resultsDiv.innerHTML = "";

        
        const category = document.getElementById("category").value;
        const location = document.getElementById("location").value;

        
        const dummyResults = [
            { name: "James Job", category: "Plumbing", location: "New York", phone: "123-456-7890" },
            { name: "Joseph Kurivila", category: "Electrical", location: "Los Angeles", phone: "234-567-8901" },
            { name: "Anoop Raj", category: "Carpentry", location: "Chicago", phone: "345-678-9012" }
           
        ];

        
        const filteredResults = dummyResults.filter(worker => {
            return (worker.category.toLowerCase() === category.toLowerCase() || category === "All") &&
                   (worker.location.toLowerCase().includes(location.toLowerCase()));
        });

        
        if (filteredResults.length > 0) {
            const ul = document.createElement("ul");
            filteredResults.forEach(worker => {
                const li = document.createElement("li");
                li.textContent = `${worker.name} - ${worker.category} (${worker.location}) - Phone: ${worker.phone}`;
                ul.appendChild(li);
            });
            resultsDiv.appendChild(ul);
        } else {
            resultsDiv.textContent = "No workers found matching the criteria.";
        }
    });
});
