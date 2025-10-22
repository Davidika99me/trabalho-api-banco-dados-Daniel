import mongoose from 'mongoose';

import { MarcaModel, PedidoModel, ProdutoModel } from './seed-colecoes.js'

const Marca = MarcaModel
const Produto = ProdutoModel
const Pedido = PedidoModel

export const colecoesInserts = async () => {

    const marcasParaInserir = [
        { nome: 'Apple', site: 'apple.com', telefone: '0800-761-0867' },
        { nome: 'Samsung', site: 'samsung.com', telefone: '0800-761-0087' }
    ];

    const produtosParaInserir = [
        { nome: 'iPhone 15', preco: 7999.00, estoque: 50, marca: 'Apple' },
        { nome: 'Galaxy S23', preco: 4599.00, estoque: 75, marca: 'Samsung' }
    ];
    

    const pedidosParaInserir = [
        { data_pedido: '2025-09-17', id_cliente: 1, valor_total: 11898 }, 
        { data_pedido: '2025-09-17', id_cliente: 2, valor_total: 13598 }
    ];


    try {
        console.log('--- Iniciando inserção de dados (Seeds) no MongoDB ---');
        

        await Marca.deleteMany({}); 
        console.log('Coleção "marcas" limpa.');

        let resultado = await Marca.insertMany(marcasParaInserir);

        console.log(`${resultado.length} documentos inseridos na coleção 'marcas'.`);
        
        
       
        await Produto.deleteMany({}); 
        console.log('Coleção "produtos" limpa.');

        resultado = await Produto.insertMany(produtosParaInserir);

        console.log(`${resultado.length} documentos inseridos na coleção 'produtos'.`);
        
        await Pedido.deleteMany({}); 
        console.log('Coleção "pedidos" limpa.');

        resultado = await Pedido.insertMany(pedidosParaInserir);

        console.log(`${resultado.length} documentos inseridos na coleção 'pedidos'.`);


    } catch (error) {
        console.error(' Erro ao executar seeds do MongoDB:', error);
    }
};