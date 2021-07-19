const userName = 'hong'

const titleUI = document.getElementById('user-title');

titleUI.innerHTML = `<span><strong>${userName}</strong>'s Todo List</span>`;

const URL = 'https://js-todo-list-9ca3a.df.r.appspot.com/api';

const userListUI = document.getElementById('user-list');

const users = [];

users.push(`<button class="ripple active">
    ${userName}
  </button>`);

const controlBUtton = `<button class="ripple user-create-button" data-action="createUser">
  + 유저 생성
  </button>
  <button class="ripple user-delete-button" data-action="deleteUser">
  삭제 -
  </button>
  `
userListUI.innerHTML = users.join('') + controlBUtton;

const onUserCreateHandler = () => {
  const userName = prompt('추가하고 싶은 이름을 입력해주세요.');

  users.push(` <button class="ripple active">
  ${userName}
  </button>
  `);

  userListUI.innerHTML = users.join('') + controlBUtton;
};

const userCreateButton = document.querySelector('.user-create-button');
userCreateButton.addEventListener('click', onUserCreateHandler);

async function fetchUserList() {
  const url = `${URL}/users`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data;
}

function getUserList(){
  return async() => {
    const { _id, name, todoList } = await fetchUserList();
  }
}

getUserList();
