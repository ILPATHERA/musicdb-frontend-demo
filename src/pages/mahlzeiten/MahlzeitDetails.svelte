<script>
    import axios from "axios";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getMahlzeit();
    }

    let mahlzeit = {};

    function getMahlzeit() {
        axios.get("http://localhost:3001/api/mahlzeiten/" + id)
            .then((response) => {
                mahlzeit = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Mahlzeit (ID: {id})</h1>
    <p>Tageszeit: {mahlzeit.tageszeit}</p>
    <p>Name: {mahlzeit.name}</p>
    <p>Kohlenhydrate: {mahlzeit.kohlenhydrate}</p>
    <p>Fett: {mahlzeit.fett}</p>
    <p>Protein: {mahlzeit.protein}</p>
</div>
