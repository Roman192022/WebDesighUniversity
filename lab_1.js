

document.addEventListener('DOMContentLoaded', function () {
    const movieScheduleData = [

        { time: '02.12 12:00', 
          film: 'Титанік (1997)', 
          description: `
                        Епічний фільм Джеймса Кемерона, що розповідає про неймовірне кохання між Джеком і Розою 
                        на фоні трагедії потоплення "Титаніка", здобувший 11 премій "Оскар". 
                       `
        },

        { time: '04.12 18:00', 
          film: 'Аватар (2009)', 
          description: `
                       Фантастичний екшн від Джеймса Кемерона, де люди взаємодіють з іншопланетними жителями за допомогою 
                       аватарів, створюючи захоплюючу сагу про пригоди та екологічні проблеми.
                       `
        },

        { time: '15.12 15:00', 
          film: 'Ромео і Джульєтта" (2013)', 
          description: `
                       Сучасна екранізація класичної трагедії Шекспіра, яка привносить свіжість у вічну історію кохання 
                       молодих сердець, за допомогою захоплюючих акторських виконань та красивих візуальних образів. 
                       `
        },

       { time: '24.12 17:00', 
          film: 'Сам удома (1990)', 
          description: `
                       Культова комедія Кріса Коламбуса, в якій восьмилітній Кевін Маккаллістер випадково залишається 
                       сам удома і веде війну проти злочинців, забезпечуючи безліч неперевершених моментів гумору. 
                       `
        }

    ];

    const movieScheduleElement = document.getElementById('movieSchedule');
    const movieDescriptionElement = document.querySelector('.movieDescription');

    // Реалізація вставки розкладу сеансів
    movieScheduleData.forEach(session => {
        const sessionElement = document.createElement('div');
        sessionElement.classList.add('movieItem');
        sessionElement.textContent = `${session.time} - ${session.film}`;
        sessionElement.addEventListener('click', () => displayMovieDescription(session.description));
        movieScheduleElement.appendChild(sessionElement);

    
    // Додавання обробників подій для кнопок
    const infoButton = document.getElementById('infoButton');
    infoButton.addEventListener('click', displayCinemaInfo);
    
    });

    // Реалізація вставки опису фільму при наведенні
    function displayMovieDescription(description) {
        movieDescriptionElement.innerHTML = `<p>${description || 'Опис недоступний.'}</p>`;
    }

    // Функція для відображення інформації про кінотеатр
    function displayCinemaInfo() {
        const cinemaInfoElement = document.getElementById('cinemaInfo');
        cinemaInfoElement.innerHTML = '<p>Адреса: вулиця Кобилянської, 14, Чернівці, Чернівецька область, 58000 <br> Телефон: 0372 524 318.</p>';
    }


 });


