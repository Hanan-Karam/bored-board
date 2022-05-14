const button = document.querySelector('.btn');
const activityContainer = document.querySelector('.activity-container')

function getNewActivity(){
    
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            activityContainer.innerHTML = `
            <h1 class = "activity"> ${data.activity} </h1>
            `
        document.querySelector('.title').textContent ="🐥 Have A Happy Day 🐥";
        document.querySelector('#container').style.backgroundColor = "#E9D5DA"
        });
}

button.addEventListener('click', getNewActivity);