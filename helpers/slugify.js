// export default function slugify(text) {
// 	return text.toString().toLowerCase()
// 		.replace(/\s+/g, '_')           // Replace spaces with -
// 		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
// 		.replace(/\-/g, '_')         // Replace single - with single _
// 		.replace(/\-\-+/g, '_')         // Replace multiple - with single _
// 		.replace(/^-+/, '')             // Trim - from start of text
// 		.replace(/-+$/, '');            // Trim - from end of text
// }

module.exports = {
	slugify: function(text) {
		return text.toString().toLowerCase()
			.replace(/\s+/g, '_')           // Replace spaces with -
			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			.replace(/\-/g, '_')         // Replace single - with single _
			.replace(/\-\-+/g, '_')         // Replace multiple - with single _
			.replace(/^-+/, '')             // Trim - from start of text
			.replace(/-+$/, '');            // Trim - from end of text
	}
}
