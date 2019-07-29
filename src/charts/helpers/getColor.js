/* prettier-ignore */
const colorList = ['F05A24', 'EF4E4A', 'EE3F65', 'EC297B', 'E3236C', 'D91C5C', 'BC1E60', '9E1F63', '992271', '952480', '90278E', '7A2A8F', '652D90', '502980', '3B2671', '262261', '27286D', '292D78', '2A3384', '2B388F', '2A4F9F', '2965AF', '277CC0', '2692D0', '25A9E0'];
/* prettier-ignore */
const colorLookup = [
	[0, 4, 10, 18, 24],
	[0, 3, 6, 9, 11, 13, 15, 18, 20, 24],
	[0, 3, 4, 6, 7, 9, 11, 13, 14, 15, 17, 18, 20, 22, 24],
	[0, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24],
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
];
// get Sean's color scheme
export function getColor(idx, total) {
	let colorIdx = null;
	let itemIdx = null

	for (const idxList of colorLookup) {
		if (idxList.length >= total) {
			colorIdx = idxList;
			itemIdx = idx;
		}
	}

	if (colorIdx === null) {
		colorIdx = colorLookup[colorLookup.length - 1];
		itemIdx = idx % colorIdx.length;
	}

	return '#' + colorList[colorIdx[itemIdx]];
}
