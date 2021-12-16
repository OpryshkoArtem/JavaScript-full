// запит на сервер по id користувача
const fetchUser = async userId =>
  fetch(`https://api.github.com/users/${userId}`).then(response => response.json());

// створюємо ф-цію getUsersBlogs, передаємо в неї масив користувачів
// якщо все ОК -- повертаємо результат виконання промісу, масив email, якщо помилка в будь-якому запиті -- відхиляємо
export const getUsersBlogs = async usersArray => {
  try {
    // створюємо перемінну usersData і записуємо в неї масив промісів
    const usersData = usersArray.map(elem => fetchUser(elem));

    // створюємо перемінну userEmail і записуємо в неї масив результатів виконнаня промісів, з яких витягуємо email
    // повертаємо userEmail
    const usersEmails = await Promise.all(usersData);
    return usersEmails.map(({ blog }) => blog);
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

// test data

// getUsersBlogs(['google', 'faceboosdfvsdvk', 'facebook']).then(linksList => console.log(linksList));

// getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList));
