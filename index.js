const express = require("express");

const {
    consultarProdutos,
    consultarProdutoPorId,
    inserirProduto,
    alterarProduto,
    deletarProduto
} = require("./bancoDeDados");
require("dotenv").config();

const app = express();

app.use(express.json());



app.get("/produtos", (req, res) => {
    const produtos = consultarProdutos();
    res.json(produtos);
});


app.get("/produtos/:id", (req, res) => {
    const produto = consultarProdutoPorId(parseInt(req.params.id));
    if (!produto) return res.status(404).send("Produto não encontrado.");
    res.json(produto);
});


app.post("/produtos", (req, res) => {
    const { nome, quantidade, preco } = req.body;
    const novoProduto = inserirProduto({ nome, quantidade, preco });
    res.status(201).json(novoProduto);
});


app.put("/produtos/:id", (req, res) => {
    const produto = alterarProduto(parseInt(req.params.id), req.body);
    if (!produto) return res.status(404).send("Produto não encontrado.");
    res.json(produto);
});


app.delete("/produtos/:id", (req, res) => {
    const sucesso = deletarProduto(parseInt(req.params.id)); // Corrigido aqui
    if (!sucesso) return res.status(404).send("Produto não encontrado.");
    res.status(204).send(); // No Content
});

