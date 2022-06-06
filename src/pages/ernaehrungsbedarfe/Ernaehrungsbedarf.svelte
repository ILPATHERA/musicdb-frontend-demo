<script>
    import axios from "axios";

    let ernaehrungsbedarfe = [];

    function getErnaehrungsbedarf() {
        axios.get("http://localhost:3001/api/ernaehrungsbedarfe").then((response) => {
            ernaehrungsbedarfe = response.data;
        });
    }
    getErnaehrungsbedarf();
</script>

<div class="mb-5">
    <h1 class="mt-3">Alle Ernährungsbedarfe</h1>
    <a href="#/create-bedarf">+ Mahlzeit hinzufügen</a>
    <table class="table">
        <thead>
            <tr>
                <th>generierte Personen ID</th>
                <th>Kcal</th>
                <th>Kohlenhydrate</th>
                <th>Fett</th>
                <th>Protein</th>
            </tr>
        </thead>
        <tbody>
            {#each ernaehrungsbedarfe as ernaehrungsbedarf}
                <tr>
                    <td>
                        <a href={"#/ernaehrungsbedarfe/" + ernaehrungsbedarf._id}>
                            {ernaehrungsbedarf._id}
                        </a>
                    </td>
                    <td>
                        {ernaehrungsbedarf.kcal}
                    </td>
                    <td>
                        {ernaehrungsbedarf.kohlenhydrate}
                    </td>
                    <td>
                        {ernaehrungsbedarf.fett}
                    </td>
                    <td>
                        {ernaehrungsbedarf.protein}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
