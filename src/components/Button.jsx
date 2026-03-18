export const Button = ({ className, size, children }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medum focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 sshadow-primary/25";
    // Define size classes based on the size prop
    const sizeClasses = {
        sm: "px-3 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} `;
    return (
        <button className="classes">
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    )
}