import React, { useState } from "react";
import Form from "../components/Form";
import Appointment from "../components/Appointment";

function App() {
  const [listAppointments, setListAppointments] = useState([]);

  // Take actual appointment and add the new one
  const createAppointment = appointment => {
    setListAppointments([...listAppointments, appointment]);
  };

  // Delete appointment by id
  const deleteAppointment = id => {
    const newAppointments = listAppointments.filter(appointment => appointment.id !== id)
    setListAppointments(newAppointments)
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {listAppointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
