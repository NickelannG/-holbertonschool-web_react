import {RowID} from './interface.ts'
import {RowElement} from './interface.ts'

export function insertRow(row: RowElement): RowID;

export function updateRow(rowId: RowID, row: RowElement): RowID;

export function deleteRow(rowId: RowID): void;
