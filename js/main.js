import users from "./users.js";

//Task-1---------------------------------------------------------------------
// Получить массив имен всех пользователей (поле name).
console.log("Task-1---------------------------------");
const getUserNames = users => {
    let names = [];
    users.forEach(item => {
        names.push(item.name);
    });
    return names;
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Task-2---------------------------------------------------------------------
//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
console.log("Task-2---------------------------------");
const getUsersWithEyeColor = (users, color) => {
    let usersOneEyesColor = [];
    users.filter(user => { 
        if (user.eyeColor === color) usersOneEyesColor.push(user); 
    });
    return usersOneEyesColor;
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Task-3---------------------------------------------------------------------
// Получить массив имен пользователей по полу (поле gender).
console.log("Task-3---------------------------------");
const getUsersWithGender = (users, gender) => {
    let usersOneGender = [];
    users.filter(user => { 
        if (user.gender === gender) usersOneGender.push(user); 
    });
    return usersOneGender;
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Task-4---------------------------------------------------------------------
//Получить массив только неактивных пользователей (поле isActive).
console.log("Task-4---------------------------------");
const getInactiveUsers = users => {
    let unactiveUsers = [];
    users.filter(user => { 
        if (!user.isActive) unactiveUsers.push(user); 
    });
    return unactiveUsers;
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Task-5---------------------------------------------------------------------
// Получить пользоваля (не массив) по email (поле email, он уникальный).
console.log("Task-5---------------------------------");
const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email);
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//Task-6---------------------------------------------------------------------
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
console.log("Task-6---------------------------------");
const getUsersWithAge = (users, min, max) => {
   let usersWithAge = [];
    users.filter(user => { 
        if (user.age > min && user.age < max) usersWithAge.push(user); 
    });
    return usersWithAge;
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Task-7---------------------------------------------------------------------
//Получить общую сумму баланса (поле balance) всех пользователей.
console.log("Task-7---------------------------------");
const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance += user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916

//Task-8---------------------------------------------------------------------
//Массив имен всех пользователей у которых есть друг с указанным именем.
console.log("Task-8---------------------------------");
const getUsersWithFriend = (users, friendName) => {
    let names = [];
    users.filter(user => { if (user.friends.some(friend => friend === friendName)) names.push(user.name);});
    return names;
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//Task-9---------------------------------------------------------------------
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
console.log("Task-9---------------------------------");
const getNamesSortedByFriendsCount = users => {
    let sortedUsers = []
    users.sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length)
    .forEach(user => sortedUsers.push(user.name));
    return sortedUsers;
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Task-10---------------------------------------------------------------------
// Получить массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений
// и они должны быть отсортированы в алфавитном порядке.
console.log("Task-10---------------------------------");
const getSortedUniqueSkills = users => {
    const sortedUniqueSkills =
        users.flatMap(user => user.skills)
        .filter((item, index, arr) => { return arr.indexOf(item) === index; })
        .sort();
    return sortedUniqueSkills;
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
//'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 
//'tempor', 'velit', 'veniam' ]