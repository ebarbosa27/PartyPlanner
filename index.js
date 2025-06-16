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
let events = [];
let selectedEvent = undefined;

// calls apit to update events list
async function getAllParties() {
  await fetch(api)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("Issue with api call.");
      }

      const resData = (await res.json()).data;
      events = resData;
    })
    .catch((err) => {
      console.error(err);
    });

  render();
}

// component functions
function upcomingPartyComponent() {
  const containerElem = document.createAttribute("ul");
  // add list items under upcoming list
  return containerElem;
}

function selectedPartyComponent() {
  const containerElem = document.createAttribute("div");
  // update selected party to clicked party
  return containerElem;
}

// render function
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Party Planner</h1>
    <div>
        <h2>Upcoming Party</h2>
        <UpcomingList></UpcomingList>
    </div>
    <SelectedParty></SelectedParty>
    `;
  // $app.querySelector("UpcomingList").replaceWith(upcomingPartyComponent());
  // $app.querySelector("SelectedParty").replaceWith(selectedPartyComponent());
}

// Initialize events list and call render function after
async function init() {
  await getAllParties();
  render();
}

init();
