<script>
    import axios from "axios";

    let gewicht = {
        datum: "",
        kg: "",
        };

    function addGewicht() {
        axios.post("http://localhost:3001/api/gewichte", gewicht)
            .then((response) => {
                alert("Gewicht hinzugefügt");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Gewicht hinzufügen</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Datum</label>
            <input class="form-control" type="date" bind:value={gewicht.datum} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Kilogramm(kg)</label>
            <input class="form-control" type="number" bind:value={gewicht.kg} />
        </div>
        
        <button on:click={addGewicht} type="button" class="btn btn-primary">
            Gewicht hinzufügen
        </button>
    </form>
</div>
