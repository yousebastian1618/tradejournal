import {IconMap} from "@/objects";

type Props = {
  name: string;
}

export default function Icon({ name }: Props) {

  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return (
    <div className={'icon-container'}>
      <IconComponent name={name} />
    </div>
  )
}