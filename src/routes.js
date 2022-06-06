// Pages
import Home from "./pages/Home.svelte";

import Ernaehrungsbedarfe from "./pages/ernaehrungsbedarfe/Ernaehrungsbedarf.svelte"
import ErnaehrungsbedarfDetails from "./pages/ernaehrungsbedarfe/ErnaehrungsbedarfDetails.svelte"
import CreateBedarf from "./pages/ernaehrungsbedarfe/CreateBedarf.svelte"

import Mahlzeiten from "./pages/mahlzeiten/Mahlzeiten.svelte"
import MahlzeitDetails from "./pages/mahlzeiten/MahlzeitDetails.svelte"
import CreateMahlzeit from "./pages/mahlzeiten/CreateMahlzeit.svelte"

import Kalorienrechner from "./pages/kalorienrechner/kalorienrechner.svelte"
import Gewichte from "./pages/gewichte/Gewichte.svelte"
import CreateGewicht from "./pages/gewichte/CreateGewicht.svelte"



export default {
    // Home
    '/': Home,
    '/home': Home,

    // Ernaehrungsbedarfe
    '/ernaehrungsbedarfe': Ernaehrungsbedarfe,
    '/ernaehrungsbedarfe/:id': ErnaehrungsbedarfDetails,
    '/create-bedarf': CreateBedarf,
    
    // Mahlzeiten
    '/mahlzeiten': Mahlzeiten,
    '/mahlzeiten/:id': MahlzeitDetails,
    '/create-mahlzeit': CreateMahlzeit,

    //Kalorienrechner
    '/kalorienrechner': Kalorienrechner,

    //Gewichte
    '/gewichte': Gewichte,
    '/create-gewicht': CreateGewicht,


    
}