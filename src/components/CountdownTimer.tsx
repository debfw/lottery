import { setInputValue } from "@/lib/features/inputSlice";
import { setTotalSeconds } from "@/lib/features/timerSlice";
import { clearWinner, setWinner } from "@/lib/features/usersSlice";
import { RootState } from "@/lib/store";
import { Button, Fieldset, Group } from "@mantine/core";
import { ChangeEvent } from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";

export function CountdownTimer() {
  const dispatch = useDispatch();
  const totalSeconds = useSelector(
    (state: RootState) => state.timer.totalSeconds
  );
  const winner = useSelector((state: RootState) => state.users.winner);
  const hasWinner = useSelector((state: RootState) => state.users.hasWinner);
  const users = useSelector((state: RootState) => state.users.users);
  const inputValue = useSelector((state: RootState) => state.input.value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleTimerStarter = () => {
    const seconds = parseInt(inputValue);
    if (seconds <= 0 || seconds > 60) {
      alert("Please enter a value between 1 and 60");
      return;
    }
    dispatch(setTotalSeconds(seconds));
  };

  const getRandomWinner = () => {
    const randomNum = Math.floor(Math.random() * users.length);
    setInputValue("");
    dispatch(setWinner(randomNum));

    setTimeout(() => {
      dispatch(clearWinner());
      dispatch(setTotalSeconds(0));
    }, 4000);
  };

  return (
    <Fieldset legend="Lottery time!" className="text-5xl">
      <input
        required
        onChange={handleChange}
        className="form"
        type="number"
        value={inputValue}
        placeholder="set timer"
      />
      <Group justify="flex-end" mt="md">
        <Button onClick={handleTimerStarter}>Submit timer</Button>
      </Group>
      {totalSeconds > 0 && (
        <Countdown
          onComplete={getRandomWinner}
          date={Date.now() + totalSeconds * 1000}
          renderer={({ minutes, seconds, completed }) => (
            <div className="text-9xl mt-10">
              {hasWinner
                ? `The winner is ${winner}`
                : `${String(minutes).padStart(2, "0")}:${String(
                    seconds
                  ).padStart(2, "0")}`}
            </div>
          )}
        />
      )}
      {totalSeconds === 0 && <div className="text-9xl mt-10">00:00</div>}
    </Fieldset>
  );
}
