import firebase from "../config";
import Cliente from "../../core/Cliente";
import IClienteRepo from "../../core/clienteRepositorio";

export default class CollectionClient implements IClienteRepo {

    conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.getName,
                idade: cliente.getAge,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }
    
    async save(cliente: Cliente): Promise<Cliente> {
        if(cliente?.getId) {
            await this.colecao().doc(cliente.getId).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data();
        }
    }

    async delete(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.getId).delete();
    }

    async getAll(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.conversor)
    }
}