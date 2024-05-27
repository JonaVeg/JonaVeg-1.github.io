
  // Configura tu proyecto Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCaGaqkFjt11rjCZ2tscCy3YimzJV_gido",
    authDomain: "jonalogic-c8ecf.firebaseapp.com",
    projectId: "jonalogic-c8ecf",
    storageBucket: "jonalogic-c8ecf.appspot.com",
    messagingSenderId: "67802613164",
    appId: "1:67802613164:web:37579fb27c06b11dde6609"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Maneja el envío del formulario
document.getElementById('testimonyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var testimonial = document.getElementById('testimonial').value;

    db.collection("testimonios").add({
        name: name,
        testimonial: testimonial,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() {
        alert("Testimonio enviado con éxito!");
        document.getElementById('testimonyForm').reset();
        loadTestimonios();  // Vuelve a cargar los testimonios después de enviar uno nuevo
    })
    .catch(function(error) {
        console.error("Error al enviar el testimonio: ", error);
    });
});

// Función para cargar y mostrar los testimonios
function loadTestimonios() {
    console.log("Cargando testimonios...");
    db.collection("testimonios").orderBy("timestamp", "desc").get()
    .then((querySnapshot) => {
        var testimoniosList = document.getElementById('testimoniosList');
        testimoniosList.innerHTML = "";  // Limpiar la lista antes de agregar los testimonios

        if (querySnapshot.empty) {
            console.log("No se encontraron testimonios.");
        } else {
            querySnapshot.forEach((doc) => {
                var testimonial = doc.data();
                console.log("Testimonio encontrado: ", testimonial);

                var div = document.createElement('div');
                div.className = "card mb-3";
                div.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${testimonial.name}</h5>
                        <p class="card-text">${testimonial.testimonial}</p>
                        <p class="card-text"><small class="text-muted">${testimonial.timestamp ? testimonial.timestamp.toDate().toLocaleString() : ''}</small></p>
                    </div>
                `;
                testimoniosList.appendChild(div);
            });
        }
    })
    .catch((error) => {
        console.error("Error al obtener los testimonios: ", error);
    });
}

// Cargar los testimonios cuando la página se carga
window.onload = loadTestimonios;