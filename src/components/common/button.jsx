/* eslint-disable react/prop-types */


export const Button = ({
    children,
    color,
    size,
    onClick,
    className ='',
    ...props
}) => {
  return (
    <button 
    onClick={onClick}
    className={`
        ${classes.base}
        ${classes.color[color]}
        ${classes.size[size]}
        ${className}
        `}
          {...props}
    >
      {children}
    </button>
  );
}

// shared css classes
const classes = {
    base: "inline-block rounded-md font-semibold text-center",
    color: {
        primary: 'bg-[#3A2829] hover:opacity-100 text-white',
        sec: 'bg-white hover:opacity-100 text-[#3A2829]',
    },
    size: {
        sm: 'px-3 py-1.5 text-sm', // Small button size
            md: "px-5 py-2.5 text-base",   // Medium button size (default)
    lg: "px-8 py-3 text-lg",       // Large button size
    }
}

