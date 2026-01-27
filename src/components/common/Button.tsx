import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

import { cn } from '@/utils/cn';

interface ButtonProps extends AntButtonProps {
  className?: string;
}

export function Button({ className, ...props }: ButtonProps) {
  return <AntButton className={cn(className)} {...props} />;
}
