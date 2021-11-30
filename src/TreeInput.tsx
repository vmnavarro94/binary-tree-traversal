import React, { useState } from "react";
import { BinTreeNode } from "./TreeNode";

import "./TreeInput.scss"

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode | null) => void
}

export const TreeInput: React.FC<TreeInputProps> = (props: TreeInputProps) => {
    const [treeText, setTreeText] = useState('');
    const [arrayString, setArrayString] = useState('');
    const [error, setError] = useState('')

    const handleInpuArrayOnChange = (selectorFiles: FileList | null) => {
        const reader = new FileReader();
        const file: File | null = selectorFiles ? selectorFiles[0] : null;
        if(file) {
            reader.onload = e => {
                setError('');
                const arrayString = e.target?.result as string || '';
                setArrayString(arrayString); 
            }
            reader.readAsText(file);
        }
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

    const convert = () => {

        let treeArrayFormat: any[] = [];
        try {
            treeArrayFormat = JSON.parse(arrayString);
        } catch {
            setError('The array format must be: [id, leftChild, rightChild]');
        }
        const tree: BinTreeNode | null = parseArrayToTree(treeArrayFormat);
        props.onChange(tree);
    }
    return (
        <div>
            Array File: <input type='file' onChange={e => handleInpuArrayOnChange(e.target.files)} /><br />
            {
                error && <span className='arrayInputError'>{error}</span>
            }
            <button onClick={convert}>Process</button><br />
            <textarea value={treeText} rows={5} cols={120} onChange={e => setTreeText(e.target.value)}></textarea>
        </div>
    )
}

