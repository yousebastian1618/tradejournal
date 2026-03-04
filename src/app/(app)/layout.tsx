import { ReactNode } from "react";
import AppShell from "@/app/(app)/shell";

type props = {
  children: ReactNode
}

export default function AppLayout({ children }: props) {
  return (
    <AppShell>
      {children}
    </AppShell>
  )
}
