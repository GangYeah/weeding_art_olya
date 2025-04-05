const users = {
    'tetyazina': {
        name: 'Тетя Зина',
        many: false
    }
};
$(document).ready(function () {
    const guestName = (new URL(document.location)).searchParams.get('name') 
    const guest = users[guestName];
    document.getElementById('name').textContent = (guest.many ? 'Дорогие ' : 'Дорогая ') + guest.name;
});