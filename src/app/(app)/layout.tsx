import HomeShell from "@/components/Shell/HomeShell/HomeShell";
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <HomeShell>
      {children}
    </HomeShell>
  );
}
