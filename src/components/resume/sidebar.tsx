'use client';

import { ReactNode } from 'react';

type SidebarProps = {
  children: ReactNode;
  classNames: string;
};

export default function Sidebar(props: SidebarProps) {
  return <div className={props.classNames}>{props.children}</div>;
}
