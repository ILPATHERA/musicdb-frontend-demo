<script>
    import axios from "axios";
    
    let ernaehrungsbedarf = {
        username: "",
        kcal: "",
        kohlenhydrate: "",
        fett: "",
        protein: "",
    };

    var username = "";
    var age = 0;
    var weight;
    var height;
    var kcal;

    var geschlecht = "";
    var options = ["männlich", "weiblich"];

    var grundumsatz = 0;
    var protein;
    var fett;
    var kohlenhydrate;
    var kcalProtein;
    var kcalFett;
    var pal = 1.2;

    function addBedarf() {
        ernaehrungsbedarf.kcal = kcal;
        ernaehrungsbedarf.kohlenhydrate = kohlenhydrate;
        ernaehrungsbedarf.fett = fett;
        ernaehrungsbedarf.protein = protein;
        
        axios
            .post(
                "http://localhost:3001/api/ernaehrungsbedarfe",
                ernaehrungsbedarf
            )
            .then((response) => {
                alert("Bedarf hinzugefügt");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    function getGrundumsatz(weight, height, age, pal) {
        
        if (geschlecht === "weiblich") {
            grundumsatz = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;

            //Kalorien inklusive Aktivität
            grundumsatz *= pal;

            //Protein,Fett und Kohlenhydrate pro Tag berechnen
            getMakros(grundumsatz, weight);
        } else {
            grundumsatz = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;

            //Kalorien inklusive Aktivität
            grundumsatz *= pal;

            //Protein,Fett und Kohlenhydrate pro Tag berechnen
            getMakros(grundumsatz, weight);
        }
        return grundumsatz;
    }

    function getMakros(grundumsatz, weight) {
        //2.5g Protein pro kg Körpergewicht hat 4.1 kcal
        protein = weight * 2.5;
        kcalProtein = protein * 4.1;
        grundumsatz -= kcalProtein;

        //0.5g Fett pro kg Körpergewicht hat 9 kcal
        fett = weight * 0.5;
        kcalFett = fett * 4.1;
        grundumsatz -= kcalFett;

        //restliche kcal auf Kohlenhydrate verteilen (1g Kohlenhydrate haben 4.1kcal)
        kohlenhydrate = grundumsatz / 4.1;
    }

    function greetUser(username) {
        let user;
        if (username === "") {
            user = "";
        } else {
            user = username + "s";
        }
        return user;
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Bedarf hinzufügen</h1>

    <div class="mb-5">
        <h1 class="mt-3">Kalorienrechner</h1>

        <form>
            <div class="mb-3 ">
                <label for="name" class="form-label">Name</label>
                <input
                    type="name"
                    class="form-control"
                    id="username"
                    bind:value={username}
                />
                <br />

                <div class="mb-3">
                    <label for="name" class="form-label">Geschlecht</label>
                    <select class="form-select" bind:value={geschlecht}>
                        {#each options as value}<option {value}>{value}</option
                            >{/each}
                    </select>
                </div>
                <div class="mb-3">
                    <label for="age" class="form-label">Alter</label>
                    <input
                        type="number"
                        class="form-control"
                        id="userAge"
                        min="16"
                        max="100"
                        aria-describedby="ageHelp"
                        bind:value={age}
                    />
                    <div id="emailHelp" class="form-text">
                        Bitte gib dein Alter in Jahren an
                    </div>
                </div>

                <div class="mb-3">
                    <label for="weight" class="form-label">Gewicht</label>
                    <input
                        type="number"
                        class="form-control"
                        id="userWeight"
                        aria-describedby="weightHelp"
                        bind:value={weight}
                    />
                    <div id="weightHelp" class="form-text">
                        Bitte gib dein Gewicht in kg an
                    </div>
                </div>

                <div class="mb-3">
                    <label for="height" class="form-label">Grösse</label>
                    <input
                        type="number"
                        class="form-control"
                        id="userHeight"
                        aria-describedby="heightHelp"
                        bind:value={height}
                    />
                    <div id="heightHelp" class="form-text">
                        Bitte gib deine Grösse in cm an
                    </div>
                </div>

                <p>
                    Nun ermitteln wir deinen PAL-Wert. Dieser Wert beschreibt
                    wie aktiv du in deinem Alltag bist. Wähle aus der Liste aus
                    was am besten zu dir passt.
                </p>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">PAL-Wert</th>
                            <th scope="col">Aktivitätsniveau</th>
                            <th scope="col">Beispiel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1.2 - 1.5</th>
                            <td
                                >ausschließlich sitzende Tätigkeit mit wenig
                                oder keiner anstrengenden Freizeitaktivität</td
                            >
                            <td>Büroangestellte</td>
                        </tr>
                        <tr>
                            <th scope="row">1.6 - 1.7</th>
                            <td
                                >sitzende Tätigkeit, zeitweilig auch
                                zusätzlicher Energieaufwand für gehende oder
                                stehende Tätigkeit</td
                            >
                            <td>Laboranten, Kraftfahrer, Fließbandarbeiter</td>
                        </tr>
                        <tr>
                            <th scope="row">1.8 - 1.9</th>
                            <td>überwiegend gehende und stehende Arbeit</td>
                            <td
                                >Hausfrauen, Pflegepersonal, Kellner,
                                Mechaniker, Handwerker</td
                            >
                        </tr>
                        <tr>
                            <th scope="row">2.0 - 2.4</th>
                            <td>körperlich anstrengende berufliche Arbeit</td>
                            <td
                                >Bauarbeiter, Landwirte, Waldarbeiter,
                                Leistungssportler, Bergarbeiter</td
                            >
                        </tr>
                    </tbody>
                </table>

                <div class="mb-3">
                    <label for="pal" class="form-label">PAL- Wert</label>
                    <input
                        type="number"
                        class="form-control"
                        id="userPAL"
                        min="1.2"
                        max="2.4"
                        step="0.1"
                        aria-describedby="palHelp"
                        bind:value={pal}
                    />
                    <div id="palHelp" class="form-text">
                        Bitte gib einen Wert zwischen 1.2 und 2.4 an
                    </div>
                </div>
                <br />

                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#yourOverview"
                    on:click={getGrundumsatz(weight, height, age, pal)}
                >
                    Deine Übersicht
                </button>

                <div
                    class="modal fade"
                    id="yourOverview"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    Deine Übersicht
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div class="modal-body">
                                <div class="mb-5">
                                    <h1 class="mt-3">
                                        {greetUser(username)} Übersicht
                                    </h1>
                                    <br />

                                    <p>
                                        <strong
                                            >Dein Kalorien Grundumsatz : {Math.round(
                                                grundumsatz
                                            )} kcal</strong
                                        >
                                    </p>

                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <br />
                                                <h3>Proteine</h3>
                                                <br />
                                                <p>
                                                    Wert: {Math.round(protein)} Gramm
                                                </p>
                                                <br />

                                                <h3>Beispiele</h3>
                                                <ul>
                                                    <li>Magerquark</li>
                                                    <li>Feta</li>
                                                    <li>Mozzarella</li>
                                                    <li>körniger Frischkäse</li>
                                                    <li>
                                                        Käse (max. 40% Fett in
                                                        Tr. Masse)
                                                    </li>
                                                    <li>Milch</li>
                                                    <li>Skyr</li>
                                                    <li>Naturjoghurt</li>
                                                    <li>Eier</li>
                                                    <li>Eiweißbrot</li>
                                                    <li>Pouletbrustfilet</li>
                                                    <li>Rindfleisch</li>
                                                    <li>Lamm</li>
                                                    <li>Seitan</li>
                                                    <li>Tofu</li>
                                                    <li>Tempeh</li>
                                                    <li>Magerer Aufschnitt</li>
                                                </ul>
                                            </div>
                                            <div class="col order-5">
                                                <br />
                                                <h3>Kohlenhydrate</h3>
                                                <br />
                                                <p>
                                                    Wert: {Math.round(
                                                        kohlenhydrate
                                                    )} Gramm
                                                </p>
                                                <br />
                                                <h3>Beispiele</h3>
                                                <ul>
                                                    <li>Amaranth</li>
                                                    <li>Dinkelflocken</li>
                                                    <li>Haferflocken</li>
                                                    <li>Quinoa</li>
                                                    <li>Linsen</li>
                                                    <li>Reis</li>
                                                    <li>Kartoffeln</li>
                                                    <li>Getreide zum Kochen</li>
                                                    <li>Vollkornbrot</li>
                                                    <li>Bulgur</li>
                                                    <li>Couscous</li>
                                                    <li>Hirse</li>
                                                    <li>Süßkartoffeln</li>
                                                    <li>Vollkornnudeln</li>
                                                </ul>
                                            </div>
                                            <div class="col order-1">
                                                <br />
                                                <h3>Fett</h3>
                                                <br />
                                                <p>
                                                    Wert: {Math.round(fett)} Gramm
                                                </p>
                                                <br />
                                                <h3>Beispiele</h3>
                                                <ul>
                                                    <li>Butter</li>
                                                    <li>Leinsamen</li>
                                                    <li>Chiasamen</li>
                                                    <li>Hanfsamen</li>
                                                    <li>Sonnenblumenkerne</li>
                                                    <li>Nüsse</li>
                                                    <li>Avocado</li>
                                                    <li>Thunfisch</li>
                                                    <li>
                                                        Fettfisch (Lachs,
                                                        Hering, Makrele)
                                                    </li>
                                                    <li>Bulgur</li>
                                                    <li>Couscous</li>
                                                    <li>Hirse</li>
                                                    <li>Süßkartoffeln</li>
                                                    <li>Vollkornnudeln</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button
                                >
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    on:click={addBedarf()}>Insert</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
