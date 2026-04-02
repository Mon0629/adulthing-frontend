import React from 'react';
import {
  Toaster,
  toast as sonnerToast,
  type ToasterProps,
  type ToastStyles,
  type ToastVariant,
} from 'sonner-native';

const GREEN = '#0E4C32';

const TEXT_BY_VARIANT: Record<ToastVariant, { title: string; description: string }> =
  {
    success: {
      title: '#0E4C32',
      description: 'rgba(14, 76, 50, 0.85)',
    },
    error: {
      title: '#DC2626',
      description: 'rgba(220, 38, 38, 0.85)',
    },
    warning: {
      title: '#92400E',
      description: 'rgba(146, 64, 14, 0.85)',
    },
    info: {
      title: '#075985',
      description: 'rgba(7, 89, 133, 0.85)',
    },
    loading: {
      title: '#0E4C32',
      description: 'rgba(14, 76, 50, 0.85)',
    },
  };

type ToastData = Parameters<typeof sonnerToast.success>[1];

function withVariantTextStyles(
  data: ToastData | undefined,
  variant: ToastVariant,
): ToastData {
  const v = TEXT_BY_VARIANT[variant];
  const prevStyles = data?.styles;

  const styles: ToastStyles = {
    ...(prevStyles ?? {}),
    title: {
      ...(prevStyles?.title ?? {}),
      color: v.title,
    },
    description: {
      ...(prevStyles?.description ?? {}),
      color: v.description,
    },
  };

  return data ? { ...data, styles } : ({ styles } as ToastData);
}

type ToastFn = typeof sonnerToast;

export const toast: ToastFn = Object.assign(
  ((message: string, data?: any) => sonnerToast(message, data)) as any,
  {
    success: (message: string, data?: ToastData) =>
      sonnerToast.success(message, withVariantTextStyles(data, 'success')),
    error: (message: string, data?: ToastData) =>
      sonnerToast.error(message, withVariantTextStyles(data, 'error')),
    info: (message: string, data?: ToastData) =>
      sonnerToast.info(message, withVariantTextStyles(data, 'info')),
    warning: (message: string, data?: ToastData) =>
      sonnerToast.warning(message, withVariantTextStyles(data, 'warning')),
    loading: (message: string, data?: ToastData) =>
      sonnerToast.loading(message, withVariantTextStyles(data, 'loading')),
    custom: sonnerToast.custom,
    promise: sonnerToast.promise,
    dismiss: sonnerToast.dismiss,
    wiggle: sonnerToast.wiggle,
  },
) as ToastFn;

export default function AppToaster(props?: Partial<ToasterProps>) {
  return (
    <Toaster
      position="top-center"
      closeButton
      toastOptions={{
        style: {
          backgroundColor: GREEN,
          borderRadius: 15,
        },
        success: { backgroundColor: '#C9EFDF' },
        loading: { backgroundColor: GREEN },
        error: { backgroundColor: '#F4DEDE' },
        warning: { backgroundColor: '#F59E0B' },
        info: { backgroundColor: '#ffffff' },
      }}
      {...props}
    />
  );
}
