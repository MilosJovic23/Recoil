


export const TaskValidator={
    required:   "task name cannot be empty",
    validate:   {
        trimCheck:
            value => value.trim() !== "" || "task name cannot contain only spaces",
    }
}