import { Link } from "react-router-dom";

export const Button = ({ className = "", size = "default", to, children, ...props }) => {
    const baseClasses = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25";
    
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    const Component = to ? Link : "button";

    return (
        <Component to={to} className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </Component>
    );
};