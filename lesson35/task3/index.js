import { fetchUserData, fetchRepositories } from './scripts/gateways.js';
import { renderUserData } from './scripts/user.js';
import { renderRepos, cleanReposList } from './scripts/repositor.js';
import { showSpinner, hideSpinner } from './scripts/spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10002',
  location: '',
  name: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const showNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();

  const userName = showNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
