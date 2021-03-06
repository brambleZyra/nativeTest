import Mock from 'mockjs'

const Random = Mock.Random;
const produceNewsData = function () {
	let articles = [];
	for (let i = 0; i < 100; i++) {
		let newArticleObject = {
			title: Random.csentence(5, 30),
			thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
			author_name: Random.cname(),
			date: Random.date() + ' ' + Random.time()
		}
		articles.push(newArticleObject);
	}

	return {
		articles: articles
	}
}
Mock.mock('/news/index', 'post', produceNewsData);// 模拟新闻列表数据
