/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rows = image.length;
    const cols = image[0].length;
    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    function dfs(r, c) {
        if (image[r][c] === originalColor) {
            image[r][c] = color;

            if (r >= 1) dfs(r - 1, c);       // Up
            if (r + 1 < rows) dfs(r + 1, c); // Down
            if (c >= 1) dfs(r, c - 1);       // Left
            if (c + 1 < cols) dfs(r, c + 1); // Right
        }
    }

    dfs(sr, sc);
    return image;
};
