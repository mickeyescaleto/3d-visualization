import type { ComponentProps } from 'react';
import { Select as HeadlessSelect } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import clsx from 'clsx';

import styles from './select.module.css';

type SelectProps = ComponentProps<'select'> &
  ComponentProps<typeof HeadlessSelect>;

export function Select({ children, className, ...props }: SelectProps) {
  return (
    <div className={styles.wrapper}>
      <HeadlessSelect className={clsx(styles.select, className)} {...props}>
        {children}
      </HeadlessSelect>
      <ChevronDownIcon className={styles.icon} />
    </div>
  );
}
