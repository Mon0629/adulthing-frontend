import React from 'react';
import { View, type ViewProps } from 'react-native';

export type SeperatorProps = ViewProps & {
  orientation?: 'horizontal' | 'vertical';
  /** When true, the separator is ignored by assistive technologies (shadcn default). */
  decorative?: boolean;
  className?: string;
};

/**
 * Visual divider. Horizontal: full width, 1px tall. Vertical: 1px wide, stretches on the cross axis in flex layouts.
 */
export function Seperator({
  orientation = 'horizontal',
  decorative = true,
  className,
  ...props
}: SeperatorProps) {
  const orientationClass =
    orientation === 'vertical'
      ? 'w-px self-stretch shrink-0'
      : 'h-px w-full shrink-0';

  return (
    <View
      accessible={!decorative}
      accessibilityLabel={decorative ? undefined : 'Separator'}
      {...props}
      className={['bg-gray-300', orientationClass, className].filter(Boolean).join(' ')}
    />
  );
}
