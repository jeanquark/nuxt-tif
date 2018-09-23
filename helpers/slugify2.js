// module.exports = {
//   	slugify: function(text) {
//     	return text.toString().toLowerCase()
// 			.replace(/\s+/g, '_')           // Replace spaces with -
// 			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
// 			.replace(/\-/g, '_')         // Replace single - with single _
// 			.replace(/\-\-+/g, '_')         // Replace multiple - with single _
// 			.replace(/^-+/, '')             // Trim - from start of text
// 			.replace(/-+$/, '');            // Trim - from end of text
//   	}
// }

// module.exports = function() {
// 	this.slugify2 = function(text) {
// 		return text.toString().toLowerCase()
// 			.replace(/\s+/g, '_')           // Replace spaces with -
// 			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
// 			.replace(/\-/g, '_')         // Replace single - with single _
// 			.replace(/\-\-+/g, '_')         // Replace multiple - with single _
// 			.replace(/^-+/, '')             // Trim - from start of text
// 			.replace(/-+$/, '');            // Trim - from end of text
// 	}
// };

// var slugify2 = function(text) {
// 	return text.toString().toLowerCase()
// 		.replace(/\s+/g, '_')           // Replace spaces with -
// 		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
// 		.replace(/\-/g, '_')         // Replace single - with single _
// 		.replace(/\-\-+/g, '_')         // Replace multiple - with single _
// 		.replace(/^-+/, '')             // Trim - from start of text
// 		.replace(/-+$/, '');            // Trim - from end of text
// }

// module.exports = {
// 	slugify2
// }

module.exports = {
	slugify2: function(text) {
		return text.toString().toLowerCase()
			.replace(/\s+/g, '_')           // Replace spaces with -
			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			.replace(/\-/g, '_')         // Replace single - with single _
			.replace(/\-\-+/g, '_')         // Replace multiple - with single _
			.replace(/^-+/, '')             // Trim - from start of text
			.replace(/ü/, 'u');            // Trim - from end of text
			.replace(/ä/, 'a');            // Trim - from end of text
			.replace(/é/, 'e');            // Trim - from end of text
			.replace(/è/, 'e');            // Trim - from end of text
			.replace(/ö/, 'o');            // Trim - from end of text
	}
}