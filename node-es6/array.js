// 数组去重
function unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
}