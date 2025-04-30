const users = {
    'e3a1f4f23ad44f8c9e0b4aa343a0986d': { name: 'мама и папа', many: true, respect: true },
    'f63f17a2486745e2929e6c7e6d15b537': { name: 'бабушка и дедушка', many: true, respect: true },
    '6c2de8e391fc413ab79c3c3e3d6e9c6a': { name: 'дедушка', many: false, sex: true, respect: true },
    '67f3d8e5e4d541c9a8910ef6a290857c': { name: 'Тетя Люда', many: false, sex: false, respect: true },
    'b3dfad15e0bc426d9c918f41c1170dc3': { name: 'Тетя Света', many: false, sex: false, respect: true },
    '70c4ad91319a4f27bbfeff05795b69c7': { name: 'Алексей и Екатерина', many: true, respect: true },
    'b84ff48f4d9d4e4fb8ce8030e316d340': { name: 'Дмитрий и Ольга', many: true, respect: true },
    '5a6a1604bb3d41ecac7ae1d4a65a1427': { name: 'Андрей и Елена', many: true, respect: true },
    '2d2dd1e2c9ee4431b229f84a8a2f59c5': { name: 'Рустам и Дарья', many: true, respect: true },
    '3f9c43f9d86b4f92b58d9a3f93ec9f34': { name: 'Дмитрий и Альфия', many: true, respect: true },
    'a7df148ea45a4fa1bbf2069d6b93e942': { name: 'Станислав и Оксана', many: true, respect: true },
    'ac7ef1a9ad5743d5a7548266f5df2b3c': { name: 'Сергей и Оксана', many: true, respect: true },
    '889b4bb67654478593cdd914509a7114': { name: 'Михаил и Марина', many: true, respect: true },
    'a1e36ad3ed6947ec9b799e1242c87e17': { name: 'Евгений и Екатерина', many: true, respect: true },
    'f4a6f9942f934d12bdc6ce1d07ad3b95': { name: 'Анатолий и Кристина', many: true, respect: true },
    '1ec8f91b145146e88c9b56b63c3912b5': { name: 'Дарья', many: false, sex: false, respect: true},
    '6582a55c274944bfb37eaa0c26c37698': { name: 'Алексей и Валерия', many: true, respect: true },
    '0a7e3f38c9e5446cb7c4ea3145c2bfc3': { name: 'Леонид и Дарья', many: true, respect: true },
    // artem
    '3f6f732d325c4aa381fb8c7c1861dbf0': { name: 'Мама, папа и Брат Максим', many: true, respect: true },
    'a1243c7fc79f486d84ed93d58bde215a': { name: 'Бабушка', many: false, sex: false, respect: true },
    '7307a4b9d8cf4490a431403f93f02c5b': { name: 'Валерий, Ирина, Сергей, Алексей', many: true, respect: true },
    '69d1a7d5eac34cc9a3f7825608a13c5f': { name: 'Николай и Анастасия', many: true, respect: true },
    'f20a51b2d4c5430492a989c1653a9f4f': { name: 'Павел и Надежда', many: true, respect: true },
    '2ce7290610024bcb85103cabc2785704': { name: 'Тетя Люда', many: false, sex: false, respect: true },
    '0a93d0e0fda84857b6f9a21f378a9802': { name: 'Тетя Зина', many: false, sex: false, respect: true },
    '94e86ff5391a4db1b1a3a154a94d17df': { name: 'Павел и Наталья', many: true, respect: false },
    'af2f0ae0130c41868c1be2b7fe2e63cc': { name: 'Александр и Юлия', many: true, respect: false },
    '8c38d8126b5e4cc697c46ea0a00f8e5b': { name: 'Евгения Алексеевна', many: false, respect: false },
    '13bd4e9b1d8e4432a539d8b23e5c24e4': { name: 'Виталий и Эльвира', many: true, respect: false },
    'a96c80898dbf4f01b27ab83b1e87ed71': { name: 'Вадим', many: false, sex: true, respect: false },
    '5c2cda540bd64c3b84d03a94f688c0ec': { name: 'Даниил', many: false, sex: true, respect: false },
    '2c4035e9bfea49f59a58b69a13e36a11': { name: 'Григорий', many: false, sex: true, respect: false },
    '2b72fd84638f4b2a827f355e56c6ab45': { name: 'Александр', many: false, sex: true, respect: false },
    '0a93d0e0fda84857b6f9a21f378a9ju2': { name: 'Виталий', many: false, sex: true, respect: true },
};

$(document).ready(function () {
    const guestName = (new URL(document.location)).searchParams.get('name')
    const guest = users[guestName];
    document.getElementById('name').textContent = (!guest.respect ? '' : (guest.many ? 'Дорогие ' : guest.sex ? 'Дорогой ' : 'Дорогая ')) + guest.name  + '!';
});