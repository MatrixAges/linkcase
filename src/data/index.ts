import type { ILinkItem } from '@/@types/app'

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
	{
		id: 0,
		name: '我的壁纸',
		type: 'wallpaper',
		row: 3,
		column: 2,
		x: 0,
		y: 0,
		data: [
			{
				name: '猫头鹰',
				date: '2018年9月18日',
				src: require('@/assets/test_images/photo_ex.jpeg')
			}
		]
	},
	{
		id: 0,
		name: '待办事项',
		type: 'note',
		row: 3,
		column: 3,
		x: 2,
		y: 0,
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
		id: 0,
		name: 'Mangguo TV',
		url: 'baidu.com',
		image: require('@/assets/test_images/5d40694f54e8e3a42f42a6d4187ff6f5.png')
	},
	{
		id: 1,
		name: 'Mukewang',
		url: 'baidu.com',
		image: require('@/assets/test_images/6e5da7bc6eaf3ecce1ca1affcf20fca5.png')
	},
	{
		id: 2,
		name: 'Google',
		url: 'baidu.com',
		image: require('@/assets/test_images/9c143bceb17150ce8db6553fdc995136.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/37d396f9975e494b10ac8696d64ebb2a.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/8bffc9cf5c9f6e5980bf21e7af3a4462.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/8d5d3d6a4cd5011741d4160eddc0f5eb.png')
	},
	{
		id: 6,
		name: 'Twitter',
		url: 'baidu.com',
		image: require('@/assets/test_images/8f03e3943a4b730e328bb1d1906e5856.png')
	},
	{
		id: 7,
		name: 'Zhanku',
		url: 'baidu.com',
		image: require('@/assets/test_images/af854949e0e7086b62c222744f898025.png')
	},
	{
		id: 0,
		name: 'Mangguo TV',
		url: 'baidu.com',
		image: require('@/assets/test_images/af9edd3c1d5373427c762d51cf56fa1f.png')
	},
	{
		id: 1,
		name: 'Mukewang',
		url: 'baidu.com',
		image: require('@/assets/test_images/ab397474a68cae01968ea26324f239c2.png')
	},
	{
		id: 2,
		name: 'Google',
		url: 'baidu.com',
		image: require('@/assets/test_images/a23b4cf17327527ae66aad5d13f059da.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/a1c2d6a96b9a52002f3907bb8ff6fb3a.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/150327085725.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/65416817a1e05e3b97f074a88c258091.png')
	},
	{
		id: 6,
		name: 'Twitter',
		url: 'baidu.com',
		image: require('@/assets/test_images/5434725f7bd599d399c821b4daf1e285.png')
	},
	{
		id: 7,
		name: 'Zhanku',
		url: 'baidu.com',
		image: require('@/assets/test_images/af854949e0e7086b62c222744f898025.png')
	},
	{
		id: 0,
		name: 'Mangguo TV',
		url: 'baidu.com',
		image: require('@/assets/test_images/5d40694f54e8e3a42f42a6d4187ff6f5.png')
	},
	{
		id: 1,
		name: 'Mukewang',
		url: 'baidu.com',
		image: require('@/assets/test_images/0998004affb9478aefee50b93f132908.png')
	},
	{
		id: 2,
		name: 'Google',
		url: 'baidu.com',
		image: require('@/assets/test_images/674583b12311fc9ff54d0282b18d7186.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	},
	{
		id: 3,
		name: 'Youtube',
		url: 'baidu.com',
		image: require('@/assets/test_images/534995dd434a6e0e39a4521a5fe04f8e.png')
	},
	{
		id: 4,
		name: 'Renren Community',
		url: 'baidu.com',
		image: require('@/assets/test_images/185330a52715cea8491b46cfc417c00a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/93668fdf92bc2d37e74deda5ce0e2538.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/33436bf12b444c5f7ffecbd8adf33966.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/7217a2ae99c3fd510f2f25c4c4866065.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/296e43477223f58ec7fa5fdbb87f1d68.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/83a31f5de7b62ad4c8d8e62d05fafd38.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/66f3d54ad9a6e62fbcb13bbf96211f67.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/51ac1b5b07141efc426caafcf3a7e78a.png')
	},
	{
		id: 5,
		name: 'Xueqiu',
		url: 'baidu.com',
		image: require('@/assets/test_images/35b807f7b8916f56c77d5f16ca15613d.png')
	}
]
