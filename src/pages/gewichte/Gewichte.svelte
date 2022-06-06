<script>
    import axios from "axios";

    let gewichte = [];

    function getGewichte() {
        console.log(gewichte)
        axios.get("http://localhost:3001/api/gewichte").then((response) => {
            gewichte = response.data;
        });
        console.log(gewichte)
    }
    getGewichte();
</script>

<div class="mb-5">
    <h1 class="mt-3">Liste der Gewichte</h1>
    <a href="#/create-gewicht">+ Gewicht hinzufügen</a>
    <table class="table">
        <thead>
            <tr>
                <th>Datum</th>
                <th>kg</th>
           </tr>
        </thead>
        <tbody>
            {#each gewichte as gewicht}
                <tr>
                    <td>
                        {gewicht.datum}
                    </td>
                    <td>
                        {gewicht.kg}
                    </td>
                   
                </tr>
            {/each}
        </tbody>
    </table>
</div>
