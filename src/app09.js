import cities from './modules/citiesHandlebars';
import VKFriends from './modules/friends';

/**
После загрузки страницы, происходит загрузка городов через AJAX.
Города сортируются по имени и выводятся на странице при помощи шаблонизатора Handlebars. При вводе значений в текстовое поле, должны скрываться те города, в названии которых нет подстроки, указанной в текстовом поле.
 */

/*
Создать приложение для ВКонтакте, которое загружает список ваших друзей и выводит их на страницу в следующем формате: Фото, ФИО, Возраст, Дата рождения.
Друзья должны быть отсортированы по дате рождения в порядке убывания. То есть на самом верху списка расположен друг с ближайший датой рождения.
Использование шаблонизатора приветствуется.
 */

cities();


let friends = new VKFriends();
