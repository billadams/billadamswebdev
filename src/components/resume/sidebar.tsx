import { ReactNode } from 'react';

type SidebarProps = {
  children: ReactNode;
  classNames: string;
};

export default function Sidebar(props: SidebarProps) {
  return <section className={props.classNames}>{props.children}</section>;
}
