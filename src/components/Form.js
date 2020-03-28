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

  const onChangeAppointment = () => console.log("Escribiendo");

  return (
    <>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={onChangeAppointment}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={onChangeAppointment}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={onChangeAppointment}
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={onChangeAppointment}
        />
        <label>Síntomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
          onChange={onChangeAppointment}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;
