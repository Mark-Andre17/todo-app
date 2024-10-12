
interface ITodo {
    id: string;
    title: string;
    completed: boolean;
    visible?: boolean;
}

const enum ButtonText {
    ADD = "Add",
    EDIT = "Edit",
    DELETE = "Delete",
    SAVE = "Save",
    CANCEL = "Cancel",
    SHOW = 'Show all tasks',
    ACTIVE = 'Show active tasks',
    COMPLETED = 'Show completed tasks'
}
const enum ClassNameText {
    LINE = 'line__text',
    VISIBLE = 'visible__text'
 }

export default ITodo
export { ButtonText, ClassNameText }