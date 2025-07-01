import CalcButton from "./CalcButton"

export default function CalcButtonPole({ onBtnClick }) {
    const buttons = [
        { content: 'C', isOrange: true },
        { content: 'del', isOrange: true },
        { content: '%', isOrange: true },
        { content: '/', isOrange: true },
        { content: '7', isOrange: false },
        { content: '8', isOrange: false },
        { content: '9', isOrange: false },
        { content: '*', isOrange: true },
        { content: '4', isOrange: false },
        { content: '5', isOrange: false },
        { content: '6', isOrange: false },
        { content: '-', isOrange: true },
        { content: '1', isOrange: false },
        { content: '2', isOrange: false },
        { content: '3', isOrange: false },
        { content: '+', isOrange: true },
        { content: '', isOrange: false },
        { content: '0', isOrange: false },
        { content: ',', isOrange: false },
        { content: '=', isOrange: false }
    ];
    return (
        <div className="calc__btn-pole">
            {buttons.map(({ content, isOrange }, i) => (
                <CalcButton className={`calc__btn ${isOrange ? 'orange' : ''}`} key={i} onClick={() => onBtnClick(content)} >{content}</CalcButton>
            ))}
        </div>
    )
}