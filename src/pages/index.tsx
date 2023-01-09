//Components
import { useEffect, useState } from "react";
import CollectionClient from "../backend/db/collectionClients";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import IClienteRepo from "../core/clienteRepositorio";

export default function Home() {

  const repo: IClienteRepo = new CollectionClient()

  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const [cliente, setCliente] = useState<Cliente>(Cliente.void());
  const [clientes, setClientes] = useState<Cliente[]>([]);


  function selectClient(client: Cliente){
      setCliente(client);
      setVisible('form');
  };

  async function deleteClient(client: Cliente){
      await repo.delete(client);
      getAll();
  };

  async function saveClient(cliente: Cliente) {
    await repo.save(cliente);
    getAll();
  }

  function handleNewClient(){
    setCliente(Cliente.void());
    setVisible('form');
  }

  useEffect(getAll, []);

  function getAll(){
    repo.getAll()
      .then((clientes) => {
        setClientes(clientes);
        setVisible('table');
      });

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={handleNewClient}>Novo Cliente</Button>
            </div>
            <Table 
              clientes={clientes} 
              selectClient={selectClient} 
              deleteClient={deleteClient}
            />
          </>
        ) : (
          <Form cliente={cliente} cancel={() => setVisible('table')} alterClient={saveClient}/>
        )}
      </Layout>
    </div>
  )
}
