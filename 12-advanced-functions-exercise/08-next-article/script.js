function getArticleGenerator(articles) {
    return () => {
        if (articles.length > 0) { // Ако напишем цикъл, це излязат всичките наведнъж с 1 натискане на бутона.
            let container = document.getElementById('content'); // Взимаме 'id' на 'div'.
            let article = document.createElement('article'); // Създаваме html елемент 'article'.
            let currentText = articles.shift(); // Така, чрез 'while' цикъла взимаме и вадим всеки първи елемент от масива.
            article.innerText = currentText;
            container.appendChild(article);
        }
    }
}
