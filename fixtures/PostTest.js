import faker from 'faker'
import _ from 'lodash'

const getId = () => Math.round((Math.random() * 36 ** 12)).toString(36);

const getPost = (page=0, numItemsPerPage=10) => new Promise((resolve) => {
	const posts = [ ]
	for (let i = page; i <= numItemsPerPage+page; i++) posts.push({
		id: getId(),
		avatar: 'https://unsplash.it/40/40/?random',
		likes: _.random(1,1000),
		text: faker.image.fashion(),
		user: 1,
		userName: faker.internet.userName(),
		img: {uri: 'https://unsplash.it/300/300/?random'},
		createdAt: faker.date.recent(),
		isLike: _.random(0,1)
	});
	resolve(posts)
});

export { getPost }