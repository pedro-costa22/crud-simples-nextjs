//Components
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Aline', 34, '1'),
    new Cliente('Carlos', 45, '2'),
    new Cliente('Pedro', 28, '3'),
  ];

  function selectClient(client: Cliente){
      console.log(client);
  };

  function deleteClient(client: Cliente){
      console.log(client);
  };

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro simples">
        <div className="flex justify-end">
          <Button className="mb-4" cor="green">Novo Cliente</Button>
        </div>
        {/*<Table 
          clientes={clientes} 
          selectClient={selectClient} 
          deleteClient={deleteClient}
        />*/}
        <Form cliente={clientes[0]}/>
      </Layout>
    </div>
  )
}
