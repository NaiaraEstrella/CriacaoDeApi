const produtosMaquiagem = [
    { id: 1, nome: "Base Líquida", quantidade: 45, preco: 10.0 },
    { id: 2, nome: "Máscara para Cílios", quantidade: 30, preco: 15.0 },
    { id: 3, nome: "Blush Compacto", quantidade: 50, preco: 12.5 },
    { id: 4, nome: "Sombra em Pó", quantidade: 60, preco: 8.0 },
    { id: 5, nome: "Delineador Líquido", quantidade: 40, preco: 14.0 },
    { id: 6, nome: "Batons Matte", quantidade: 55, preco: 20.0 },
    { id: 7, nome: "Corretivo Líquido", quantidade: 35, preco: 11.0 },
    { id: 8, nome: "Pó Compacto", quantidade: 65, preco: 13.0 },
    { id: 9, nome: "Primer Facial", quantidade: 25, preco: 18.0 },
    { id: 10, nome: "Iluminador Compacto", quantidade: 20, preco: 22.0 }
];


const consultarProdutos = () => produtosMaquiagem;

const consultarProdutoPorId = (id) => {
    return produtosMaquiagem.find(p => p.id === id);
};

const inserirProduto = (produto) => {
    const novoProduto = {
        id: produtosMaquiagem.length + 1,
        ...produto
    };
    produtosMaquiagem.push(novoProduto);
    return novoProduto;
};

const alterarProduto = (id, dadosAtualizados) => {
    const produto = consultarProdutoPorId(id);
    if (produto) {
        Object.assign(produto, dadosAtualizados);
        return produto;
    }
    return null;
};

const deletarProduto = (id) => {
    const produtoIndex = produtosMaquiagem.findIndex(p => p.id === id);
    if (produtoIndex !== -1) {
        produtosMaquiagem.splice(produtoIndex, 1);
        return true;
    }
    return false;
};

module.exports = {
    consultarProdutos,
    consultarProdutoPorId,
    inserirProduto,
    alterarProduto,
    deletarProduto
};