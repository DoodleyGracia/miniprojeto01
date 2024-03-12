function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      // Criar elementos HTML
      const taskItem = document.createElement('li');
      const taskText = document.createElement('span');
      const deleteButton = document.createElement('button');
  
      // Adicionar classes e conteúdo
      taskItem.className = 'taskItem';
      taskText.innerText = taskInput.value;
      deleteButton.innerText = 'Excluir';
      deleteButton.onclick = function() {
        taskItem.remove();
      };
  
      // Adicionar elementos à lista
      taskItem.appendChild(taskText);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      // Limpar o campo de entrada
      taskInput.value = '';
    }
  }
  
  function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const userList = document.getElementById('userList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Nome:</strong> ${name} <br> <strong>E-mail:</strong> ${email} <br> <strong>Senha:</strong> ${password}`;
  
    userList.appendChild(listItem);
  
    // Limpar formulário
    document.getElementById('signupForm').reset();
  }
  
  