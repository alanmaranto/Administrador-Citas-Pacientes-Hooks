import React from "react";

const Form = () => {
  return (
    <>
      <h2>Crear Cita</h2>
      <form>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre mascota"
        />
        <label htmlFor="">Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
        />
        <label htmlFor="">Fecha</label>
        <input type="date" name="date" className="u-full-width" />
        <label htmlFor="">Hora</label>
        <input type="time" name="time" className="u-full-width" />
        <label htmlFor="">Síntomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
        />
        <button 
            type="submit"
            className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </>
  );
};

export default Form;
