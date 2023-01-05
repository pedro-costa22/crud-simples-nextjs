//React
import { useState } from "react";

//Components
import Input from "./Input";
import Cliente from "../core/Cliente";

interface IForm {
    cliente: Cliente;

}

export default function Form(props: IForm){

    const id = props.cliente.getId ?? null;
    const [name, setName] = useState(props.cliente?.getName ?? '');
    const [age, setAge] = useState(props.cliente?.getAge ?? 0);

    return (
        <div>
            {id ? (
                 <Input text="Código" type="text" value={id} readonly={true} className="mb-4"/>
            ): false}
            <Input text="Nome" type="text" value={name} alterValue={setName} className="mb-4"/>
            <Input text="Idade" type="text" value={age} alterValue={setAge} className="mb-4"/>
        </div>
    )
}