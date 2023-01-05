import Cliente from "../core/Cliente"
import { DeleteIcon, EditIcon } from "./Icons"

interface ITable {
    clientes: Cliente[];
    selectClient?: (cliente: Cliente) => void;
    deleteClient?: (cliente: Cliente) => void;
};

export default function Table(props: ITable){

    const openActions = props.selectClient || props.deleteClient;

    function renderHeaders(){
        return (
            <tr>
                <th className="text-left p-4">Código:</th>
                <th className="text-left p-4">Nome:</th>
                <th className="text-left p-4">Idade:</th>
                <th className="p-4">Ações:</th>
            </tr>
        )
    };

    function renderDatas(){
        return props.clientes?.map((client: any, i: any) => {
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {openActions ? renderActions(client) : false}
                </tr>
            )
        })
    };


    function renderActions(cliente: Cliente){
        return (
            <td className="flex justify-center">
                {props.selectClient ? (
                    <button onClick={() => props.selectClient?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {EditIcon}
                    </button>

                ): false}
                {props.deleteClient ? (
                     <button onClick={() => props.selectClient?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {DeleteIcon}
                    </button>
                ): false}
            </td>
        )
    }

    
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeaders()}
            </thead>
            <tbody>
                {renderDatas()}
            </tbody>
        </table>
    )
}