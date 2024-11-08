export default function ColorSwitch({
    onChangeColor
  }) {
    return (
      <button onClick={onChangeColor}>
        Cambiar color
      </button>
    );
  }