<script>
    import axios from "axios";

    export let params = {};
    let ernaehrungsbedarf_id;
    let mahlzeit_id;

    $: {
        ernaehrungsbedarf_id = params.id;
        getErnaehrungsbedarf();
        getMahlzeiten();
    }

    let ernaehrungsbedarf = {
        _id: "",
        kcal: "",
        kohlenhydrate: "",
        fett: "",    
        protein: "",    
        mahlzeiten: [],
    };

    let mahlzeiten = [];

    function getErnaehrungsbedarf() {
        axios.get("http://localhost:3001/api/ernaehrungsbedarfe/" + ernaehrungsbedarf_id)
            .then((response) => {
                ernaehrungsbedarf = response.data;
            });
    }

    function getMahlzeiten() {
        axios.get("http://localhost:3001/api/mahlzeiten")
            .then((response) => {
                mahlzeiten = response.data;
            });
    }

    function addMahlzeitToErnaehrungsbedarf() {
        ernaehrungsbedarf.mahlzeiten.push(mahlzeit_id);
        axios.put("http://localhost:3001/api/ernaehrungsbedarfe/" + ernaehrungsbedarf_id, ernaehrungsbedarf)
            .then((response) => {
                getErnaehrungsbedarf();
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Ernährungsbedarf (ID: {ernaehrungsbedarf_id})</h1>
    <p>Kcal: {ernaehrungsbedarf.kcal}</p>
    <p>Kohlenhydrate: {ernaehrungsbedarf.kohlenhydrate}</p>
    <p>Mahlzeiten:</p>
    <ul>
        {#each ernaehrungsbedarf.mahlzeiten as mahlzeit}
            <li>{mahlzeit}</li>
        {/each}
    </ul>
    
    <h2>Update Mahlzeiten</h2>
    <label for="mahlzeit">Add Mahlzeit to Ernährungsbedarf</label>
    <select class="form-select" bind:value={mahlzeit_id} id="mahlzeit">
        {#each mahlzeiten as mahlzeit}
            <option value={mahlzeit._id}>{mahlzeit.name}</option>
        {/each}
    </select>
    <button class="btn btn-primary mt-2" on:click={addMahlzeitToErnaehrungsbedarf}>Update</button>
</div>
