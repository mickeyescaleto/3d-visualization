import type { ComponentProps } from 'react';
import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';

import styles from './input.module.css';

type InputProps = ComponentProps<'input'> &
  ComponentProps<typeof HeadlessInput>;

export function Input({ className, ...props }: InputProps) {
  return <HeadlessInput className={clsx(styles.input, className)} {...props} />;
}
