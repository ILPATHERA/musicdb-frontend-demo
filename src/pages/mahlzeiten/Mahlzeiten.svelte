<script>
    import axios from "axios";

    let mahlzeiten = [];

    function getMahlzeiten() {
        console.log(mahlzeiten)
        axios.get("http://localhost:3001/api/mahlzeiten").then((response) => {
            mahlzeiten = response.data;
        });
        console.log(mahlzeiten)
    }
    getMahlzeiten();
</script>

<div class="mb-5">
    <h1 class="mt-3">Liste der Mahlzeiten</h1>
    <a href="#/create-mahlzeit">+ Mahlzeit hinzufügen</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tagszeit</th>
                <th>Name</th>
                <th>Kohlenhydrate</th>
                <th>Fett</th>
                <th>Protein</th>
            </tr>
        </thead>
        <tbody>
            {#each mahlzeiten as mahlzeit}
                <tr>
                    <td>
                        <a href={"#/mahlzeiten/" + mahlzeit._id}>
                            {mahlzeit._id}
                        </a>
                    </td>
                    <td>
                        {mahlzeit.tageszeit}
                    </td>
                    <td>
                        {mahlzeit.name}
                    </td>
                    <td>
                        {mahlzeit.kohlenhydrate}
                    </td>
                    <td>
                        {mahlzeit.fett}
                    </td>
                    <td>
                        {mahlzeit.protein}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
