import Cliente from "./Cliente";

export default interface IClienteRepo {
    save(cliente: Cliente): Promise<Cliente>;
    delete(Cliente: Cliente): Promise<void>;
    getAll(): Promise<Cliente[]> 
}