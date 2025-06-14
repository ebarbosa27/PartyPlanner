/**
 * @typedef Event
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} date
 * @property {string} location
 */

// HTML setup
const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT_CODE = "/2504-FTB-ET-WEB-PT";
const APP = "/events";
const api = BASE_URL + COHORT_CODE + APP;

// state variables
const events = [];

// render function
function render() {
    const $app = document.querySelector("#app") 
    $app.innerHTML = `
    <header>Party Planner</header>
    <UpcomingList></UpcomingList>
    <SelectedParty></SelectedParty>
    `
    $app.querySelector("UpcomingList").replaceWith("")
    $app.querySelector("SelectedParty").replaceWith("")
}

render()