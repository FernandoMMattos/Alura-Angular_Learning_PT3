export default interface IOnSale {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface IUF {
  id: number;
  nome: string;
  sigla: string;
}

export interface IReview {
  id: number;
  texto: string;
  avatar: string;
  autor: string;
}
