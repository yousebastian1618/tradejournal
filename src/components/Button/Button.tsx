import './style.scss';

type Props = {
  name: string;
  label: string;
  color?: string;
  hoveringColor?: string;
  handleClick?: () => void;
}

export default function Button({ name, label, color, hoveringColor, handleClick }: Props) {
  return (
    <div className={'button-container'} onClick={handleClick}>
      <span>{label}</span>
    </div>
  )
}