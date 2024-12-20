// Задание 1  =========================================================

// Выводим данные о первом посте в консоль
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json()) 
.then(data => console.log("Успех (Задание 1): ", data)) 
.catch(error => console.error('Ошибка (Задание 1):', error)); 



// Задание 2  =========================================================

// Создаем новый пост с заголовком и телом
const newPost = { 
    title: 'Искусственный Интеллект: Инновации Сегодня и Завтра', 
    body: 'В последние годы искусственный интеллект (ИИ) стал одной из самых горячих тем в мире технологий. От автономных автомобилей до виртуальных помощников, таких как Copilot, ИИ проникает во все аспекты нашей жизни. Что же ждёт нас в будущем? Эксперты предсказывают, что ИИ будет играть ключевую роль в медицине, образовании и даже искусстве, открывая новые горизонты и возможности.',
    userId: 1
};

// Добавляем пост на сервер
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // Указываем метод
    headers: {
    'Content-Type': 'application/json' // Указываем тип данных
    },
    body: JSON.stringify(newPost) // Преобразуем объект в JSON-строку
})
.then(response => response.json())
.then(data => console.log('Успех (Задание 2):', data))
.catch(error => console.error('Ошибка (Задание 2):', error));



// Задание 3  =========================================================

// Отправляем запрос с ошибкой чтобы проверить как сработает метод "catch"
fetch('https://jsonplaceholder.typicode.com/nonexistent')
.then(response => {

    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}) 
.then(data => console.log(data)) 
.catch(error => console.error('Ошибка (Задание 3):', error));



// Задание 4  =========================================================

//  -- Обновляем данные с помощью метода "PUT"

const updatedData = { title: 'Top 10 AI technologies'};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
.then(response => response.json())
.then(data => console.log('Обновлено (Задание 4 - PUT method):', data))
.catch(error => console.error('Ошибка (Задание 4 - PUT method):', error));


//  -- Удаляем данные с помощью метода "DELETE"

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(() => console.log('Пользователь удален (Задание 4 - DELETE method)'))
.catch(error => console.error('Ошибка (Задание 4 - DELETE method):', error));
 


// Задание 5  =========================================================

//  -- Переписываем первое задание используя "async/await"

async function getUserInfo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    console.log(`Пост c ID ${id} (Задание 5): `, data);
}

getUserInfo(15)



// Задание 6  =========================================================

//  -- Задаем новые заголовки 
const headers = new Headers({
    'Authorization': 'YOUR_ACCESS_TOKEN',
    'User-Agent': 'Google Chrome'
});

//  -- Добавляем новые заголовки
fetch("https://jsonplaceholder.typicode.com/comments", {
    method: 'GET',
    headers: headers
})
.then(response => {
    if (!response.ok) {
        throw new Error('сервер ответил: ' + response.status);
    }
    return response.status;
})
.then(status => {
    console.log("Заголовки добавлены (Задание 6): статус ", status);
})
.catch(error => {
    console.error('Ошибка (Задание 6):', error);
});