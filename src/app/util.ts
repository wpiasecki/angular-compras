

export function getNextId(col: Array<any>) {
    return col.reduce((maxId, obj) => maxId > obj.id ? maxId : obj.id, 0) + 1;
}