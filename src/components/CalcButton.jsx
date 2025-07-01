export default function CalcButton({ children, onClick, className}) {
    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}