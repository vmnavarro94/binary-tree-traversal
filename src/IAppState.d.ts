import { IObservable, IObservableValue } from "mobx";
import {BinTreeNode} from "./TreeNode";


interface IAppState {
    title: string;
    bodyMessage: string;
    treeNode: BinTreeNode | null;
    smallestNode: any;
    
    setState(newState: IAppState)
}
