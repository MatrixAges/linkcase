import type { ILinkItem } from '@/typings/app'

export const bar_items = [
	{
		id: 0,
		name: 'Mangguo TV',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/5d40694f54e8e3a42f42a6d4187ff6f5.png')
	},
	{
		id: 1,
		name: 'Mukewang',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/6e5da7bc6eaf3ecce1ca1affcf20fca5.png')
	},
	{
		id: 2,
		name: 'Google',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/9c143bceb17150ce8db6553fdc995136.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/37d396f9975e494b10ac8696d64ebb2a.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/8bffc9cf5c9f6e5980bf21e7af3a4462.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/8d5d3d6a4cd5011741d4160eddc0f5eb.png')
	},
	{
		id: 6,
		name: 'Twitter',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/8f03e3943a4b730e328bb1d1906e5856.png')
	},
	{
		id: 7,
		name: 'Zhanku',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/af854949e0e7086b62c222744f898025.png')
	},
	{
		id: 0,
		name: 'Mangguo TV',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/af9edd3c1d5373427c762d51cf56fa1f.png')
	},
	{
		id: 1,
		name: 'Mukewang',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/ab397474a68cae01968ea26324f239c2.png')
	},
	{
		id: 2,
		name: 'Google',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/a23b4cf17327527ae66aad5d13f059da.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/a1c2d6a96b9a52002f3907bb8ff6fb3a.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/150327085725.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/65416817a1e05e3b97f074a88c258091.png')
	},
	{
		id: 6,
		name: 'Twitter',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/5434725f7bd599d399c821b4daf1e285.png')
	},
	{
		id: 7,
		name: 'Zhanku',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/af854949e0e7086b62c222744f898025.png')
	},
	{
		id: 0,
		name: 'Mangguo TV',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/5d40694f54e8e3a42f42a6d4187ff6f5.png')
	},
	{
		id: 1,
		name: 'Mukewang',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/0998004affb9478aefee50b93f132908.png')
	},
	{
		id: 2,
		name: 'Google',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/674583b12311fc9ff54d0282b18d7186.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		active: false,
		opened: false,
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	}
]

export const link_items: Array<ILinkItem> = [
	// {
	// 	id: -2,
	// 	type: 'holder'
	// },
	// {
	// 	id: -1,
	// 	type: 'holder'
	// },
	{
		id: 0,
		name: '我的壁纸',
		type: 'wallpaper',
		column: 2,
		row: 2,
		data: [
			{
				name: '猫头鹰',
				date: '2018年9月18日',
				src: require('@/assets/test_images/photo_ex.jpeg')
			}
		]
	},
	{
		id: 1,
		name: '待办事项',
		type: 'note',
		column: 3,
		row: 2,
		data: [
			{
				text: '晚上六点给猫咪加猫粮',
				done: false
			},
			{
				text: '待会发布知乎想法，简单说说linkcase的开发进度',
				done: true
			},
			{
				text: '晚上查一下电费，看看还剩多少钱',
				done: false
			},
			{
				text: '梳理一下linkcase的需求，以及在开发中的想法',
				done: false
			},
			{
				text: '健身一小时',
				done: false
			}
		]
	},
	{
		id: 2,
		name: 'Mangguo TV',
		url: 'baidu.com',
		image: require('@/assets/test_images/5d40694f54e8e3a42f42a6d4187ff6f5.png')
	},
	{
		id: 3,
		name: 'Mukewang',
		url: 'baidu.com',
		image: require('@/assets/test_images/6e5da7bc6eaf3ecce1ca1affcf20fca5.png')
	},
	{
		id: 4,
		name: 'Google',
		url: 'baidu.com',
		image: require('@/assets/test_images/9c143bceb17150ce8db6553fdc995136.png')
	},
	{
		id: 5,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/37d396f9975e494b10ac8696d64ebb2a.png')
	},
	{
		id: 6,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/8bffc9cf5c9f6e5980bf21e7af3a4462.png')
	},
	{
		id: 7,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/8d5d3d6a4cd5011741d4160eddc0f5eb.png')
	},
	{
		id: 8,
		name: 'Twitter',
		url: 'baidu.com',
		image: require('@/assets/test_images/8f03e3943a4b730e328bb1d1906e5856.png')
	},
	{
		id: 9,
		name: 'Zhanku',
		url: 'baidu.com',
		image: require('@/assets/test_images/af854949e0e7086b62c222744f898025.png')
	},
	{
		id: 10,
		name: 'Mangguo TV',
		url: 'baidu.com',
		image: require('@/assets/test_images/af9edd3c1d5373427c762d51cf56fa1f.png')
	},
	{
		id: 11,
		name: 'Mukewang',
		url: 'baidu.com',
		image: require('@/assets/test_images/ab397474a68cae01968ea26324f239c2.png')
	},
	{
		id: 12,
		name: 'Google',
		url: 'baidu.com',
		image: require('@/assets/test_images/a23b4cf17327527ae66aad5d13f059da.png')
	},
	{
		id: 13,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/a1c2d6a96b9a52002f3907bb8ff6fb3a.png')
	},
	{
		id: 14,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/150327085725.png')
	},
	{
		id: 15,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/65416817a1e05e3b97f074a88c258091.png')
	},
	{
		id: 16,
		name: 'Twitter',
		url: 'baidu.com',
		image: require('@/assets/test_images/5434725f7bd599d399c821b4daf1e285.png')
	},
	{
		id: 17,
		name: 'Zhanku',
		url: 'baidu.com',
		image: require('@/assets/test_images/af854949e0e7086b62c222744f898025.png')
	},
	{
		id: 18,
		name: 'Mangguo TV',
		url: 'baidu.com',
		image: require('@/assets/test_images/5d40694f54e8e3a42f42a6d4187ff6f5.png')
	},
	{
		id: 19,
		name: 'Mukewang',
		url: 'baidu.com',
		image: require('@/assets/test_images/0998004affb9478aefee50b93f132908.png')
	},
	{
		id: 20,
		name: 'Google',
		url: 'baidu.com',
		image: require('@/assets/test_images/674583b12311fc9ff54d0282b18d7186.png')
	},
	{
		id: 21,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 22,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 23,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 24,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 25,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 26,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 27,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 28,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 29,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 30,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	},
	{
		id: 31,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 32,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 33,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 34,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 35,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 36,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 37,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 38,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 39,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 40,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	},
	{
		id: 41,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 42,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 43,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 44,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 45,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 46,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 47,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 48,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 49,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 50,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	},
	{
		id: 51,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 52,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 53,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 54,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 55,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 56,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 57,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 58,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 59,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 60,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	}
]

export const site_category = [
	{
		id: 0,
		name: 'Popular',
		icon: 'FireOutlined'
	},
	{
		id: 1,
		name: 'Share',
		icon: 'ShareAltOutlined'
	},
	{
		id: 2,
		name: 'PWA',
		icon: 'ExperimentOutlined'
	},
	{
		id: -2,
		name: 'Develop',
		icon: 'CodeSandboxOutlined'
	},
	{
		id: 3,
		name: 'News',
		icon: 'BellOutlined'
	},
	{
		id: 4,
		name: 'Media',
		icon: 'YoutubeOutlined'
	},
	{
		id: 5,
		name: 'Photo',
		icon: 'InstagramOutlined'
	},
	{
		id: 6,
		name: 'Shopping',
		icon: 'ShoppingOutlined'
	},
	{
		id: 7,
		name: 'Community',
		icon: 'RedditOutlined'
	},
	{
		id: -1,
		name: 'Social',
		icon: 'MessageOutlined'
	},
	{
		id: 8,
		name: 'Blog',
		icon: 'MediumOutlined'
	},
	{
		id: 9,
		name: 'Travel',
		icon: 'CarOutlined'
	},
	{
		id: 10,
		name: 'Life',
		icon: 'CoffeeOutlined'
	},
	{
		id: 11,
		name: 'Game',
		icon: 'RocketOutlined'
	},
	{
		id: 12,
		name: 'Education',
		icon: 'ScheduleOutlined'
	},
	{
		id: -3,
		name: 'Work',
		icon: ''
	},
	{
		id: 13,
		name: 'Tech',
		icon: 'SendOutlined'
	},
	{
		id: 14,
		name: 'Finance',
		icon: 'DollarCircleOutlined'
	},
	{
		id: 15,
		name: 'Stock',
		icon: 'MacCommandOutlined'
	},
	{
		id: 16,
		name: 'Reading',
		icon: 'ReadOutlined'
	},
	{
		id: 17,
		name: 'Others',
		icon: 'AppstoreOutlined'
	}
]
