interface IInput {
    type: 'text' | 'number';
    text: string;
    value: any;
    readonly?: boolean;
    className?: string;
    alterValue?: (value: any) => void;
}

export default function Input(props: IInput){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">{props.text}</label>
            <input 
                type={props.type} 
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.alterValue?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.readonly ? '' : 'focus:bg-white'}
                `}
            />

        </div>
    )
}