'use client';
import {
  SVGProps,
  ComponentType,
  InputHTMLAttributes,
  useState,
  forwardRef,
  KeyboardEventHandler,
  ReactNode,
} from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { cn } from '~/lib/utils';
import { ArrowBigUpDash, EyeIcon, EyeOffIcon } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon, className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [capsLockActive, setCapsLockActive] = useState(false);

    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
      const capsLockOn = event.getModifierState('CapsLock');
      setCapsLockActive(capsLockOn);
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputClasses = cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      startIcon && 'pl-10',
      type === 'password' && (!capsLockActive ? 'pr-8' : 'pr-16'),
      className
    );

    return (
      <div className={cn('relative', className)}>
        {startIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          className={inputClasses}
          onKeyDown={handleKeyPress}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <div className="absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1">
            {showPassword ? (
              <EyeOffIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                size={20}
              />
            ) : (
              <EyeIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                size={20}
              />
            )}
            {/* {capsLockActive && type === 'password' && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ArrowBigUpDash size={20} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Caps Lock is on!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )} */}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
