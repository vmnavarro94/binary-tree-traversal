import * as React from "react";
import { BinTreeNode } from "./TreeNode";

import "./TreeOutput.scss"

export interface TreeOutputProps {
    treeNode: BinTreeNode | null;
    smallestNode: BinTreeNode | null;
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = (props) => {
    if (!props.treeNode || !props.treeNode.id) {
        return <div className="treeNode"></div>;
    }
    return (
        <div className={`treeNode ${props.treeNode === props.smallestNode && 'smallestNode'}`}>
            <div className="nodeId">{props.treeNode.id}</div>
            {props.treeNode.left || props.treeNode.right ?
                <div className="nodeChildren">
                    <TreeOutput treeNode={props.treeNode.left}  smallestNode={props.smallestNode}/>
                    <TreeOutput treeNode={props.treeNode.right} smallestNode={props.smallestNode}/>
                </div> :
                null}
        </div>
    );
}
