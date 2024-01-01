import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	fallbackLng: 'ru',
	lng: 'en',
	resources: {
		en: {
			translation: {
				'About us': 'About us',
				'Artem Kaliganov': 'Artem Kaliganov',
				'Contact us': 'Contact us',
				FAQ: 'FAQ',
				GitHub: 'GitHub',
				Home: 'Home',
				Live: 'Live',
				Movies: 'Movies',
				Premium: 'Premium',
				'Privacy policy': 'Privacy policy',
				'Recent release': 'Recent release',
				'TV Series': 'TV Series',
				'Term of services': 'Term of services',
				'You must watch': 'You must watch',
				'Sign up': 'Sign up',
				'Sign in': 'Sign in',
				Login: 'Login',
				Registration: 'Registration',
				Username: 'Username',
				Password: 'Password',
				Email: 'Email',
				'This field is required': 'This field is required',
				'Enter a valid email': 'Enter a valid email',
				'Watch now': 'Watch now',
				'Watch trailer': 'Watch trailer',
				'View more': 'View more',
				'Top Rated Movies': 'Top Rated Movies',
				'Trending TV': 'Trending TV',
				'Trending Movies': 'Trending Movies'
			}
		},
		ru: {
			translation: {
				'About us': 'О нас',
				'Artem Kaliganov': 'Артем Калиганов',
				'Contact us': 'Свяжитесь с нами',
				FAQ: 'Часто задаваемые вопросы',
				GitHub: 'GitHub',
				Home: 'Главная',
				Live: 'Прямой эфир',
				Movies: 'Фильмы',
				Premium: 'Премиум',
				'Privacy policy': 'Политика конфиденциальности',
				'Recent release': 'Недавний релиз',
				'TV Series': 'ТВ Сериалы',
				'Term of services': 'Условия использования',
				'You must watch': 'Вы должны посмотреть',
				'Sign up': 'Зарегистрироваться',
				'Sign in': 'Войти',
				Login: 'Вход',
				Registration: 'Регистрация',
				Username: 'Имя пользователя',
				Password: 'Пароль',
				Email: 'Почта',
				'This field is required': 'Это поле обязательно',
				'Enter a valid email': 'Введите корректный email',
				'Watch now': 'Смотреть сейчас',
				'Watch trailer': 'Смотреть трейлер',
				'View more': 'Посмотреть больше',
				'Top Rated Movies': 'Лучшие фильмы',
				'Trending TV': 'Популярные ТВ-шоу',
				'Trending Movies': 'Популярные фильмы'
			}
		}
	}
})

export default i18n
