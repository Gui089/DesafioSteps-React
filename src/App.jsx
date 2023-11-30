import { useState } from "react";

const weekDays = [
  "Domingo",
  "Segunda-feria",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const arrMonths = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const App = () => {
  const [dateNow, setDateNow] = useState(new Date());

  const [interval, setInterval] = useState(1);

  const setDateDay = () =>
    setDateNow(
      new Date(
        dateNow.getFullYear(),
        dateNow.getMonth(),
        dateNow.getDate() + interval,
      ),
    );

  const previousSetDateDay = () =>
    setDateNow(
      new Date(
        dateNow.getFullYear(),
        dateNow.getMonth(),
        dateNow.getDate() - interval,
      ),
    );

  const setInervalDate = () => setInterval((s) => s + 1);

  const previusSetInterval = () => setInterval((s) => s - 1);

  return (
    <div className="container">
      <div className="count">
        <button onClick={previousSetDateDay}>-</button>
        <h2>Intervalo: {interval}</h2>
        <button onClick={setDateDay}>+</button>
      </div>
      <div className="count">
        <button onClick={previusSetInterval}>-</button>
        <h2>Contagem: {interval - 1}</h2>
        <button onClick={setInervalDate}>+</button>
      </div>
      <h2>
        Hoje é {weekDays[dateNow.getDay()]} , dia {dateNow.getDate()} de{" "}
        {arrMonths[dateNow.getMonth()]} de {dateNow.getFullYear()}
      </h2>
    </div>
  );
};

export { App };
