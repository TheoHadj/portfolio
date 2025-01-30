import React from "react";

interface FormCalendarProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function FormCalendar({ onSubmit }:FormCalendarProps) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Ajouter un Évènement</h2>

      <label>Nom de l'évènement :</label>
      <input type="text" name="eventName" required />

      <label>Horaire :</label>
      <input type="time" name="eventTime" required />

      <label>Lieu :</label>
      <input type="text" name="eventLocation" required />

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default FormCalendar;
