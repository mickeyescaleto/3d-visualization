import type { ComponentProps } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

import styles from './button.module.css';

type ButtonProps = {
  variant?: 'outline' | 'danger';
} & ComponentProps<'button'> &
  ComponentProps<typeof HeadlessButton>;

export function Button({
  variant = 'outline',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      type={type}
      className={clsx(
        styles.button,
        {
          [styles.outline]: variant === 'outline',
          [styles.danger]: variant === 'danger',
        },
        className,
      )}
      {...props}
    />
  );
}
