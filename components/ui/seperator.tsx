import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';

export type SeperatorProps = ViewProps & {
  orientation?: 'horizontal' | 'vertical';
  /** When true, the separator is ignored by assistive technologies (shadcn default). */
  decorative?: boolean;
  className?: string;
  /**
   * Use next to label text inside a `flex-row` (`className="flex-1 min-w-0"`).
   * Avoids `self-stretch` on the cross axis, which misaligns the hairline vs. text.
   */
  inline?: boolean;
};

/**
 * Horizontal: hairline height. Full-width in a column uses `self-stretch` (default).
 * In a row beside text, set `inline` and `className="flex-1 min-w-0"`.
 */
export function Seperator({
  orientation = 'horizontal',
  decorative = true,
  className,
  style,
  inline = false,
  ...props
}: SeperatorProps) {
  const orientationClass =
    orientation === 'vertical'
      ? 'self-stretch shrink-0'
      : inline
        ? 'shrink-0 self-center'
        : 'self-stretch shrink-0';

  const orientationStyle =
    orientation === 'vertical'
      ? { width: StyleSheet.hairlineWidth }
      : { height: StyleSheet.hairlineWidth };

  return (
    <View
      accessible={!decorative}
      accessibilityLabel={decorative ? undefined : 'Separator'}
      {...props}
      style={[orientationStyle, style]}
      className={['bg-gray-400', orientationClass, className].filter(Boolean).join(' ')}
    />
  );
}
