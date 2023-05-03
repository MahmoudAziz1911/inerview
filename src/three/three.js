import { useCallback, useState } from "react";
import ActionBar from "./ActionBar";
import Messges from "./Messages";

const ChallengeThree = () => {
  const [state, setState] = useState(0);

  const componentMap = {
    0: <Messges count={state} />,
    1: (
      <>
        <span>{state}</span>
        <Messges count={state} />
      </>
    ),
    2: (
      <>
        <span>{state}</span>
        <Messges count={state} />
      </>
    ),
    3: <Messges count={state} />
  };

  const handlePreviousClick = useCallback(
    () =>
      setState((prevState) => {
        return prevState === 0
          ? Object.keys(componentMap).length - 1
          : prevState - 1;
      }),
    [componentMap]
  );

  const handleNextClick = useCallback(
    () =>
      setState((prevState) => {
        return prevState === Object.keys(componentMap).length - 1
          ? 0
          : prevState + 1;
      }),
    [componentMap]
  );

  return (
    <div className="text-center py-5">
      <span> {componentMap[state]}</span>
      <ActionBar
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
      />
      <br />
    </div>
  );
};

export default ChallengeThree;
