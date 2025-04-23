const users = {
    'e3a1f4f23ad44f8c9e0b4aa343a0986d': { name: 'мама и папа', many: true },
    'f63f17a2486745e2929e6c7e6d15b537': { name: 'бабушка и дедушка', many: true },
    '6c2de8e391fc413ab79c3c3e3d6e9c6a': { name: 'дедушка', many: false, sex: true },
    '67f3d8e5e4d541c9a8910ef6a290857c': { name: 'Тетя Люда', many: false, sex: false },
    'b3dfad15e0bc426d9c918f41c1170dc3': { name: 'Тетя Света', many: false, sex: false },
    '70c4ad91319a4f27bbfeff05795b69c7': { name: 'Алексей и Екатерина', many: true },
    'b84ff48f4d9d4e4fb8ce8030e316d340': { name: 'Дмитрий и Ольга', many: true },
    '5a6a1604bb3d41ecac7ae1d4a65a1427': { name: 'Андрей и Елена', many: true },
    '2d2dd1e2c9ee4431b229f84a8a2f59c5': { name: 'Рустам и Дарья', many: true },
    '3f9c43f9d86b4f92b58d9a3f93ec9f34': { name: 'Дмитрий и Альфия', many: true },
    'a7df148ea45a4fa1bbf2069d6b93e942': { name: 'Станислав и Оксана', many: true },
    'ac7ef1a9ad5743d5a7548266f5df2b3c': { name: 'Сергей и Оксана', many: true },
    '889b4bb67654478593cdd914509a7114': { name: 'Михаил и Марина', many: true },
    'a1e36ad3ed6947ec9b799e1242c87e17': { name: 'Евгений и Екатерина', many: true },
    'f4a6f9942f934d12bdc6ce1d07ad3b95': { name: 'Анатолий и Кристина', many: true },
    '1ec8f91b145146e88c9b56b63c3912b5': { name: 'Дарья', many: false, sex: false },
    '6582a55c274944bfb37eaa0c26c37698': { name: 'Алексей и Валерия', many: true },
    '0a7e3f38c9e5446cb7c4ea3145c2bfc3': { name: 'Леонид и Дарья', many: true },
};

$(document).ready(function () {
    const guestName = (new URL(document.location)).searchParams.get('name')
    const guest = users[guestName];
    document.getElementById('name').textContent = (guest.many ? 'Дорогие ' : guest.sex ? 'Дорогой ' : 'Дорогая ') + guest.name  + '!';
});