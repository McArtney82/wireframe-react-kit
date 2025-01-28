import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function clsxMerge(...classes: Array<string | boolean | undefined>) {
  return twMerge(clsx(classes));
}
