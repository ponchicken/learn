import {cookie, setCookie, getCookie} from './modules/cookie';
import dragNDrop, {Dnd} from './modules/dragNDrop';

/**
ДЗ 1:
Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

ДЗ 2:
К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
Список текстовых полей:
- имя
- значение
- срок годности (количество дней)

После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.

После добавление cookie, значения текстовых полей формы должны быть очищены.
Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы

ДЗ 3 (со звездочкой):
Взять результат ДЗ по теме DOM Events (страница с кнопкой для создания div'ов, которые можно перетаскивать при помощи D&D)
Добавить на страницу кнопку "сохранить". При нажатии на данную кнопку, количество, цвет и позиция всех div'ов должны быть сохранены в одну cookie.
После перезагрузки страницы, необходимо достать эту информацию из cookie и восстановить все div'ы (с их размерами, позицией и цветами)
 */


// document.cookie = "name=NYAN";
// document.cookie = "type=CAT";

cookie();

let dnd = new Dnd('#create_square');
let squares = getCookie('squares'), squaresJSON;
if(squares){
  squaresJSON = JSON.parse(getCookie('squares'));
  squaresJSON.forEach(el => {
    dnd.createSquare(el)
  });
}

save_square.addEventListener('click',() => {
  console.log(dnd.squaresData);
  document.querySelectorAll('.drag-square');
  setCookie('squares',JSON.stringify(dnd.squaresData));
});
