import Countdown from "react-countdown";

const Countdownreact = ({ startDateTime, endDateTime }) => {
  const startTime = new Date(startDateTime).getTime();
  const endTime = new Date(endDateTime).getTime();

  // Renderer for the countdown
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    completed,
  }) => {
    if (completed) {
      return <h1>Time is up!</h1>;
    } else {
      return (
        <div>
          <h1>
            {days}d {hours}h {minutes}m {seconds}s {milliseconds}s
          </h1>
        </div>
      );
    }
  };

  return (
    <div>
      {startTime <= Date.now() && endTime > Date.now() ? (
        <Countdown date={endTime} renderer={renderer} />
      ) : (
        <h2>The countdown All ready end.</h2>
      )}
    </div>
  );
};

export default Countdownreact;
