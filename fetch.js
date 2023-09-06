document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const formularioCampos = {};
    formData.forEach((value, key) => {
        formularioCampos[key] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(formularioCampos),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`La solicitud tuvo error ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(`Solicitud POST exitosa!`, data);
        alert(`Solicitud POST exitosa!` + JSON.stringify(data));
    })
    .catch((error) => {
        console.error(`Hubo un error`, error);
    });
});