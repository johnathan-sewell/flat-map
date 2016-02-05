export function fetchProperties(dataSourceId, success, error) {
    const url = `/data/${dataSourceId}.json`;

    fetch(url).then(response => response.json())
        .then(data => success(data))
        .catch(e => error(e.message));
}
