import type { VariantProps } from 'class-variance-authority';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/utils/utils';
import { buttonVariants } from './buttonVariants';

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot='button'
      {...props}
    />
  );
}
