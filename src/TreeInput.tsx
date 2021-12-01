import React, { useState } from "react";
import { BinTreeNode } from "./TreeNode";
/// @ts-ignore
import jsonlint from 'jsonlint-mod';

import "./TreeInput.scss"

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode | null) => void
    setSmallestNode: (smallestNode: BinTreeNode | null) => void
}

/**
 * Converts array format binary tree notation to BinTreeNode data structure
 * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
 * @returns TreeNode format
 * */
const parseArrayToTree = (arrayFormat: any[]): BinTreeNode | null => {
    if (!arrayFormat)
        return null;
    return new BinTreeNode(arrayFormat[0], parseArrayToTree(arrayFormat[1]), parseArrayToTree(arrayFormat[2]));
};

const prettyStringify = (tree: BinTreeNode | null) => JSON.stringify(tree, undefined, 4);

/**
 * Calculates the depth of a binary tree that fits the BinTreeNode data structure
 * @param tree: BinTreeNode
 * @returns treeDepth: number 
 */
const findTreeDepth = (tree: BinTreeNode | null): number => {
    //Breakpoint
    if (!tree)
        return 0;
    //Leaf node; last level
    if (!tree.left && !tree.right)
        return 1;
    //Go to next level, increase 1
    return Math.max(findTreeDepth(tree.left), findTreeDepth(tree.right)) + 1;
};

/**
 * Finds the smallest subtree containing all deepest nodes
 * @param tree: BinTreeNode target: BinTreeNode = null
 * @returns target: BinTreeNode
 */
export const findSmallestNode = (tree: BinTreeNode | null): BinTreeNode | null => {
    //Breakpoint
    if (!tree)
        return tree;
    const { left, right } = tree;
    // Get left subtree depth
    const leftDepth = findTreeDepth(left);
    // Get right subtree depth
    const righDepth = findTreeDepth(right);

    // Same depth means this is the deepest 
    if ( leftDepth === righDepth )
        return tree;
    // If not there yet, find traverse through the deepest
    const deepestSubTree: BinTreeNode | null = leftDepth > righDepth ? left : right;
    return findSmallestNode(deepestSubTree);
}

export const TreeInput: React.FC<TreeInputProps> = (props: TreeInputProps) => {
    const { onChange: onJSONChange, setSmallestNode } = props;

    const [treeText, setTreeText] = useState('');
    const [arrayString, setArrayString] = useState('');
    const [arrayError, setArrayError] = useState('');
    const [jsonError, setJsonError] = useState('');

    const handleInpuArrayOnChange = (selectorFiles: FileList | null) => {
        const reader = new FileReader();
        const file: File | null = selectorFiles ? selectorFiles[0] : null;
        if(file) {
            reader.onload = e => {
                setArrayError('');
                const arrayString = e.target?.result as string || '';
                setArrayString(arrayString); 
            }
            reader.readAsText(file);
        }
    };

    const handleTextAreaOnChange = (jsonString: string) => {
        setTreeText(jsonString);
        try {
            const tree: BinTreeNode | null = jsonlint.parse(jsonString) as BinTreeNode;
            onJSONChange(tree);
            setSmallestNode(findSmallestNode(tree));
            setJsonError('');
        } catch (e) {
            setJsonError(e.message);
        }
    };

    const convert = () => {
        try {
            let treeArrayFormat: any[] = jsonlint.parse(arrayString);
            if (!Array.isArray(treeArrayFormat))
                throw new Error();
            const tree: BinTreeNode | null = parseArrayToTree(treeArrayFormat);
            onJSONChange(tree);
            setSmallestNode(findSmallestNode(tree));
            setTreeText(prettyStringify(tree));
        } catch {
            setArrayError('The array format must be: [id, leftChild, rightChild]');
        } 
    }

    const prettifyTextArea = () => {
        try {
            const tree : BinTreeNode | null = jsonlint.parse(treeText);
            setTreeText(prettyStringify(tree));
            setJsonError('');
        } catch (e) {
            setJsonError(e.message);
        }
    };

    return (
        <div>
            Array File: <input type='file' onChange={e => handleInpuArrayOnChange(e.target.files)} /><br />
            {
                arrayError && <span className='error'>{arrayError}</span>
            }
            <button onClick={convert}>Process</button><br />
            <textarea value={treeText} rows={30} cols={80} onChange={e => handleTextAreaOnChange(e.target.value)} onBlur={prettifyTextArea}></textarea>
            <button onClick={prettifyTextArea}>Prettify</button>
            {
                jsonError && <span className='error'>{jsonError}</span>
            }
        </div>
    )
}

