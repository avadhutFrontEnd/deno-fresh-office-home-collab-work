// import Navbar from "../../components/AppLayoutComponents/Navbar.tsx";
// import Sidebar from "../../islands/AppLayoutIslands/sider-bar.tsx";
import AppLayout from "../../templates/layouts/AppLayout.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
  children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
  const count = useSignal(0);
  return (
    <>
      <AppLayout>
          {props.children}
      </AppLayout>
    </>
  );
}
