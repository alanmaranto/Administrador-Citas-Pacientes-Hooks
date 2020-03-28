import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Appointment from "../components/Appointment";

function App() {
  const [listAppointments, setListAppointments] = useState([]);

  // Use Effect when the state changes
  useEffect(() => {
    console.log('something happened with the listAppointments')
  }, [listAppointments])

  // Take actual appointment and add the new one
  const createAppointment = appointment => {
    setListAppointments([...listAppointments, appointment]);
  };

  // Delete appointment by id
  const deleteAppointment = id => {
    const newAppointments = listAppointments.filter(
      appointment => appointment.id !== id
    );
    setListAppointments(newAppointments);
  };

  // Conditional message
  const title =
    listAppointments.length > 0 ? "Administra tus citas" : "No hay citas";

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
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
