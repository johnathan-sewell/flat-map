export function fetchProperties(dataSourceId, success, error) {
    fetch(`/data/${dataSourceId}.json`)
        .then(function(response) {
            success(response.json());
            //TODO check status and call err() here too
        }).catch(function(err) {
            error(err.message); // request failed (does not catch 500 or 404)
        });
}
