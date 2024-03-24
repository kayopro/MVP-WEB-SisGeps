// CRIAÇÃO E CONEXÃO COM O LOCAL STORAGE
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_estoque')) ?? [];

const setLocalStorage = (dbEstoque) => localStorage.setItem("db_estoque", JSON.stringify(dbEstoque));

// CRUD - CREATE READ UPDATE DELETE
const createProduto = (produto) => {
    const dbEstoque = getLocalStorage();
    dbEstoque.push(produto);
    setLocalStorage(dbEstoque);
}

const readProduto = () => getLocalStorage();

const updateProduto = (index, produto) => {
    const dbEstoque = readProduto();
    dbEstoque[index] = produto;
    setLocalStorage(dbEstoque);
}

const deleteProduto = (index) => {
    const dbEstoque = readProduto();
    dbEstoque.splice(index, 1);
    setLocalStorage(dbEstoque);
}

// VALIDAÇÃO
const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

// INTERAÇÕES COM O MODAL
const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
    clearFields();
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "");
    document.getElementById('nome').dataset.index = 'new';
    document.querySelector(".modal-header>h2").textContent = 'Novo Produto';
}

// RECEPÇÃO, ARMAZENAMENTO E ENVIO DE DADOS
const saveProduto = () => {
    if (isValidFields()) {
        const produto = {
            codigo: document.getElementById('codigo').value,
            nome: document.getElementById('nome').value,
            categoria: document.getElementById('categoria').value,
            fabricante: document.getElementById('fabricante').value,
            quantidade: document.getElementById('quantidade').value,
            valor: document.getElementById('valor').value
        };
        const index = document.getElementById('nome').dataset.index;
        if (index == 'new') {
            createProduto(produto);
            updateTable();
            closeModal();
        } else {
            updateProduto(index, produto);
            updateTable();
            closeModal();
        }
    }
}

const updateTable = () => {
    const dbEstoque = readProduto();
    clearTable();
    dbEstoque.forEach(createRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbProduto>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const createRow = (produto, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${produto.codigo}</td>
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.fabricante}</td>
        <td>${produto.quantidade}</td>
        <td>${produto.valor}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `;
    document.querySelector('#tbProduto>tbody').appendChild(newRow);
}

const fillFields = (produto) => {
    document.getElementById('codigo').value = produto.codigo;
    document.getElementById('nome').value = produto.nome;
    document.getElementById('categoria').value = produto.categoria;
    document.getElementById('fabricante').value = produto.fabricante;
    document.getElementById('quantidade').value = produto.quantidade;
    document.getElementById('valor').value = produto.valor;
    document.getElementById('nome').dataset.index = produto.index;
}

const editProduto = (index) => {
    const produto = readProduto()[index];
    produto.index = index;
    fillFields(produto);
    document.querySelector(".modal-header>h2").textContent = `Editando ${produto.nome}`;
    openModal();
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-');
        if (action == 'edit') {
            editProduto(index);
        } else {
            const produto = readProduto()[index];
            const response = confirm(`Deseja realmente excluir o produto ${produto.nome}?`);
            if (response) {
                deleteProduto(index);
                updateTable();
            }
        }
    }
}

// INICIALIZAÇÃO
updateTable();

// EVENTOS
document.getElementById('cadastrarProduto')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click', saveProduto);

document.querySelector('#tbProduto>tbody')
    .addEventListener('click', editDelete);

document.getElementById('cancelar')
    .addEventListener('click', closeModal);
