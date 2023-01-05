export default class Cliente {
    private id: string; 
    private name: string;
    private age: number;

    constructor(name: string, age: number, id: string){
        this.name = name;
        this.age = age;
        this.id = id;
    }

    static void(){
        return new Cliente('', 0, '');
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    get getAge(){
        return this.age;
    }
    
}