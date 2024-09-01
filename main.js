const form = document.getElementById('form-atividade');
const nome = [];
const telefones = [];

form.addEventListener('submit' , function(e){
    e.preventDefault();
    adicionarLinha();
})

function adicionarLinha() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const telefoneExistente = Array.from(document.querySelectorAll('#lista-contatos td:nth-child(2)'))
                                .map(td => td.textContent);
    
    if (telefoneExistente.includes(telefone)) {
        alert('Este número de telefone já está cadastrado.');
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
        return;
    }
    
    const tbody = document.getElementById('lista-contatos');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td><button class="call"><a href="tel:${telefone}"</a><i class="fas fa-phone"></i></button><button class="delete">Excluir</button></td>
    `;

    tbody.appendChild(tr);

    

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';

    tr.querySelector('.delete').addEventListener('click', function() {
        tr.remove();
    });
}
