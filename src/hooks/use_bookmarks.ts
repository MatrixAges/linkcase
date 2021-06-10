import { useState, useEffect } from 'react'
import { extend } from 'lodash-es'

const filter = (item: chrome.bookmarks.BookmarkTreeNode) => {
	if (!item.children) return

	item.children.map((item: chrome.bookmarks.BookmarkTreeNode) => {
		return filter(extend(item, { key: item.id }))
	})
}

const Index = () => {
	const [bookmarks, setBookmarks] = useState<Array<chrome.bookmarks.BookmarkTreeNode>>([])

	useEffect(() => {
		// chrome.bookmarks.getTree((res) => {
		// 	if (res[0] && res[0].children) {
		// 		const _bookmarks = res[0].children
		// 		_bookmarks.map((item) => {
		// 			filter(extend(item, { key: item.id }))
		// 		})
		// 		setBookmarks(_bookmarks)
		// 	}
		// })
	}, [])

	return bookmarks
}

export default Index
