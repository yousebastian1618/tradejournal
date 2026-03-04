import './style.scss';

type props = {
  name: string;
  label: string;
  color?: string;
  hoveringColor?: string;
  handleClick?: () => void;
}

export default function Button({ name, label, color, hoveringColor, handleClick }: props) {
  return (
    <div className={'button-container'} onClick={handleClick}>
      <span className={'button-label'}>{label}</span>
    </div>
  )
}