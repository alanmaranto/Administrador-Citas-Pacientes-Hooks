import React, { useState } from "react";

const initialState = {
  pet: "",
  owner: "",
  date: "",
  time: "",
  symptom: ""
};

const Form = () => {
  const [appointment, setAppointment] = useState(initialState);

  const onSubmitAppointment = e => {
    e.preventDefault();
    // Validate

    //Assign an id

    // Create the appointment

    // Restart form

  }

  const onChangeAppointment = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  };

  const { pet, owner, date, time, symtom } = appointment

  return (
    <>
      <h2>Crear Cita</h2>
      <form onSubmit={onSubmitAppointment}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={onChangeAppointment}
          value={pet}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={onChangeAppointment}
          value={owner}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={onChangeAppointment}
          value={date}
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={onChangeAppointment}
          value={time}
        />
        <label>Síntomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
          onChange={onChangeAppointment}
          value={symtom}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;
