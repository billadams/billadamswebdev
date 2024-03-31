import styles from './alert.module.css';

type OwnerState = {
  classes?: string;
  severity: string;
};

export default function Alert({
  children,
  ownerState,
}: {
  children?: React.ReactNode;
  ownerState: OwnerState;
}) {
  const severity = ownerState?.severity ? ownerState.severity : 'info';
  const classes = ownerState?.classes ? ownerState.classes : '';
  const alertSeverity = `alert-${severity}`;

  return (
    <div
      className={`alert ${styles.alert} ${styles[alertSeverity]} ${classes}`}
    >
      {children}
    </div>
  );
}

export function AlertTitle({
  children,
  ownerState,
}: {
  children?: React.ReactNode;
  ownerState: OwnerState;
}) {
  const classes = ownerState?.classes ? ownerState.classes : '';

  return (
    <div className={`${styles['alert-title']} ${classes}`}>{children}</div>
  );
}
