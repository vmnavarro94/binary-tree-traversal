export class BinTreeNode {
    id: string;
    left: BinTreeNode | null;
    right: BinTreeNode | null
    constructor(id: string, left: BinTreeNode | null, right: BinTreeNode | null) {
        this.id = id;
        this.left = left;
        this.right = right
    }
}

export const createBinTreeNode = (object: any): BinTreeNode | null => {
    if (!object)
        return null;
    if (object && !object.id)
        throw { message: 'All nodes should have `id` field.' };
    return new BinTreeNode(object.id, createBinTreeNode(object.left), createBinTreeNode(object.right));
};
