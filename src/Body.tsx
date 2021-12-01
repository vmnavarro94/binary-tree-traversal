import * as React from 'react';
import { IAppState } from "./IAppState";
import { observer } from "mobx-react";
import { TreeInput } from './TreeInput';
import { TreeOutput } from './TreeOutput';
import "./Body.scss"
import { useAppStateContext } from './AppState';
import {BinTreeNode} from './TreeNode';
interface BodyProps {
    appState: IAppState
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer((props) => {
    const { appState } = props;
    const setTree = (treeNode: BinTreeNode | null) => {
        appState.setState({
            ...appState,
            treeNode
        })
    }
    const setSmallestNode = (smallestNode: BinTreeNode | null) => {
        console.log(smallestNode);
        appState.setState({
            ...appState,
            smallestNode
        });
    }
    return (
        <main className="App-body">
            {props.appState!.bodyMessage}
            <TreeInput onChange={setTree} setSmallestNode={setSmallestNode}/>
            <div className="OutputContainer">
                <TreeOutput treeNode={props.appState.treeNode} smallestNode={props.appState.smallestNode}/>
            </div>
        </main>
    );
})

export const Body: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <BodyRenderer appState={appState} />
}

export default Body;
