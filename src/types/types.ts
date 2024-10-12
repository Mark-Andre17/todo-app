
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


export default ITodo
export { ButtonText }