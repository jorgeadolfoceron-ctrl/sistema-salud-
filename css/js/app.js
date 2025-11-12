// ------------------- USUARIOS -------------------
const users = [
    { username: "admin", password: "1234" },
    { username: "doctor", password: "abcd" }
];

// ------------------- LOGIN -------------------
if(document.getElementById("loginForm")){
    document.getElementById("loginForm").addEventListener("submit", function(e){
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const user = users.find(u => u.username === username && u.password === password);
        if(user){
            localStorage.setItem("currentUser", username);
            window.location.href = "modules/pacientes.html";
        } else {
            document.getElementById("loginMessage").innerText = "Usuario o contraseña incorrectos";
        }
    });
}

// ------------------- UTILIDADES -------------------
function loadData(key){
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveData(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

// ------------------- PACIENTES -------------------
if(document.getElementById("patientForm")){
    const patientForm = document.getElementById("patientForm");
    const patientList = document.getElementById("patientList");

    function renderPatients(){
        const patients = loadData("patients");
        patientList.innerHTML = "";
        patients.forEach((p, index) => {
            const li = document.createElement("li");
            li.textContent = `${p.name} - Edad: ${p.age} - Diagnóstico: ${p.diagnosis}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", () => deletePatient(index));
            li.appendChild(deleteBtn);
            patientList.appendChild(li);
        });
    }

    function deletePatient(index){
        const patients = loadData("patients");
        patients.splice(index, 1);
        saveData("patients", patients);
        renderPatients();
    }

    patientForm.addEventListener("submit", function(e){
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const diagnosis = document.getElementById("diagnosis").value.trim();
        if(name && age && diagnosis){
            const patients = loadData("patients");
            patients.push({ name, age, diagnosis });
            saveData("patients", patients);
            patientForm.reset();
            renderPatients();
        }
    });

    renderPatients();
}

// ------------------- CITAS -------------------
if(document.getElementById("appointmentForm")){
    const appointmentForm = document.getElementById("appointmentForm");
    const appointmentList = document.getElementById("appointmentList");

    function renderAppointments(){
        const appointments = loadData("appointments");
        appointmentList.innerHTML = "";
        appointments.forEach((a, index) => {
            const li = document.createElement("li");
            const date = new Date(a.date).toLocaleString();
            li.textContent = `${a.patientName} - Fecha: ${date}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", () => deleteAppointment(index));
            li.appendChild(deleteBtn);
            appointmentList.appendChild(li);
        });
    }

    function deleteAppointment(index){
        const appointments = loadData("appointments");
        appointments.splice(index, 1);
        saveData("appointments", appointments);
        renderAppointments();
    }

    appointmentForm.addEventListener("submit", function(e){
        e.preventDefault();
        const patientName = document.getElementById("patientName").value.trim();
        const date = document.getElementById("appointmentDate").value;
        if(patientName && date){
            const appointments = loadData("appointments");
            appointments.push({ patientName, date });
            saveData("appointments", appointments);
            appointmentForm.reset();
            renderAppointments();
        }
    });

    renderAppointments();
}

// ------------------- LOGOUT -------------------
if(document.getElementById("logoutBtn")){
    document.getElementById("logoutBtn").addEventListener("click", function(){
        localStorage.removeItem("currentUser");
        window.location.href = "../index.html";
    });
}

