function Contato(nome, email, assunto, mensagem) {
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email")? document.getElementById("email").value : "";
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value;
        const contato = new Contato(nome, email, assunto, mensagem);
        alert(`Mensagem enviado!\n\nNome: ${contato.nome}\nEmail: ${contato.email}\nAssunto: ${contato.assunto}\nMensagem: ${contato.mensagem}`);
        form.reset();
    });
    let produtos=[
        { id: 1, nome: "Consultoria" },
        { id: 2, nome: "Desenvolvimento Web" },
        { id: 3, nome: "Suporte Técnico" }
    ];
    const lista= document.getElementById("lista-servicos");
    const inputNovo= document.getElementById("novo-produto");
    const btnAdicionar= document.getElementById("adicionar-produto");
    function renderProdutos() {
        lista.innerHTML = "";
        produtos.forEach(produto => {
            const li = document.createElement("li");
            li.textContent = produto.nome;
            const btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.onclick = function() {
                const novoNome = prompt("Editar produto:", produto.nome);
                if (novoNome) {
                    produto.nome = novoNome;
                    renderProdutos();
                }
            };
            const btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.onclick= function() {
                produtos = produtos.filter(p => p.id !== produto.id);
                renderProdutos();
            };
            li.appendChild(btnEditar);
            li.appendChild(btnRemover);
            lista.appendChild(li);
        });
    }
    btnAdicionar.onclick = function() {
        const nome = inputNovo.value.trim();
        if (nome) {
            produtos.push({id:Date.now(), nome});
            inputNovo.value = "";
            renderProdutos();
        }
    };
    renderProdutos();
});
