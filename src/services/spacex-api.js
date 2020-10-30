function getLaunchData() {
    return fetch('https://api.spacexdata.com/v3/launches?limit=12&sort=launch_date_local&order=desc')
    .then(response => response.json());
}

export { getLaunchData };