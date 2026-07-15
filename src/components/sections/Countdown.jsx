import { useEffect, useState } from "react";

export default function Countdown() {
  
  const eventDate = new Date("2026-11-01T16:00:00Z");

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Item = ({ value, label }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-28 text-center">
      <h2 className="text-4xl font-bold text-purple-900">
        {value}
      </h2>

      <p className="text-gray-500 mt-2">
        {label}
      </p>
    </div>
  );

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-purple-900">

          Countdown to Revival

        </h2>

        <p className="mt-5 text-gray-600">

          Every second brings us closer to an unforgettable encounter.

        </p>

        <div className="flex justify-center gap-8 mt-14 flex-wrap">

          <Item value={timeLeft.days} label="Days" />

          <Item value={timeLeft.hours} label="Hours" />

          <Item value={timeLeft.minutes} label="Minutes" />

          <Item value={timeLeft.seconds} label="Seconds" />

        </div>

      </div>

    </section>
  );
}