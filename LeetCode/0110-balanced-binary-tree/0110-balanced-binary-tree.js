/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function dfs(node) {
        if (!node) return [true, 0];
        
        const [leftBalanced, leftHeight] = dfs(node.left);
        const [rightBalanced, rightHeight] = dfs(node.right);
        
        const isBalanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
        
        return [isBalanced, 1 + Math.max(leftHeight, rightHeight)];
    }
    
    return dfs(root)[0];    
};