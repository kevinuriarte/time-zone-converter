// Function to populate U.S. states and map them to time zones
function populateUSStates() {
    const stateToTimeZone = {
        'Alabama': 'America/Chicago',
        'Alaska': 'America/Anchorage',
        'Arizona': 'America/Phoenix',
        'Arkansas': 'America/Chicago',
        'California': 'America/Los_Angeles',
        'Colorado': 'America/Denver',
        'Connecticut': 'America/New_York',
        'Delaware': 'America/New_York',
        'Florida': 'America/New_York',
        'Georgia': 'America/New_York',
        'Hawaii': 'Pacific/Honolulu',
        'Idaho': 'America/Denver',
        'Illinois': 'America/Chicago',
        'Indiana': 'America/New_York',
        'Iowa': 'America/Chicago',
        'Kansas': 'America/Chicago',
        'Kentucky': 'America/New_York',
        'Louisiana': 'America/Chicago',
        'Maine': 'America/New_York',
        'Maryland': 'America/New_York',
        'Massachusetts': 'America/New_York',
        'Michigan': 'America/New_York',
        'Minnesota': 'America/Chicago',
        'Mississippi': 'America/Chicago',
        'Missouri': 'America/Chicago',
        'Montana': 'America/Denver',
        'Nebraska': 'America/Chicago',
        'Nevada': 'America/Los_Angeles',
        'New Hampshire': 'America/New_York',
        'New Jersey': 'America/New_York',
        'New Mexico': 'America/Denver',
        'New York': 'America/New_York',
        'North Carolina': 'America/New_York',
        'North Dakota': 'America/Chicago',
        'Ohio': 'America/New_York',
        'Oklahoma': 'America/Chicago',
        'Oregon': 'America/Los_Angeles',
        'Pennsylvania': 'America/New_York',
        'Rhode Island': 'America/New_York',
        'South Carolina': 'America/New_York',
        'South Dakota': 'America/Chicago',
        'Tennessee': 'America/Chicago',
        'Texas': 'America/Chicago',
        'Utah': 'America/Denver',
        'Vermont': 'America/New_York',
        'Virginia': 'America/New_York',
        'Washington': 'America/Los_Angeles',
        'West Virginia': 'America/New_York',
        'Wisconsin': 'America/Chicago',
        'Wyoming': 'America/Denver'
    };

    const targetStateSelect = document.getElementById('targetTimeZone');

    for (const state in stateToTimeZone) {
        targetStateSelect.options.add(new Option(state, stateToTimeZone[state]));
    }
}

// Function to convert time
function convertTime() {
    const localTimeZone = 'America/Denver'; // Default time zone for Utah
    const targetTimeZone = document.getElementById('targetTimeZone').value;

    const options = { timeZone: targetTimeZone, timeStyle: 'medium' };
    const convertedTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    const targetStateName = document.getElementById('targetTimeZone').selectedOptions[0].text;
    document.getElementById('result').textContent = `Time in ${targetStateName}: ${convertedTime}`;
}

// Populate U.S. states on load
window.onload = populateUSStates;