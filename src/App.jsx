import { useEffect, useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Gui089/fake-api-steps/main/steps.json",
    )
      .then((r) => r.json())
      .then((data) => setSteps(data))
      .catch(console.log);
  }, []);

  const showStep = () => {
    return setStep((s) => (s + 1 === steps.length ? s : s + 1));
  };

  const previusShowSteps = () => setStep((s) => (s === 0 ? s : s - 1));

  return (
    <>
      <div className="steps">
        <button className={step === 0 ? "numbers active" : "numbers"}>1</button>
        <button className={step === 1 ? "numbers active" : "numbers"}>2</button>
        <button className={step === 2 ? "numbers active" : "numbers"}>3</button>

        <div>
          <h1 className="message">
            {step + 1}: Passo {steps[step]?.description}
          </h1>
        </div>

        <button onClick={previusShowSteps} className="buttons">
          Anterior
        </button>
        <button onClick={showStep} className="buttons">
          Próximo
        </button>
      </div>
    </>
  );
};

const App = () => {
  const [toggle, setToggle] = useState(true);

  const showToggle = () => setToggle((t) => !t);

  return (
    <>
      <button onClick={showToggle} className="toggle">
        {toggle === true ? "Fechar" : "Abrir"}
      </button>

      {toggle && <Steps />}
    </>
  );
};

export { App };
