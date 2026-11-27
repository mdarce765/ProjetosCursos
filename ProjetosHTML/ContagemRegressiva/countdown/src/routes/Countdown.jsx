import useCountdown from "../hooks/useCountdown";
import Title from "../components/Title";
import Counter from "../components/Counter";
import { CountdownContext } from "../context/CountdownContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to={"/"} replace />;

  const eventTitle = event.title;
  const eventColor = event.color;
  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      {/* Título */}
      <Title title={eventTitle} eventColor={eventColor} />

      {/* Contagem */}
      <div className="countdown-container">
        <Counter title={"Dias"} number={day} eventColor={eventColor} />
        <Counter title={"Horas"} number={hour} eventColor={eventColor} />
        <Counter title={"Minutos"} number={minute} eventColor={eventColor} />
        <Counter title={"Segundos"} number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
