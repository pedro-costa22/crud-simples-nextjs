//React
import { useState } from "react";

//Components
import Input from "./Input";
import Cliente from "../core/Cliente";
import Button from "./Button";

interface IForm {
    cliente: Cliente;
    cancel?: () => void;
    alterClient?:(cliente: Cliente) => void;

}

export default function Form(props: IForm){

    const id = props.cliente?.getId ?? null;
    const [name, setName] = useState(props.cliente?.getName ?? '');
    const [age, setAge] = useState(props.cliente?.getAge ?? 0);

    return (
        <div>
            {id ? (
                 <Input text="Código" type="text" value={id} readonly={true} className="mb-4"/>
            ): false}
            <Input text="Nome" type="text" value={name} alterValue={setName} className="mb-4"/>
            <Input text="Idade" type="text" value={age} alterValue={setAge} className="mb-4"/>
            <div className=" flex justify-end mt-3">
                <Button color="blue" className="mr-2" onClick={() => props.alterClient?.(new Cliente(name, age, id))}>{id ? 'Alterar' : 'Salvar'}</Button>
                <Button onClick={props.cancel}>Cancelar</Button>
            </div>
        </div>
    )
}