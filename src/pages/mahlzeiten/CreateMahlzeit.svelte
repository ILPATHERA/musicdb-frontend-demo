<script>
    import axios from "axios";

    let tageszeiten = [
        "Frühstück",
        "Mittag",
        "Abendessen",
        "Snack",

    ]

    let mahlzeit = {
        tageszeit: "",
        name: "",
        kohlenhydrate: "",
        fett: "",
        protein: "",
    };

    function addMahlzeit() {
        axios.post("http://localhost:3001/api/mahlzeiten", mahlzeit)
            .then((response) => {
                alert("Mahlzeit hinzugefügt");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Mahlzeit hinzufügen</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Tageszeit</label>
            <select class="form-select" bind:value={mahlzeit.tageszeit}>
                {#each tageszeiten as value}<option {value}>{value}</option>{/each}
              </select>

        </div>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={mahlzeit.name} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Kohlenhydrate</label>
            <input class="form-control" type="number" bind:value={mahlzeit.kohlenhydrate} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Fett</label>
            <input class="form-control" type="number" bind:value={mahlzeit.fett} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Protein</label>
            <input class="form-control" type="number" bind:value={mahlzeit.protein} />
        </div>
        <button on:click={addMahlzeit} type="button" class="btn btn-primary">
            Mahlzeit hinzufügen
        </button>
    </form>
</div>
