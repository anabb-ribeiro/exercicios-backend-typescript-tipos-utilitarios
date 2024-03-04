type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNascimento?: string
}

type Usuario2 = Omit<Usuario, 'rg'>
type Usuario2Obrigatorio = Required<Usuario2>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}